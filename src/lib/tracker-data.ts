import { addDaysISO, diffDays, parseISODate, round2, todayISO, toISODate } from "./utils";

export const START_DATE = "2026-07-29";
export const TARGET_DATE = "2028-07-31";
export const DAILY_TARGET = 10;
export const PLAN_DAYS = diffDays(START_DATE, TARGET_DATE) + 1;
export const PLAN_TARGET = PLAN_DAYS * DAILY_TARGET;

export type DayEntry = {
  date: string;
  deposit: number | null;
  bankBalance: number | null;
  notes: string;
};

export type DayView = DayEntry & {
  cumulative: number;
  interest: number | null;
  expected: number;
};

export type Milestone = {
  threshold: number;
  dateInvested: string;
  company: string;
  ticker: string;
  amountInvested: number | null;
  feesConfirmed: boolean;
  notes: string;
};

export type Purchase = {
  id: string;
  date: string;
  ticker: string;
  company: string;
  amount: number;
  shares: number;
  notes: string;
};

export type CycleMeta = {
  id: string;
  number: number;
  startDate: string;
  endDate: string;
  targetAmount: number;
  dailyTarget: number;
};

export type ArchivedCycle = CycleMeta & {
  completedAt: string;
  totalDeposited: number;
  cashBalance: number;
  interest: number;
  daysLogged: number;
  daysWithDeposit: number;
  daysElapsed: number;
  firstDeposit: string | null;
  lastDeposit: string | null;
  averageDeposit: number;
  streak: number;
  longestStreak: number;
};

export type Section = "savings" | "portfolio";

export type SeedLog = {
  date: string;
  deposit: number;
  bankBalance: number;
  notes: string;
};

export const LUSE_COUNTERS = [
  { ticker: "ATEL", name: "Airtel Networks Zambia" },
  { ticker: "CEC", name: "Copperbelt Energy Corporation" },
  { ticker: "ZCCM", name: "ZCCM Investments Holdings" },
  { ticker: "ZSUG", name: "Zambia Sugar" },
  { ticker: "ZNCO", name: "Zanaco" },
  { ticker: "SCBL", name: "Standard Chartered Bank Zambia" },
  { ticker: "ZAMB", name: "Zambeef Products" },
  { ticker: "REIZ", name: "Real Estate Investments Zambia" },
  { ticker: "MAFS", name: "Madison Financial Services" },
  { ticker: "LAFA", name: "Lafarge Zambia" },
  { ticker: "SHOP", name: "Shoprite Holdings" },
  { ticker: "PUMA", name: "Puma Energy Zambia" },
  { ticker: "NATB", name: "National Breweries" },
] as const;

export const SEED_LOGS: SeedLog[] = [
  { date: "2026-07-29", deposit: 10, bankBalance: 10, notes: "Deposited Successfully" },
  { date: "2026-07-30", deposit: 10, bankBalance: 20, notes: "Deposited Successfully" },
  { date: "2026-07-31", deposit: 10, bankBalance: 30, notes: "Deposited Successfully" },
  { date: "2026-08-01", deposit: 10, bankBalance: 40.01, notes: "Deposited Successfully" },
  { date: "2026-08-02", deposit: 10, bankBalance: 50.01, notes: "Deposited Successfully" },
  { date: "2026-08-03", deposit: 10, bankBalance: 60.01, notes: "Deposited Successfully" },
  { date: "2026-08-04", deposit: 10, bankBalance: 70.02, notes: "Deposited Successfully" },
  { date: "2026-08-05", deposit: 10, bankBalance: 80.03, notes: "Deposited Successfully" },
  { date: "2026-08-06", deposit: 20, bankBalance: 100.04, notes: "Deposited Successfully" },
  { date: "2026-08-07", deposit: 10, bankBalance: 110.05, notes: "Deposited Successfully" },
  { date: "2026-08-08", deposit: 10, bankBalance: 120.05, notes: "Deposited Successfully" },
  { date: "2026-08-09", deposit: 10, bankBalance: 130.06, notes: "Deposited Successfully" },
  { date: "2026-08-10", deposit: 10, bankBalance: 140.07, notes: "Deposited Successfully" },
  { date: "2026-08-11", deposit: 20, bankBalance: 160.09, notes: "Deposited Successfully" },
  { date: "2026-08-12", deposit: 15, bankBalance: 175.09, notes: "Deposited Successfully" },
  { date: "2026-08-13", deposit: 10, bankBalance: 185.11, notes: "Deposited Successfully" },
  { date: "2026-08-14", deposit: 15, bankBalance: 200.12, notes: "Deposited Successfully" },
  { date: "2026-08-15", deposit: 10, bankBalance: 210.15, notes: "Deposited Successfully" },
  { date: "2026-08-16", deposit: 10, bankBalance: 220.15, notes: "Deposited Successfully" },
  { date: "2026-08-17", deposit: 7, bankBalance: 227.19, notes: "Deposited Successfully" },
  { date: "2026-08-18", deposit: 10, bankBalance: 237.23, notes: "Deposited Successfully" },
  { date: "2026-08-19", deposit: 13, bankBalance: 250.28, notes: "Deposited Successfully" },
  { date: "2026-08-20", deposit: 10, bankBalance: 260.28, notes: "Deposited Successfully" },
  { date: "2026-08-21", deposit: 10, bankBalance: 270.34, notes: "Deposited Successfully" },
  { date: "2026-08-22", deposit: 10, bankBalance: 280.39, notes: "Deposited Successfully" },
  { date: "2026-08-23", deposit: 20, bankBalance: 300.5, notes: "Deposited Successfully" },
  { date: "2026-08-24", deposit: 10, bankBalance: 310.5, notes: "Deposited Successfully" },
  { date: "2026-08-25", deposit: 20, bankBalance: 330.62, notes: "Deposited Successfully" },
  { date: "2026-08-26", deposit: 15, bankBalance: 345.69, notes: "Deposited Successfully" },
  { date: "2026-08-27", deposit: 10, bankBalance: 355.69, notes: "Deposited Successfully" },
  { date: "2026-08-28", deposit: 25, bankBalance: 380.82, notes: "Deposited Successfully" },
  { date: "2026-08-29", deposit: 20, bankBalance: 400.9, notes: "Deposited Successfully" },
  { date: "2026-08-30", deposit: 10, bankBalance: 410.9, notes: "Deposited Successfully" },
  { date: "2026-08-31", deposit: 10, bankBalance: 420.98, notes: "Deposited Successfully" },
  { date: "2026-09-01", deposit: 10, bankBalance: 431.05, notes: "Deposited Successfully" },
  { date: "2026-09-02", deposit: 10, bankBalance: 441.29, notes: "Deposited Successfully" },
  { date: "2026-09-03", deposit: 10, bankBalance: 451.42, notes: "Deposited Successfully" },
  { date: "2026-09-04", deposit: 10, bankBalance: 461.54, notes: "Deposited Successfully" },
  { date: "2026-09-05", deposit: 10, bankBalance: 471.67, notes: "Deposited Successfully" },
  { date: "2026-09-06", deposit: 20, bankBalance: 491.8, notes: "Deposited Successfully" },
  { date: "2026-09-07", deposit: 10, bankBalance: 501.8, notes: "Deposited Successfully" },
  { date: "2026-09-08", deposit: 0, bankBalance: 502.07, notes: "No Deposit Made" },
  { date: "2026-09-09", deposit: 11, bankBalance: 513.2, notes: "Deposited Successfully" },
  { date: "2026-09-10", deposit: 19, bankBalance: 532.34, notes: "Deposited Successfully" },
  { date: "2026-09-11", deposit: 20, bankBalance: 552.48, notes: "Deposited Successfully" },
  { date: "2026-09-12", deposit: 10, bankBalance: 562.62, notes: "Deposited Successfully" },
  { date: "2026-09-13", deposit: 10, bankBalance: 572.62, notes: "Deposited Successfully" },
  { date: "2026-09-14", deposit: 10, bankBalance: 582.76, notes: "Deposited Successfully" },
  { date: "2026-09-15", deposit: 10, bankBalance: 592.91, notes: "Deposited Successfully" },
  { date: "2026-09-16", deposit: 10, bankBalance: 603.05, notes: "Deposited Successfully" },
  { date: "2026-09-17", deposit: 10, bankBalance: 613.05, notes: "Deposited Successfully" },
  { date: "2026-09-18", deposit: 0, bankBalance: 613.51, notes: "No Deposit Made" },
  { date: "2026-09-19", deposit: 0, bankBalance: 613.66, notes: "No Deposit Made" },
  { date: "2026-09-20", deposit: 30, bankBalance: 643.8, notes: "Deposited Successfully" },
  { date: "2026-09-21", deposit: 0, bankBalance: 643.97, notes: "No Deposit Made" },
  { date: "2026-09-22", deposit: 10, bankBalance: 654.15, notes: "Deposited Successfully" },
  { date: "2026-09-23", deposit: 10, bankBalance: 664.32, notes: "Deposited Successfully" },
  { date: "2026-09-24", deposit: 0, bankBalance: 664.32, notes: "No Deposit Made" },
  { date: "2026-09-25", deposit: 20, bankBalance: 684.71, notes: "Deposited Successfully" },
  { date: "2026-09-26", deposit: 30, bankBalance: 714.91, notes: "Deposited Successfully" },
  { date: "2026-09-27", deposit: 25, bankBalance: 740.11, notes: "Deposited Successfully" },
  { date: "2026-09-28", deposit: 20, bankBalance: 760.25, notes: "Deposited Successfully" },
  { date: "2026-09-29", deposit: 20, bankBalance: 780.36, notes: "Deposited Successfully" },
  { date: "2026-09-30", deposit: 25, bankBalance: 805.39, notes: "Deposited Successfully" },
];

export const SEED_REV = 20260930;
export const MILESTONE_THRESHOLDS = [500, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000] as const;

export type MilestoneNoteMap = Record<number, string>;
export type QuoteMap = Record<string, { price: number; updatedAt: string }>;

export function buildCalendar(
  start = START_DATE,
  end = TARGET_DATE,
  logs: SeedLog[] = SEED_LOGS,
): DayEntry[] {
  const map = new Map(logs.map((l) => [l.date, l]));
  const days: DayEntry[] = [];
  let iso = start;
  while (iso <= end) {
    const log = map.get(iso);
    days.push({
      date: iso,
      deposit: log ? log.deposit : null,
      bankBalance: log ? log.bankBalance : null,
      notes: log?.notes ?? "",
    });
    iso = addDaysISO(iso, 1);
  }
  return days;
}

export function mergeCalendar(stored: DayEntry[], start: string, end: string): DayEntry[] {
  const storedMap = new Map(stored.map((d) => [d.date, d]));
  const seedMap = new Map(SEED_LOGS.map((l) => [l.date, l]));
  const fresh = buildCalendar(start, end, []);
  return fresh.map((d) => {
    const have = storedMap.get(d.date);
    if (have && have.deposit != null) return have;
    const seed = seedMap.get(d.date);
    if (seed) {
      return {
        date: d.date,
        deposit: seed.deposit,
        bankBalance: seed.bankBalance,
        notes: seed.notes,
      };
    }
    return have ?? d;
  });
}

export function overlayLatestSeed(days: DayEntry[], rev: number): DayEntry[] {
  if (rev >= SEED_REV) return days;
  const seedMap = new Map(SEED_LOGS.map((l) => [l.date, l]));
  return days.map((d) => {
    const seed = seedMap.get(d.date);
    if (!seed) return d;
    return {
      date: d.date,
      deposit: seed.deposit,
      bankBalance: seed.bankBalance,
      notes: seed.notes,
    };
  });
}

export function withViews(days: DayEntry[], dailyTarget = DAILY_TARGET): DayView[] {
  let cumulative = 0;
  let index = 0;
  return days.map((d) => {
    if (d.deposit != null) cumulative = round2(cumulative + d.deposit);
    const interest = d.bankBalance != null ? round2(d.bankBalance - cumulative) : null;
    index += 1;
    return {
      ...d,
      cumulative,
      interest,
      expected: index * dailyTarget,
    };
  });
}

export type TrackerStats = {
  today: string;
  totalDeposited: number;
  cashBalance: number;
  interest: number;
  daysElapsed: number;
  daysLogged: number;
  daysWithDeposit: number;
  daysRemaining: number;
  averageDeposit: number;
  expectedByNow: number;
  paceDelta: number;
  planTarget: number;
  progress: number;
  streak: number;
  longestStreak: number;
  missedDays: number;
  lastLoggedDate: string | null;
  firstLoggedDate: string | null;
  projectedTotal: number;
};

export function computeStats(days: DayEntry[], cycle: CycleMeta): TrackerStats {
  const today = todayISO();
  const views = withViews(days, cycle.dailyTarget);
  const elapsed = views.filter((d) => d.date <= today);
  const logged = elapsed.filter((d) => d.deposit != null);
  const withDeposit = logged.filter((d) => (d.deposit ?? 0) > 0);
  const totalDeposited = round2(logged.reduce((s, d) => s + (d.deposit ?? 0), 0));
  const lastBank = [...elapsed].reverse().find((d) => d.bankBalance != null);
  const cashBalance = lastBank?.bankBalance ?? totalDeposited;
  const interest = lastBank?.interest ?? 0;
  const daysElapsed = elapsed.length;
  const expectedByNow = daysElapsed * cycle.dailyTarget;
  const averageDeposit = logged.length ? round2(totalDeposited / logged.length) : 0;
  const remaining = views.filter((d) => d.date > today).length;
  const projectedTotal = round2(totalDeposited + remaining * (averageDeposit || cycle.dailyTarget));
  const { streak, longestStreak } = computeStreaks(elapsed);
  const missedDays = elapsed.filter((d) => d.deposit === 0 || d.deposit === null).length;
  const lastLoggedDate = [...logged].reverse()[0]?.date ?? null;
  const firstLoggedDate = logged[0]?.date ?? null;
  const planTarget = cycle.targetAmount;

  return {
    today,
    totalDeposited,
    cashBalance,
    interest,
    daysElapsed,
    daysLogged: logged.length,
    daysWithDeposit: withDeposit.length,
    daysRemaining: remaining,
    averageDeposit,
    expectedByNow,
    paceDelta: round2(totalDeposited - expectedByNow),
    planTarget,
    progress: planTarget ? totalDeposited / planTarget : 0,
    streak,
    longestStreak,
    missedDays,
    lastLoggedDate,
    firstLoggedDate,
    projectedTotal,
  };
}

function computeStreaks(elapsed: DayEntry[]): { streak: number; longestStreak: number } {
  let streak = 0;
  let longest = 0;
  let run = 0;
  for (const d of elapsed) {
    if ((d.deposit ?? 0) > 0) {
      run += 1;
      longest = Math.max(longest, run);
    } else {
      run = 0;
    }
  }
  streak = run;
  return { streak, longestStreak: longest };
}

export function firstUnloggedDate(days: DayEntry[], today: string): string {
  const gap = days.find((d) => d.date <= today && d.deposit === null);
  return gap?.date ?? today;
}

export function chartSeries(days: DayEntry[], today: string, dailyTarget = DAILY_TARGET) {
  const views = withViews(days, dailyTarget).filter((d) => d.date <= today && d.deposit != null);
  return views.map((d) => {
    const date = parseISODate(d.date);
    const label = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short" }).format(date);
    return {
      date: d.date,
      deposited: d.cumulative,
      bank: d.bankBalance,
      expected: d.expected,
      label,
    };
  });
}

export function dateReached(days: DayEntry[], threshold: number, dailyTarget = DAILY_TARGET): string | null {
  const views = withViews(days, dailyTarget);
  const hit = views.find((d) => d.deposit != null && d.cumulative >= threshold);
  return hit?.date ?? null;
}

export function nextMilestone(total: number): number | null {
  return MILESTONE_THRESHOLDS.find((t) => total < t) ?? null;
}

export function daysToAmount(remaining: number, average: number): number | null {
  if (remaining <= 0) return 0;
  if (!(average > 0)) return null;
  return Math.ceil(remaining / average);
}

export function monthsLoggedCount(days: DayEntry[]): number {
  return new Set(days.filter((d) => d.deposit != null).map((d) => d.date.slice(0, 7))).size;
}

export type YearSnap = {
  year: number;
  total: number;
  daysLogged: number;
  daysWithDeposit: number;
  longestStreak: number;
  milestones: number[];
};

export function yearSnapshots(days: DayEntry[], dailyTarget = DAILY_TARGET): YearSnap[] {
  const views = withViews(days, dailyTarget).filter((d) => d.deposit != null);
  const byYear = new Map<number, typeof views>();
  for (const d of views) {
    const year = Number(d.date.slice(0, 4));
    const list = byYear.get(year) ?? [];
    list.push(d);
    byYear.set(year, list);
  }
  return [...byYear.entries()]
    .sort((a, b) => b[0] - a[0])
    .map(([year, list]) => {
      const total = round2(list.reduce((s, d) => s + (d.deposit ?? 0), 0));
      let longest = 0;
      let run = 0;
      for (const d of list) {
        if ((d.deposit ?? 0) > 0) {
          run += 1;
          longest = Math.max(longest, run);
        } else run = 0;
      }
      const startCum = list[0] ? list[0].cumulative - (list[0].deposit ?? 0) : 0;
      const endCum = list[list.length - 1]?.cumulative ?? 0;
      const milestones = MILESTONE_THRESHOLDS.filter((t) => startCum < t && endCum >= t);
      return {
        year,
        total,
        daysLogged: list.length,
        daysWithDeposit: list.filter((d) => (d.deposit ?? 0) > 0).length,
        longestStreak: longest,
        milestones: [...milestones],
      };
    });
}

export function monthKey(iso: string): string {
  return iso.slice(0, 7);
}

export function weekdayIndex(iso: string): number {
  return parseISODate(iso).getDay();
}

export function makeInitialCycle(): CycleMeta & { days: DayEntry[] } {
  return {
    id: "cycle-1",
    number: 1,
    startDate: START_DATE,
    endDate: TARGET_DATE,
    targetAmount: PLAN_TARGET,
    dailyTarget: DAILY_TARGET,
    days: buildCalendar(),
  };
}

export function snapshotArchive(
  cycle: CycleMeta,
  days: DayEntry[],
  completedAt: string,
): ArchivedCycle {
  const stats = computeStats(days, cycle);
  return {
    ...cycle,
    completedAt,
    totalDeposited: stats.totalDeposited,
    cashBalance: stats.cashBalance,
    interest: stats.interest,
    daysLogged: stats.daysLogged,
    daysWithDeposit: stats.daysWithDeposit,
    daysElapsed: stats.daysElapsed,
    firstDeposit: stats.firstLoggedDate,
    lastDeposit: stats.lastLoggedDate,
    averageDeposit: stats.averageDeposit,
    streak: stats.streak,
    longestStreak: stats.longestStreak,
  };
}

export function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

export function addYearsISO(iso: string, years: number): string {
  const d = parseISODate(iso);
  d.setFullYear(d.getFullYear() + years);
  return toISODate(d);
}
