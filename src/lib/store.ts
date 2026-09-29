import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  addYearsISO,
  buildCalendar,
  computeStats,
  firstUnloggedDate,
  makeInitialCycle,
  mergeCalendar,
  MILESTONE_THRESHOLDS,
  newId,
  overlayLatestSeed,
  SEED_REV,
  snapshotArchive,
  type ArchivedCycle,
  type CycleMeta,
  type DayEntry,
  type MilestoneNoteMap,
  type Purchase,
  type QuoteMap,
  type Section,
  type TrackerStats,
} from "./tracker-data";
import { applyTheme, isThemeId, type ThemeId } from "./theme";
import { hashPin } from "./pin";
import { todayISO } from "./utils";

type LogPayload = {
  date: string;
  deposit: number;
  bankBalance: number | null;
  notes: string;
};

type NextCyclePlan = {
  targetAmount: number;
  endDate: string;
  dailyTarget: number;
};

type TrackerState = {
  cycle: CycleMeta;
  days: DayEntry[];
  archive: ArchivedCycle[];
  purchases: Purchase[];
  milestoneNotes: MilestoneNoteMap;
  pendingComplete: ArchivedCycle | null;
  section: Section;
  theme: ThemeId;
  soundOn: boolean;
  pinHash: string | null;
  pinSkipped: boolean;
  reminderOn: boolean;
  reminderTime: string;
  lastReminderDate: string | null;
  quotes: QuoteMap;
  seedRev: number;
  selectedDate: string;
  burstId: number;
  logTick: number;
  lastLoggedDate: string | null;
  thousandBurst: { id: number; mark: number } | null;
  hydrated: boolean;
  setSection: (section: Section) => void;
  setTheme: (theme: ThemeId) => void;
  setSelectedDate: (date: string) => void;
  logDeposit: (payload: LogPayload) => { completed: boolean; crossed: number[] };
  updateCyclePlan: (plan: NextCyclePlan) => { completed: boolean };
  startNextCycle: (plan: NextCyclePlan) => void;
  addPurchase: (p: Omit<Purchase, "id">) => void;
  updatePurchase: (id: string, p: Omit<Purchase, "id">) => void;
  removePurchase: (id: string) => void;
  setMilestoneNote: (threshold: number, notes: string) => void;
  setSoundOn: (on: boolean) => void;
  setPin: (pin: string) => Promise<void>;
  skipPin: () => void;
  clearPin: () => void;
  checkPin: (pin: string) => Promise<boolean>;
  setReminder: (on: boolean, time?: string) => void;
  markReminded: (date: string) => void;
  setQuote: (ticker: string, price: number) => void;
  exportBackup: () => string;
  importBackup: (raw: string) => void;
  resetToSeed: () => void;
  hydrate: () => void;
};

function checkGoal(days: DayEntry[], cycle: CycleMeta): ArchivedCycle | null {
  const stats = computeStats(days, cycle);
  if (stats.totalDeposited + 1e-9 < cycle.targetAmount) return null;
  return snapshotArchive(cycle, days, stats.today);
}

function migrateV1(): { days?: DayEntry[]; purchases?: Purchase[] } | null {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem("k10-daily-v1");
    if (!raw) return null;
    const parsed = JSON.parse(raw) as {
      state?: {
        days?: DayEntry[];
        milestones?: Array<{
          amountInvested: number | null;
          company: string;
          ticker: string;
          dateInvested: string;
          notes: string;
        }>;
      };
    };
    const days = parsed.state?.days;
    const purchases = (parsed.state?.milestones ?? [])
      .filter((m) => m.amountInvested != null && m.amountInvested > 0)
      .map((m) => ({
        id: newId(),
        date: m.dateInvested || todayISO(),
        ticker: m.ticker,
        company: m.company,
        amount: m.amountInvested ?? 0,
        shares: 0,
        notes: m.notes,
      }));
    return { days, purchases };
  } catch {
    return null;
  }
}

const initial = makeInitialCycle();

function initialTheme(): ThemeId {
  if (typeof document === "undefined") return "gold";
  const t = document.documentElement.dataset.theme;
  return isThemeId(t) ? t : "gold";
}

export const useTracker = create<TrackerState>()(
  persist(
    (set, get) => ({
      cycle: {
        id: initial.id,
        number: initial.number,
        startDate: initial.startDate,
        endDate: initial.endDate,
        targetAmount: initial.targetAmount,
        dailyTarget: initial.dailyTarget,
      },
      days: initial.days,
      archive: [],
      purchases: [],
      milestoneNotes: {},
      pendingComplete: null,
      section: "savings",
      theme: initialTheme(),
      soundOn: true,
      pinHash: null,
      pinSkipped: false,
      reminderOn: false,
      reminderTime: "20:00",
      lastReminderDate: null,
      quotes: {},
      seedRev: 0,
      selectedDate: todayISO(),
      burstId: 0,
      logTick: 0,
      lastLoggedDate: null,
      thousandBurst: null,
      hydrated: false,
      setSection: (section) => set({ section }),
      setTheme: (theme) => {
        applyTheme(theme);
        set({ theme });
      },
      setSelectedDate: (date) => set({ selectedDate: date }),
      logDeposit: (payload) => {
        const cycle = get().cycle;
        const prevTotal = computeStats(get().days, cycle).totalDeposited;
        set((state) => ({
          days: state.days.map((d) =>
            d.date === payload.date
              ? {
                  ...d,
                  deposit: payload.deposit,
                  bankBalance: payload.bankBalance,
                  notes: payload.notes,
                }
              : d,
          ),
          selectedDate: payload.date,
          burstId: payload.deposit > 0 ? state.burstId + 1 : state.burstId,
          logTick: state.logTick + 1,
          lastLoggedDate: payload.date,
        }));
        const nextTotal = computeStats(get().days, cycle).totalDeposited;
        const prevK = Math.floor(prevTotal / 1000);
        const nextK = Math.floor(nextTotal / 1000);
        if (nextK > prevK) {
          set((state) => ({
            thousandBurst: { id: (state.thousandBurst?.id ?? 0) + 1, mark: nextK * 1000 },
          }));
        }
        const crossed = MILESTONE_THRESHOLDS.filter((t) => prevTotal < t && nextTotal >= t);
        const snap = checkGoal(get().days, get().cycle);
        if (snap && !get().pendingComplete) set({ pendingComplete: snap });
        return { completed: !!snap, crossed };
      },
      updateCyclePlan: (plan) => {
        const cycle = get().cycle;
        const start = cycle.startDate;
        const end = plan.endDate < start ? start : plan.endDate;
        const days = mergeCalendar(get().days, start, end);
        const next: CycleMeta = {
          ...cycle,
          endDate: end,
          targetAmount: plan.targetAmount,
          dailyTarget: plan.dailyTarget,
        };
        set({ cycle: next, days });
        const snap = checkGoal(days, next);
        if (snap) set({ pendingComplete: snap });
        return { completed: !!snap };
      },
      startNextCycle: (plan) => {
        const today = todayISO();
        const current = get();
        const archived =
          current.pendingComplete ?? snapshotArchive(current.cycle, current.days, today);
        const end = plan.endDate < today ? addYearsISO(today, 1) : plan.endDate;
        const days = buildCalendar(today, end, []);
        set({
          archive: [...current.archive, archived],
          pendingComplete: null,
          cycle: {
            id: newId(),
            number: archived.number + 1,
            startDate: today,
            endDate: end,
            targetAmount: plan.targetAmount,
            dailyTarget: plan.dailyTarget,
          },
          days,
          selectedDate: today,
          burstId: 0,
        });
      },
      addPurchase: (p) =>
        set((state) => ({
          purchases: [{ ...p, id: newId() }, ...state.purchases],
        })),
      updatePurchase: (id, p) =>
        set((state) => ({
          purchases: state.purchases.map((row) => (row.id === id ? { ...row, ...p, id } : row)),
        })),
      removePurchase: (id) =>
        set((state) => ({
          purchases: state.purchases.filter((row) => row.id !== id),
        })),
      setMilestoneNote: (threshold, notes) =>
        set((state) => ({
          milestoneNotes: { ...state.milestoneNotes, [threshold]: notes },
        })),
      setSoundOn: (on) => set({ soundOn: on }),
      setPin: async (pin) => {
        const pinHash = await hashPin(pin);
        set({ pinHash, pinSkipped: true });
      },
      skipPin: () => set({ pinSkipped: true }),
      clearPin: () => set({ pinHash: null }),
      checkPin: async (pin) => {
        const hash = get().pinHash;
        if (!hash) return true;
        return (await hashPin(pin)) === hash;
      },
      setReminder: (on, time) =>
        set((state) => ({
          reminderOn: on,
          reminderTime: time ?? state.reminderTime,
        })),
      markReminded: (date) => set({ lastReminderDate: date }),
      setQuote: (ticker, price) =>
        set((state) => ({
          quotes: {
            ...state.quotes,
            [ticker]: { price, updatedAt: todayISO() },
          },
        })),
      exportBackup: () => {
        const s = get();
        return JSON.stringify(
          {
            app: "k10-daily",
            version: 1,
            exportedAt: new Date().toISOString(),
            cycle: s.cycle,
            days: s.days,
            archive: s.archive,
            purchases: s.purchases,
            milestoneNotes: s.milestoneNotes,
            pendingComplete: s.pendingComplete,
            theme: s.theme,
            soundOn: s.soundOn,
            reminderOn: s.reminderOn,
            reminderTime: s.reminderTime,
            quotes: s.quotes,
          },
          null,
          2,
        );
      },
      importBackup: (raw) => {
        const data = JSON.parse(raw) as {
          app?: string;
          cycle?: CycleMeta;
          days?: DayEntry[];
          archive?: ArchivedCycle[];
          purchases?: Purchase[];
          milestoneNotes?: MilestoneNoteMap;
          pendingComplete?: ArchivedCycle | null;
          theme?: unknown;
          soundOn?: boolean;
          reminderOn?: boolean;
          reminderTime?: string;
          quotes?: QuoteMap;
        };
        if (!data.days || !Array.isArray(data.days)) {
          throw new Error("This file is not a K10 Daily backup.");
        }
        const cycle = data.cycle ?? get().cycle;
        const days = mergeCalendar(data.days, cycle.startDate, cycle.endDate);
        const theme = isThemeId(data.theme) ? data.theme : get().theme;
        applyTheme(theme);
        set({
          cycle,
          days,
          archive: data.archive ?? [],
          purchases: data.purchases ?? [],
          milestoneNotes: data.milestoneNotes ?? {},
          pendingComplete: data.pendingComplete ?? null,
          theme,
          soundOn: typeof data.soundOn === "boolean" ? data.soundOn : get().soundOn,
          reminderOn: typeof data.reminderOn === "boolean" ? data.reminderOn : get().reminderOn,
          reminderTime: data.reminderTime ?? get().reminderTime,
          quotes: data.quotes ?? get().quotes,
          selectedDate: firstUnloggedDate(days, todayISO()),
        });
      },
      resetToSeed: () => {
        const seed = makeInitialCycle();
        set({
          cycle: {
            id: seed.id,
            number: seed.number,
            startDate: seed.startDate,
            endDate: seed.endDate,
            targetAmount: seed.targetAmount,
            dailyTarget: seed.dailyTarget,
          },
          days: seed.days,
          archive: [],
          purchases: [],
          milestoneNotes: {},
          pendingComplete: null,
          selectedDate: todayISO(),
          burstId: 0,
          seedRev: SEED_REV,
        });
      },
      hydrate: () => {
        if (get().hydrated) return;
        const hasV2 =
          typeof localStorage !== "undefined" && Boolean(localStorage.getItem("k10-daily-v2"));
        const v1 = hasV2 ? null : migrateV1();
        const cycle = get().cycle;
        const storedDays = v1?.days?.length ? v1.days : get().days;
        const merged = mergeCalendar(storedDays, cycle.startDate, cycle.endDate);
        const days = overlayLatestSeed(merged, get().seedRev ?? 0);
        const today = todayISO();
        const theme = isThemeId(get().theme) ? get().theme : "gold";
        applyTheme(theme);
        set({
          days,
          seedRev: SEED_REV,
          purchases: get().purchases.length ? get().purchases : (v1?.purchases ?? []),
          selectedDate: firstUnloggedDate(days, today),
          theme,
          hydrated: true,
        });
      },
    }),
    {
      name: "k10-daily-v2",
      skipHydration: true,
      partialize: (state) => ({
        cycle: state.cycle,
        days: state.days,
        archive: state.archive,
        purchases: state.purchases,
        milestoneNotes: state.milestoneNotes,
        pendingComplete: state.pendingComplete,
        section: state.section,
        theme: state.theme,
        soundOn: state.soundOn,
        pinHash: state.pinHash,
        pinSkipped: state.pinSkipped,
        reminderOn: state.reminderOn,
        reminderTime: state.reminderTime,
        lastReminderDate: state.lastReminderDate,
        quotes: state.quotes,
        seedRev: state.seedRev,
      }),
    },
  ),
);

export function useTrackerStats(): TrackerStats {
  const days = useTracker((s) => s.days);
  const cycle = useTracker((s) => s.cycle);
  return computeStats(days, cycle);
}

export function usePortfolioTotals() {
  const purchases = useTracker((s) => s.purchases);
  const quotes = useTracker((s) => s.quotes);
  const invested = purchases.reduce((s, p) => s + p.amount, 0);
  const shares = purchases.reduce((s, p) => s + p.shares, 0);
  const byCounter = new Map<
    string,
    { ticker: string; company: string; amount: number; shares: number }
  >();
  for (const p of purchases) {
    const key = p.ticker || p.company || "Other";
    const cur = byCounter.get(key) ?? { ticker: p.ticker, company: p.company, amount: 0, shares: 0 };
    cur.amount += p.amount;
    cur.shares += p.shares;
    if (!cur.company && p.company) cur.company = p.company;
    byCounter.set(key, cur);
  }
  const holdings = [...byCounter.values()]
    .sort((a, b) => b.amount - a.amount)
    .map((h) => {
      const quote = quotes[h.ticker];
      const market = quote && h.shares > 0 ? quote.price * h.shares : null;
      const gain = market != null ? market - h.amount : null;
      return { ...h, price: quote?.price ?? null, priceAt: quote?.updatedAt ?? null, market, gain };
    });
  const market = holdings.every((h) => h.market != null)
    ? holdings.reduce((s, h) => s + (h.market ?? 0), 0)
    : holdings.some((h) => h.market != null)
      ? holdings.reduce((s, h) => s + (h.market ?? h.amount), 0)
      : null;
  const gain = market != null ? market - invested : null;
  return {
    invested,
    shares,
    count: purchases.length,
    market,
    gain,
    holdings,
  };
}

