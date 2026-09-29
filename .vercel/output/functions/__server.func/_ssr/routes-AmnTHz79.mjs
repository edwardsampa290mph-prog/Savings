import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { _ as ChevronRight, a as Upload, b as Bell, c as Smartphone, d as Pencil, f as Minus, g as Delete, h as Download, i as Volume2, l as Settings2, m as KeyRound, n as Wallet, p as Landmark, r as VolumeX, s as Trash2, t as X, u as Plus, v as ChevronLeft, x as BellOff, y as Check } from "../_libs/lucide-react.mjs";
import { n as toast, t as Toaster } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, p as Slot, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { a as Trigger, i as Root3, n as Portal, r as Provider, t as Content2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { a as Line, c as ResponsiveContainer, i as Area, l as Tooltip, n as YAxis, o as CartesianGrid, r as XAxis, s as ReferenceLine, t as ComposedChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-AmnTHz79.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function todayISO() {
	return new Intl.DateTimeFormat("en-CA", {
		timeZone: "Africa/Lusaka",
		year: "numeric",
		month: "2-digit",
		day: "2-digit"
	}).format(/* @__PURE__ */ new Date());
}
function formatK(value, decimals = 2) {
	const formatted = Math.abs(value).toLocaleString("en-ZM", {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals
	});
	return `${value < 0 ? "−" : ""}K${formatted}`;
}
function formatDay(iso, style = "full") {
	const d = parseISODate(iso);
	if (style === "short") return new Intl.DateTimeFormat("en-GB", {
		weekday: "short",
		day: "numeric",
		month: "short"
	}).format(d);
	if (style === "month") return new Intl.DateTimeFormat("en-GB", {
		month: "long",
		year: "numeric"
	}).format(d);
	return new Intl.DateTimeFormat("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	}).format(d);
}
function parseISODate(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(y, (m ?? 1) - 1, d ?? 1);
}
function toISODate(date) {
	return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function addDaysISO(iso, days) {
	const d = parseISODate(iso);
	d.setDate(d.getDate() + days);
	return toISODate(d);
}
function diffDays(fromISO, toISO) {
	const a = parseISODate(fromISO);
	const b = parseISODate(toISO);
	return Math.round((b.getTime() - a.getTime()) / 864e5);
}
function round2(n) {
	return Math.round(n * 100) / 100;
}
function lusakaNow() {
	const now = /* @__PURE__ */ new Date();
	return {
		time: new Intl.DateTimeFormat("en-GB", {
			timeZone: "Africa/Lusaka",
			hour: "2-digit",
			minute: "2-digit",
			hour12: false
		}).format(now),
		weekday: new Intl.DateTimeFormat("en-GB", {
			timeZone: "Africa/Lusaka",
			weekday: "short"
		}).format(now),
		date: new Intl.DateTimeFormat("en-GB", {
			timeZone: "Africa/Lusaka",
			day: "numeric",
			month: "short"
		}).format(now)
	};
}
var START_DATE = "2026-07-29";
var TARGET_DATE = "2028-07-31";
var PLAN_TARGET = (diffDays(START_DATE, TARGET_DATE) + 1) * 10;
var LUSE_COUNTERS = [
	{
		ticker: "ATEL",
		name: "Airtel Networks Zambia"
	},
	{
		ticker: "CEC",
		name: "Copperbelt Energy Corporation"
	},
	{
		ticker: "ZCCM",
		name: "ZCCM Investments Holdings"
	},
	{
		ticker: "ZSUG",
		name: "Zambia Sugar"
	},
	{
		ticker: "ZNCO",
		name: "Zanaco"
	},
	{
		ticker: "SCBL",
		name: "Standard Chartered Bank Zambia"
	},
	{
		ticker: "ZAMB",
		name: "Zambeef Products"
	},
	{
		ticker: "REIZ",
		name: "Real Estate Investments Zambia"
	},
	{
		ticker: "MAFS",
		name: "Madison Financial Services"
	},
	{
		ticker: "LAFA",
		name: "Lafarge Zambia"
	},
	{
		ticker: "SHOP",
		name: "Shoprite Holdings"
	},
	{
		ticker: "PUMA",
		name: "Puma Energy Zambia"
	},
	{
		ticker: "NATB",
		name: "National Breweries"
	}
];
var SEED_LOGS = [
	{
		date: "2026-07-29",
		deposit: 10,
		bankBalance: 10,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-07-30",
		deposit: 10,
		bankBalance: 20,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-07-31",
		deposit: 10,
		bankBalance: 30,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-01",
		deposit: 10,
		bankBalance: 40.01,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-02",
		deposit: 10,
		bankBalance: 50.01,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-03",
		deposit: 10,
		bankBalance: 60.01,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-04",
		deposit: 10,
		bankBalance: 70.02,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-05",
		deposit: 10,
		bankBalance: 80.03,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-06",
		deposit: 20,
		bankBalance: 100.04,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-07",
		deposit: 10,
		bankBalance: 110.05,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-08",
		deposit: 10,
		bankBalance: 120.05,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-09",
		deposit: 10,
		bankBalance: 130.06,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-10",
		deposit: 10,
		bankBalance: 140.07,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-11",
		deposit: 20,
		bankBalance: 160.09,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-12",
		deposit: 15,
		bankBalance: 175.09,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-13",
		deposit: 10,
		bankBalance: 185.11,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-14",
		deposit: 15,
		bankBalance: 200.12,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-15",
		deposit: 10,
		bankBalance: 210.15,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-16",
		deposit: 10,
		bankBalance: 220.15,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-17",
		deposit: 7,
		bankBalance: 227.19,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-18",
		deposit: 10,
		bankBalance: 237.23,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-19",
		deposit: 13,
		bankBalance: 250.28,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-20",
		deposit: 10,
		bankBalance: 260.28,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-21",
		deposit: 10,
		bankBalance: 270.34,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-22",
		deposit: 10,
		bankBalance: 280.39,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-23",
		deposit: 20,
		bankBalance: 300.5,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-24",
		deposit: 10,
		bankBalance: 310.5,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-25",
		deposit: 20,
		bankBalance: 330.62,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-26",
		deposit: 15,
		bankBalance: 345.69,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-27",
		deposit: 10,
		bankBalance: 355.69,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-28",
		deposit: 25,
		bankBalance: 380.82,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-29",
		deposit: 20,
		bankBalance: 400.9,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-30",
		deposit: 10,
		bankBalance: 410.9,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-08-31",
		deposit: 10,
		bankBalance: 420.98,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-01",
		deposit: 10,
		bankBalance: 431.05,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-02",
		deposit: 10,
		bankBalance: 441.29,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-03",
		deposit: 10,
		bankBalance: 451.42,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-04",
		deposit: 10,
		bankBalance: 461.54,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-05",
		deposit: 10,
		bankBalance: 471.67,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-06",
		deposit: 20,
		bankBalance: 491.8,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-07",
		deposit: 10,
		bankBalance: 501.8,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-08",
		deposit: 0,
		bankBalance: 502.07,
		notes: "No Deposit Made"
	},
	{
		date: "2026-09-09",
		deposit: 11,
		bankBalance: 513.2,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-10",
		deposit: 19,
		bankBalance: 532.34,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-11",
		deposit: 20,
		bankBalance: 552.48,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-12",
		deposit: 10,
		bankBalance: 562.62,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-13",
		deposit: 10,
		bankBalance: 572.62,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-14",
		deposit: 10,
		bankBalance: 582.76,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-15",
		deposit: 10,
		bankBalance: 592.91,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-16",
		deposit: 10,
		bankBalance: 603.05,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-17",
		deposit: 10,
		bankBalance: 613.05,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-18",
		deposit: 0,
		bankBalance: 613.51,
		notes: "No Deposit Made"
	},
	{
		date: "2026-09-19",
		deposit: 0,
		bankBalance: 613.66,
		notes: "No Deposit Made"
	},
	{
		date: "2026-09-20",
		deposit: 30,
		bankBalance: 643.8,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-21",
		deposit: 0,
		bankBalance: 643.97,
		notes: "No Deposit Made"
	},
	{
		date: "2026-09-22",
		deposit: 10,
		bankBalance: 654.15,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-23",
		deposit: 10,
		bankBalance: 664.32,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-24",
		deposit: 0,
		bankBalance: 664.32,
		notes: "No Deposit Made"
	},
	{
		date: "2026-09-25",
		deposit: 20,
		bankBalance: 684.71,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-26",
		deposit: 30,
		bankBalance: 714.91,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-27",
		deposit: 25,
		bankBalance: 740.11,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-28",
		deposit: 20,
		bankBalance: 760.25,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-29",
		deposit: 20,
		bankBalance: 780.36,
		notes: "Deposited Successfully"
	},
	{
		date: "2026-09-30",
		deposit: 25,
		bankBalance: 805.39,
		notes: "Deposited Successfully"
	}
];
var SEED_REV = 20260930;
var MILESTONE_THRESHOLDS = [
	500,
	1e3,
	2e3,
	3e3,
	4e3,
	5e3,
	6e3,
	7e3,
	8e3
];
function buildCalendar(start = START_DATE, end = TARGET_DATE, logs = SEED_LOGS) {
	const map = new Map(logs.map((l) => [l.date, l]));
	const days = [];
	let iso = start;
	while (iso <= end) {
		const log = map.get(iso);
		days.push({
			date: iso,
			deposit: log ? log.deposit : null,
			bankBalance: log ? log.bankBalance : null,
			notes: log?.notes ?? ""
		});
		iso = addDaysISO(iso, 1);
	}
	return days;
}
function mergeCalendar(stored, start, end) {
	const storedMap = new Map(stored.map((d) => [d.date, d]));
	const seedMap = new Map(SEED_LOGS.map((l) => [l.date, l]));
	return buildCalendar(start, end, []).map((d) => {
		const have = storedMap.get(d.date);
		if (have && have.deposit != null) return have;
		const seed = seedMap.get(d.date);
		if (seed) return {
			date: d.date,
			deposit: seed.deposit,
			bankBalance: seed.bankBalance,
			notes: seed.notes
		};
		return have ?? d;
	});
}
function overlayLatestSeed(days, rev) {
	if (rev >= 20260930) return days;
	const seedMap = new Map(SEED_LOGS.map((l) => [l.date, l]));
	return days.map((d) => {
		const seed = seedMap.get(d.date);
		if (!seed) return d;
		return {
			date: d.date,
			deposit: seed.deposit,
			bankBalance: seed.bankBalance,
			notes: seed.notes
		};
	});
}
function withViews(days, dailyTarget = 10) {
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
			expected: index * dailyTarget
		};
	});
}
function computeStats(days, cycle) {
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
		projectedTotal
	};
}
function computeStreaks(elapsed) {
	let streak = 0;
	let longest = 0;
	let run = 0;
	for (const d of elapsed) if ((d.deposit ?? 0) > 0) {
		run += 1;
		longest = Math.max(longest, run);
	} else run = 0;
	streak = run;
	return {
		streak,
		longestStreak: longest
	};
}
function firstUnloggedDate(days, today) {
	return days.find((d) => d.date <= today && d.deposit === null)?.date ?? today;
}
function chartSeries(days, today, dailyTarget = 10) {
	return withViews(days, dailyTarget).filter((d) => d.date <= today && d.deposit != null).map((d) => {
		const date = parseISODate(d.date);
		const label = new Intl.DateTimeFormat("en-GB", {
			day: "numeric",
			month: "short"
		}).format(date);
		return {
			date: d.date,
			deposited: d.cumulative,
			bank: d.bankBalance,
			expected: d.expected,
			label
		};
	});
}
function dateReached(days, threshold, dailyTarget = 10) {
	return withViews(days, dailyTarget).find((d) => d.deposit != null && d.cumulative >= threshold)?.date ?? null;
}
function nextMilestone(total) {
	return MILESTONE_THRESHOLDS.find((t) => total < t) ?? null;
}
function daysToAmount(remaining, average) {
	if (remaining <= 0) return 0;
	if (!(average > 0)) return null;
	return Math.ceil(remaining / average);
}
function monthsLoggedCount(days) {
	return new Set(days.filter((d) => d.deposit != null).map((d) => d.date.slice(0, 7))).size;
}
function yearSnapshots(days, dailyTarget = 10) {
	const views = withViews(days, dailyTarget).filter((d) => d.deposit != null);
	const byYear = /* @__PURE__ */ new Map();
	for (const d of views) {
		const year = Number(d.date.slice(0, 4));
		const list = byYear.get(year) ?? [];
		list.push(d);
		byYear.set(year, list);
	}
	return [...byYear.entries()].sort((a, b) => b[0] - a[0]).map(([year, list]) => {
		const total = round2(list.reduce((s, d) => s + (d.deposit ?? 0), 0));
		let longest = 0;
		let run = 0;
		for (const d of list) if ((d.deposit ?? 0) > 0) {
			run += 1;
			longest = Math.max(longest, run);
		} else run = 0;
		const startCum = list[0] ? list[0].cumulative - (list[0].deposit ?? 0) : 0;
		const endCum = list[list.length - 1]?.cumulative ?? 0;
		const milestones = MILESTONE_THRESHOLDS.filter((t) => startCum < t && endCum >= t);
		return {
			year,
			total,
			daysLogged: list.length,
			daysWithDeposit: list.filter((d) => (d.deposit ?? 0) > 0).length,
			longestStreak: longest,
			milestones: [...milestones]
		};
	});
}
function monthKey(iso) {
	return iso.slice(0, 7);
}
function weekdayIndex(iso) {
	return parseISODate(iso).getDay();
}
function makeInitialCycle() {
	return {
		id: "cycle-1",
		number: 1,
		startDate: START_DATE,
		endDate: TARGET_DATE,
		targetAmount: PLAN_TARGET,
		dailyTarget: 10,
		days: buildCalendar()
	};
}
function snapshotArchive(cycle, days, completedAt) {
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
		longestStreak: stats.longestStreak
	};
}
function newId() {
	if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
	return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function addYearsISO(iso, years) {
	const d = parseISODate(iso);
	d.setFullYear(d.getFullYear() + years);
	return toISODate(d);
}
var THEMES = [
	{
		id: "gold",
		label: "Gold",
		mode: "dark",
		swatch: ["#0c0d0c", "#7ea894"]
	},
	{
		id: "purple",
		label: "Purple",
		mode: "dark",
		swatch: ["#110e16", "#b48cff"]
	},
	{
		id: "turquoise",
		label: "Turquoise",
		mode: "light",
		swatch: ["#f4faf9", "#1d9a8c"]
	},
	{
		id: "red",
		label: "Red",
		mode: "light",
		swatch: ["#fbf6f4", "#c24a3a"]
	}
];
function isThemeId(value) {
	return THEMES.some((t) => t.id === value);
}
function isLightTheme(theme) {
	return theme === "turquoise" || theme === "red";
}
function applyTheme(theme) {
	if (typeof document === "undefined") return;
	const root = document.documentElement;
	root.dataset.theme = theme;
	root.style.colorScheme = isLightTheme(theme) ? "light" : "dark";
	const bg = getComputedStyle(root).getPropertyValue("--color-ink").trim();
	const meta = document.querySelector("meta[name=\"theme-color\"]");
	if (meta && bg) meta.setAttribute("content", bg);
}
function readChartPalette() {
	if (typeof document === "undefined") return {
		sage: "#7ea894",
		paper: "#e8e6e1",
		mist: "#8b8f8a",
		haze: "#5c605c",
		line: "#2a2d2a"
	};
	const s = getComputedStyle(document.documentElement);
	const read = (name, fallback) => s.getPropertyValue(name).trim() || fallback;
	return {
		sage: read("--color-sage", "#7ea894"),
		paper: read("--color-paper", "#e8e6e1"),
		mist: read("--color-mist", "#8b8f8a"),
		haze: read("--color-haze", "#5c605c"),
		line: read("--color-line", "#2a2d2a")
	};
}
var LAST_SEEN_KEY = "k10-last-seen";
var LOCK_MS = 3e5;
async function hashPin(pin) {
	const data = new TextEncoder().encode(`k10-daily-pin:${pin}`);
	const buf = await crypto.subtle.digest("SHA-256", data);
	return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}
function touchLastSeen() {
	if (typeof localStorage === "undefined") return;
	localStorage.setItem(LAST_SEEN_KEY, String(Date.now()));
}
function lastSeenAt() {
	if (typeof localStorage === "undefined") return 0;
	const n = Number(localStorage.getItem(LAST_SEEN_KEY) ?? 0);
	return Number.isFinite(n) ? n : 0;
}
function shouldLock(pinHash) {
	if (!pinHash) return false;
	const seen = lastSeenAt();
	if (!seen) return true;
	return Date.now() - seen > LOCK_MS;
}
function lusakaHm() {
	return new Intl.DateTimeFormat("en-GB", {
		timeZone: "Africa/Lusaka",
		hour: "2-digit",
		minute: "2-digit",
		hour12: false
	}).format(/* @__PURE__ */ new Date());
}
function checkGoal(days, cycle) {
	const stats = computeStats(days, cycle);
	if (stats.totalDeposited + 1e-9 < cycle.targetAmount) return null;
	return snapshotArchive(cycle, days, stats.today);
}
function migrateV1() {
	if (typeof localStorage === "undefined") return null;
	try {
		const raw = localStorage.getItem("k10-daily-v1");
		if (!raw) return null;
		const parsed = JSON.parse(raw);
		return {
			days: parsed.state?.days,
			purchases: (parsed.state?.milestones ?? []).filter((m) => m.amountInvested != null && m.amountInvested > 0).map((m) => ({
				id: newId(),
				date: m.dateInvested || todayISO(),
				ticker: m.ticker,
				company: m.company,
				amount: m.amountInvested ?? 0,
				shares: 0,
				notes: m.notes
			}))
		};
	} catch {
		return null;
	}
}
var initial = makeInitialCycle();
function initialTheme() {
	if (typeof document === "undefined") return "gold";
	const t = document.documentElement.dataset.theme;
	return isThemeId(t) ? t : "gold";
}
var useTracker = create()(persist((set, get) => ({
	cycle: {
		id: initial.id,
		number: initial.number,
		startDate: initial.startDate,
		endDate: initial.endDate,
		targetAmount: initial.targetAmount,
		dailyTarget: initial.dailyTarget
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
			days: state.days.map((d) => d.date === payload.date ? {
				...d,
				deposit: payload.deposit,
				bankBalance: payload.bankBalance,
				notes: payload.notes
			} : d),
			selectedDate: payload.date,
			burstId: payload.deposit > 0 ? state.burstId + 1 : state.burstId,
			logTick: state.logTick + 1,
			lastLoggedDate: payload.date
		}));
		const nextTotal = computeStats(get().days, cycle).totalDeposited;
		const prevK = Math.floor(prevTotal / 1e3);
		const nextK = Math.floor(nextTotal / 1e3);
		if (nextK > prevK) set((state) => ({ thousandBurst: {
			id: (state.thousandBurst?.id ?? 0) + 1,
			mark: nextK * 1e3
		} }));
		const crossed = MILESTONE_THRESHOLDS.filter((t) => prevTotal < t && nextTotal >= t);
		const snap = checkGoal(get().days, get().cycle);
		if (snap && !get().pendingComplete) set({ pendingComplete: snap });
		return {
			completed: !!snap,
			crossed
		};
	},
	updateCyclePlan: (plan) => {
		const cycle = get().cycle;
		const start = cycle.startDate;
		const end = plan.endDate < start ? start : plan.endDate;
		const days = mergeCalendar(get().days, start, end);
		const next = {
			...cycle,
			endDate: end,
			targetAmount: plan.targetAmount,
			dailyTarget: plan.dailyTarget
		};
		set({
			cycle: next,
			days
		});
		const snap = checkGoal(days, next);
		if (snap) set({ pendingComplete: snap });
		return { completed: !!snap };
	},
	startNextCycle: (plan) => {
		const today = todayISO();
		const current = get();
		const archived = current.pendingComplete ?? snapshotArchive(current.cycle, current.days, today);
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
				dailyTarget: plan.dailyTarget
			},
			days,
			selectedDate: today,
			burstId: 0
		});
	},
	addPurchase: (p) => set((state) => ({ purchases: [{
		...p,
		id: newId()
	}, ...state.purchases] })),
	updatePurchase: (id, p) => set((state) => ({ purchases: state.purchases.map((row) => row.id === id ? {
		...row,
		...p,
		id
	} : row) })),
	removePurchase: (id) => set((state) => ({ purchases: state.purchases.filter((row) => row.id !== id) })),
	setMilestoneNote: (threshold, notes) => set((state) => ({ milestoneNotes: {
		...state.milestoneNotes,
		[threshold]: notes
	} })),
	setSoundOn: (on) => set({ soundOn: on }),
	setPin: async (pin) => {
		set({
			pinHash: await hashPin(pin),
			pinSkipped: true
		});
	},
	skipPin: () => set({ pinSkipped: true }),
	clearPin: () => set({ pinHash: null }),
	checkPin: async (pin) => {
		const hash = get().pinHash;
		if (!hash) return true;
		return await hashPin(pin) === hash;
	},
	setReminder: (on, time) => set((state) => ({
		reminderOn: on,
		reminderTime: time ?? state.reminderTime
	})),
	markReminded: (date) => set({ lastReminderDate: date }),
	setQuote: (ticker, price) => set((state) => ({ quotes: {
		...state.quotes,
		[ticker]: {
			price,
			updatedAt: todayISO()
		}
	} })),
	exportBackup: () => {
		const s = get();
		return JSON.stringify({
			app: "k10-daily",
			version: 1,
			exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
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
			quotes: s.quotes
		}, null, 2);
	},
	importBackup: (raw) => {
		const data = JSON.parse(raw);
		if (!data.days || !Array.isArray(data.days)) throw new Error("This file is not a K10 Daily backup.");
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
			selectedDate: firstUnloggedDate(days, todayISO())
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
				dailyTarget: seed.dailyTarget
			},
			days: seed.days,
			archive: [],
			purchases: [],
			milestoneNotes: {},
			pendingComplete: null,
			selectedDate: todayISO(),
			burstId: 0,
			seedRev: SEED_REV
		});
	},
	hydrate: () => {
		if (get().hydrated) return;
		const v1 = typeof localStorage !== "undefined" && Boolean(localStorage.getItem("k10-daily-v2")) ? null : migrateV1();
		const cycle = get().cycle;
		const days = overlayLatestSeed(mergeCalendar(v1?.days?.length ? v1.days : get().days, cycle.startDate, cycle.endDate), get().seedRev ?? 0);
		const today = todayISO();
		const theme = isThemeId(get().theme) ? get().theme : "gold";
		applyTheme(theme);
		set({
			days,
			seedRev: SEED_REV,
			purchases: get().purchases.length ? get().purchases : v1?.purchases ?? [],
			selectedDate: firstUnloggedDate(days, today),
			theme,
			hydrated: true
		});
	}
}), {
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
		seedRev: state.seedRev
	})
}));
function useTrackerStats() {
	return computeStats(useTracker((s) => s.days), useTracker((s) => s.cycle));
}
function usePortfolioTotals() {
	const purchases = useTracker((s) => s.purchases);
	const quotes = useTracker((s) => s.quotes);
	const invested = purchases.reduce((s, p) => s + p.amount, 0);
	const shares = purchases.reduce((s, p) => s + p.shares, 0);
	const byCounter = /* @__PURE__ */ new Map();
	for (const p of purchases) {
		const key = p.ticker || p.company || "Other";
		const cur = byCounter.get(key) ?? {
			ticker: p.ticker,
			company: p.company,
			amount: 0,
			shares: 0
		};
		cur.amount += p.amount;
		cur.shares += p.shares;
		if (!cur.company && p.company) cur.company = p.company;
		byCounter.set(key, cur);
	}
	const holdings = [...byCounter.values()].sort((a, b) => b.amount - a.amount).map((h) => {
		const quote = quotes[h.ticker];
		const market = quote && h.shares > 0 ? quote.price * h.shares : null;
		const gain = market != null ? market - h.amount : null;
		return {
			...h,
			price: quote?.price ?? null,
			priceAt: quote?.updatedAt ?? null,
			market,
			gain
		};
	});
	const market = holdings.every((h) => h.market != null) ? holdings.reduce((s, h) => s + (h.market ?? 0), 0) : holdings.some((h) => h.market != null) ? holdings.reduce((s, h) => s + (h.market ?? h.amount), 0) : null;
	const gain = market != null ? market - invested : null;
	return {
		invested,
		shares,
		count: purchases.length,
		market,
		gain,
		holdings
	};
}
var MOOD = {
	gold: {
		root: 392,
		wave: "triangle"
	},
	purple: {
		root: 349.23,
		wave: "sine"
	},
	turquoise: {
		root: 440,
		wave: "triangle"
	},
	red: {
		root: 329.63,
		wave: "sine"
	}
};
var ctx = null;
function audio() {
	if (typeof window === "undefined") return null;
	const Ctor = window.AudioContext || window.webkitAudioContext;
	if (!Ctor) return null;
	if (!ctx) ctx = new Ctor();
	if (ctx.state === "suspended") ctx.resume();
	return ctx;
}
function voice(a, freq, start, duration, volume, type) {
	const osc = a.createOscillator();
	const filter = a.createBiquadFilter();
	const gain = a.createGain();
	osc.type = type;
	osc.frequency.setValueAtTime(freq, start);
	filter.type = "lowpass";
	filter.frequency.setValueAtTime(Math.min(2400, freq * 4.2), start);
	filter.Q.setValueAtTime(.7, start);
	gain.gain.setValueAtTime(1e-4, start);
	gain.gain.exponentialRampToValueAtTime(volume, start + .018);
	gain.gain.exponentialRampToValueAtTime(volume * .55, start + duration * .45);
	gain.gain.exponentialRampToValueAtTime(1e-4, start + duration);
	osc.connect(filter);
	filter.connect(gain);
	gain.connect(a.destination);
	osc.start(start);
	osc.stop(start + duration + .04);
}
function playFeedback(kind, theme) {
	try {
		const a = audio();
		if (!a) return;
		const now = a.currentTime;
		const mood = MOOD[theme] ?? MOOD.gold;
		const r = mood.root;
		if (kind === "cycle") {
			voice(a, r, now, .42, .038, mood.wave);
			voice(a, r * 1.25, now + .06, .48, .032, "sine");
			voice(a, r * 1.5, now + .14, .62, .028, "triangle");
			navigator.vibrate?.([
				12,
				40,
				18,
				50,
				24
			]);
			return;
		}
		if (kind === "milestone") {
			voice(a, r, now, .16, .036, mood.wave);
			voice(a, r * 1.25, now + .09, .18, .032, "sine");
			voice(a, r * 1.5, now + .2, .28, .03, "triangle");
			navigator.vibrate?.([
				10,
				28,
				16
			]);
			return;
		}
		voice(a, r * 1.5, now, .14, .03, mood.wave);
		voice(a, r * 2, now + .07, .18, .022, "sine");
		navigator.vibrate?.(10);
	} catch {}
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-ink/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl bg-panel p-6 shadow-[var(--shadow-border)] duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-4 right-4 rounded-sm text-mist transition-opacity hover:text-paper focus:outline-none focus:ring-2 focus:ring-sage/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5", className),
		...props
	});
}
function DialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
		...props
	});
}
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-xl font-medium tracking-tight text-paper", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-mist", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium tracking-[0.01em] transition-[background-color,color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage/50 disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.97] active:not-disabled:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-sage)_26%,transparent)] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-sage text-sage-fg hover:bg-sage-2",
			secondary: "bg-panel-2 text-paper shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			ghost: "text-mist hover:bg-panel-2 hover:text-paper",
			outline: "bg-transparent text-paper shadow-[var(--shadow-border)] hover:bg-panel-2 hover:shadow-[var(--shadow-border-hover)]",
			danger: "bg-danger text-paper hover:opacity-90"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 px-3 text-[13px]",
			lg: "h-12 px-5",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		className: cn("flex h-11 w-full rounded-md bg-ink-2 px-3 text-sm text-paper shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 placeholder:text-haze focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-sage)_55%,transparent)] disabled:cursor-not-allowed disabled:opacity-40", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-[12.5px] font-medium tracking-[0.04em] text-mist", className),
	...props
}));
Label.displayName = Root.displayName;
function ThemeMenu() {
	const theme = useTracker((s) => s.theme);
	const setTheme = useTracker((s) => s.setTheme);
	const soundOn = useTracker((s) => s.soundOn);
	const setSoundOn = useTracker((s) => s.setSoundOn);
	const pinHash = useTracker((s) => s.pinHash);
	const setPin = useTracker((s) => s.setPin);
	const checkPin = useTracker((s) => s.checkPin);
	const clearPin = useTracker((s) => s.clearPin);
	const reminderOn = useTracker((s) => s.reminderOn);
	const reminderTime = useTracker((s) => s.reminderTime);
	const setReminder = useTracker((s) => s.setReminder);
	const exportBackup = useTracker((s) => s.exportBackup);
	const importBackup = useTracker((s) => s.importBackup);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [pinOpen, setPinOpen] = (0, import_react.useState)(false);
	const [installEvent, setInstallEvent] = (0, import_react.useState)(null);
	const standalone = typeof window !== "undefined" && window.matchMedia("(display-mode: standalone)").matches;
	const root = (0, import_react.useRef)(null);
	const fileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onInstall = (event) => {
			event.preventDefault();
			setInstallEvent(event);
		};
		window.addEventListener("beforeinstallprompt", onInstall);
		return () => window.removeEventListener("beforeinstallprompt", onInstall);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onPointer = (event) => {
			if (!root.current?.contains(event.target)) setOpen(false);
		};
		const onKey = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		window.addEventListener("mousedown", onPointer);
		window.addEventListener("keydown", onKey);
		return () => {
			window.removeEventListener("mousedown", onPointer);
			window.removeEventListener("keydown", onKey);
		};
	}, [open]);
	function download() {
		const blob = new Blob([exportBackup()], { type: "application/json" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = `k10-daily-${todayISO()}.json`;
		a.click();
		URL.revokeObjectURL(url);
		toast.success("Backup downloaded.");
		setOpen(false);
	}
	function onFile(event) {
		const file = event.target.files?.[0];
		event.target.value = "";
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			try {
				importBackup(String(reader.result ?? ""));
				toast.success("Backup restored.");
				setOpen(false);
			} catch {
				toast.error("Couldn’t read that file.");
			}
		};
		reader.readAsText(file);
	}
	async function toggleReminder() {
		const next = !reminderOn;
		if (next && typeof Notification !== "undefined" && Notification.permission === "default") try {
			await Notification.requestPermission();
		} catch {}
		setReminder(next);
		toast(next ? `I’ll nudge you at ${reminderTime} CAT if today isn’t logged — while this page is open.` : "Daily reminder off.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		ref: root,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "grid size-11 place-items-center rounded-full text-mist transition-colors duration-150 hover:bg-panel-2 hover:text-paper",
				"aria-label": "Settings",
				"aria-haspopup": "menu",
				"aria-expanded": open,
				onClick: () => setOpen((v) => !v),
				id: "theme-menu",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-4" })
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				role: "menu",
				"aria-label": "Settings",
				className: "absolute right-0 z-50 mt-1 max-h-[min(36rem,calc(100dvh-5.5rem))] w-[min(18.5rem,calc(100vw-1.5rem))] overflow-y-auto rounded-xl bg-panel p-1.5 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2.5 pt-1.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase",
						children: "Theme"
					}),
					THEMES.map((item) => {
						const active = theme === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							role: "menuitemradio",
							"aria-checked": active,
							className: cn("flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm transition-colors duration-150", active ? "bg-panel-2 text-paper" : "text-mist hover:bg-panel-2 hover:text-paper"),
							onClick: () => setTheme(item.id),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex size-6 overflow-hidden rounded-full shadow-[var(--shadow-border)]",
									"aria-hidden": "true",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-full w-1/2",
										style: { background: item.swatch[0] }
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-full w-1/2",
										style: { background: item.swatch[1] }
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "flex-1 text-left",
									children: item.label
								}),
								active ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5 text-sage" }) : null
							]
						}, item.id);
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1.5 h-px bg-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2.5 pt-0.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase",
						children: "Lock"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2",
						onClick: () => {
							setOpen(false);
							setPinOpen(true);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4 text-sage" }), pinHash ? "Change PIN" : "Set PIN"]
					}),
					pinHash ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2",
						onClick: () => {
							if (window.confirm("Remove the PIN on this device?")) {
								clearPin();
								toast("PIN removed.");
							}
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4 text-mist" }), "Remove PIN"]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1.5 h-px bg-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2.5 pt-0.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase",
						children: "Sound"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "menuitemcheckbox",
						"aria-checked": soundOn,
						className: "flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2",
						onClick: () => {
							const next = !soundOn;
							setSoundOn(next);
							if (next) playFeedback("deposit", theme);
						},
						children: [soundOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Volume2, { className: "size-4 text-sage" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolumeX, { className: "size-4 text-mist" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 text-left",
							children: soundOn ? "Deposit sounds on" : "Deposit sounds off"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1.5 h-px bg-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2.5 pt-0.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase",
						children: "Reminder"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "menuitemcheckbox",
						"aria-checked": reminderOn,
						className: "flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2",
						onClick: () => void toggleReminder(),
						children: [reminderOn ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4 text-sage" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BellOff, { className: "size-4 text-mist" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 text-left",
							children: reminderOn ? "Daily nudge on" : "Daily nudge off"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex min-h-11 items-center gap-3 px-2.5 text-sm text-paper",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex-1 text-mist",
							children: "Time (CAT)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "time",
							value: reminderTime,
							onChange: (e) => setReminder(reminderOn, e.target.value || "20:00"),
							className: "h-9 rounded-md bg-ink-2 px-2 text-sm tabular-nums text-paper shadow-[var(--shadow-border)]"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1.5 h-px bg-line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "px-2.5 pt-0.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase",
						children: "Backup"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						id: "export-data",
						className: "flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2",
						onClick: download,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4 text-sage" }), "Export my data"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2",
						onClick: () => fileRef.current?.click(),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-4 text-sage" }), "Restore from file"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						ref: fileRef,
						type: "file",
						accept: "application/json,.json",
						className: "hidden",
						onChange: onFile
					}),
					!standalone ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "my-1.5 h-px bg-line" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-2.5 pt-0.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase",
							children: "App"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2",
							onClick: async () => {
								if (installEvent) {
									await installEvent.prompt();
									setInstallEvent(null);
									setOpen(false);
									return;
								}
								toast("Use your browser’s Install / Add to Home Screen — K10 Daily is installable.");
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smartphone, { className: "size-4 text-sage" }), "Install this app"]
						})
					] }) : null
				]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinDialog, {
				open: pinOpen,
				onOpenChange: setPinOpen,
				hasPin: Boolean(pinHash),
				setPin,
				checkPin
			})
		]
	});
}
function PinDialog({ open, onOpenChange, hasPin, setPin, checkPin }) {
	const [current, setCurrent] = (0, import_react.useState)("");
	const [next, setNext] = (0, import_react.useState)("");
	const [again, setAgain] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (open) {
			setCurrent("");
			setNext("");
			setAgain("");
		}
	}, [open]);
	async function save() {
		if (!/^\d{4}$/.test(next)) {
			toast.error("Use four digits.");
			return;
		}
		if (next !== again) {
			toast.error("New PINs didn’t match.");
			return;
		}
		if (hasPin && !await checkPin(current)) {
			toast.error("Current PIN is wrong.");
			return;
		}
		await setPin(next);
		toast.success("PIN saved.");
		onOpenChange(false);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: hasPin ? "Change PIN" : "Set PIN" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Four digits, stored only on this device. Lock kicks in after 5 minutes away." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-3",
			children: [
				hasPin ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "pin-current",
						children: "Current PIN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "pin-current",
						inputMode: "numeric",
						maxLength: 4,
						value: current,
						onChange: (e) => setCurrent(e.target.value.replace(/\D/g, "").slice(0, 4)),
						className: "tabular-nums tracking-[0.4em]"
					})]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "pin-new",
						children: "New PIN"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "pin-new",
						inputMode: "numeric",
						maxLength: 4,
						value: next,
						onChange: (e) => setNext(e.target.value.replace(/\D/g, "").slice(0, 4)),
						className: "tabular-nums tracking-[0.4em]"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "pin-again",
						children: "Confirm"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "pin-again",
						inputMode: "numeric",
						maxLength: 4,
						value: again,
						onChange: (e) => setAgain(e.target.value.replace(/\D/g, "").slice(0, 4)),
						className: "tabular-nums tracking-[0.4em]"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					onClick: () => void save(),
					children: "Save PIN"
				})
			]
		})] })
	});
}
var TABS = [{
	id: "savings",
	label: "Savings",
	icon: Wallet
}, {
	id: "portfolio",
	label: "Portfolio",
	icon: Landmark
}];
function AppShell({ children }) {
	const [clock, setClock] = (0, import_react.useState)(() => lusakaNow());
	const section = useTracker((s) => s.section);
	const setSection = useTracker((s) => s.setSection);
	const theme = useTracker((s) => s.theme);
	const hydrated = useTracker((s) => s.hydrated);
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setClock(lusakaNow()), 15e3);
		return () => window.clearInterval(id);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		applyTheme(theme);
	}, [theme, hydrated]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative z-[1] min-h-dvh bg-ink text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"aria-hidden": "true",
				className: "header-wash pointer-events-none absolute inset-x-0 top-0 h-72"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "app-enter relative z-30 mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-5 pt-6 pb-2 sm:px-8 sm:pt-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-display text-2xl tracking-tight text-paper italic",
							children: "K10"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[12px] font-semibold tracking-[0.2em] text-mist uppercase",
							children: "Daily"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden rounded-full bg-panel-2 p-1 sm:flex",
						"aria-label": "Main",
						children: TABS.map((tab) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setSection(tab.id),
							className: cn("h-9 rounded-full px-4 text-[13px] font-medium tracking-[0.02em] transition-[background-color,color,transform] duration-200", section === tab.id ? "bg-panel text-paper" : "text-mist hover:text-paper"),
							children: tab.label
						}, tab.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 text-[13px] text-mist sm:gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "hidden md:inline",
								children: [
									clock.weekday,
									" ",
									clock.date
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mr-0.5 flex items-center gap-2 tabular-nums",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "live-dot size-1.5 rounded-full bg-sage" }),
									clock.time,
									" CAT"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeMenu, {})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "app-enter relative z-10 mx-auto max-w-[1120px] px-5 pb-28 sm:px-8 sm:pb-16",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "fixed inset-x-0 bottom-0 z-20 border-t border-line bg-ink/95 px-4 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden",
				"aria-label": "Main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-sm grid-cols-2 gap-1",
					children: TABS.map((tab) => {
						const Icon = tab.icon;
						const active = section === tab.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => setSection(tab.id),
							className: cn("flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-lg px-3 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors duration-150", active ? "text-sage-2" : "text-haze"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-5",
								strokeWidth: active ? 2.2 : 1.75
							}), tab.label]
						}, tab.id);
					})
				})
			})
		]
	});
}
var TooltipProvider = Provider;
var Tooltip$1 = Root3;
var TooltipTrigger = Trigger;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	sideOffset,
	className: cn("z-50 overflow-hidden rounded-sm bg-panel-2 px-2.5 py-1.5 text-xs text-paper shadow-[var(--shadow-border)]", className),
	...props
}) }));
TooltipContent.displayName = Content2.displayName;
var WEEKDAYS = [
	"S",
	"M",
	"T",
	"W",
	"T",
	"F",
	"S"
];
function intensity(deposit) {
	if (deposit == null) return "bg-transparent shadow-[inset_0_0_0_1px_var(--cell-stroke)]";
	if (deposit === 0) return "bg-panel-2";
	if (deposit < 10) return "bg-sage/30";
	if (deposit === 10) return "bg-sage/55";
	if (deposit < 20) return "bg-sage/80";
	return "bg-sage";
}
function CalendarHeat() {
	const days = useTracker((s) => s.days);
	const cycle = useTracker((s) => s.cycle);
	const selectedDate = useTracker((s) => s.selectedDate);
	const setSelectedDate = useTracker((s) => s.setSelectedDate);
	const stats = useTrackerStats();
	const logTick = useTracker((s) => s.logTick);
	const lastLoggedDate = useTracker((s) => s.lastLoggedDate);
	const [month, setMonth] = (0, import_react.useState)(() => monthKey(stats.today));
	(0, import_react.useEffect)(() => {
		setMonth(monthKey(stats.today));
	}, [cycle.id, stats.today]);
	const views = (0, import_react.useMemo)(() => withViews(days), [days]);
	const cells = (0, import_react.useMemo)(() => views.filter((d) => monthKey(d.date) === month), [views, month]);
	const startPad = cells[0] ? weekdayIndex(cells[0].date) : 0;
	const title = cells[0] ? formatDay(cells[0].date, "month") : month;
	function shift(delta) {
		const [y, m] = month.split("-").map(Number);
		const next = new Date(y, (m ?? 1) - 1 + delta, 1);
		const key = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
		const min = cycle.startDate.slice(0, 7);
		const max = cycle.endDate.slice(0, 7);
		if (key < min || key > max) return;
		setMonth(key);
	}
	const monthTotal = cells.reduce((s, d) => s + (d.deposit ?? 0), 0);
	const loggedCount = cells.filter((d) => d.deposit != null).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Calendar"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-mist",
					children: [
						formatK(monthTotal, 0),
						" this month · ",
						loggedCount,
						" days logged"
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "size-9",
							onClick: () => shift(-1),
							"aria-label": "Previous month",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "min-w-[8.5rem] text-center text-sm text-paper",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							size: "icon",
							className: "size-9",
							onClick: () => shift(1),
							"aria-label": "Next month",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipProvider, {
				delayDuration: 80,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-7 gap-1.5 text-center text-[10px] tracking-[0.14em] text-haze uppercase",
					children: WEEKDAYS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: d }, `${d}-${i}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 grid grid-cols-7 gap-1.5",
					children: [Array.from({ length: startPad }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, `pad-${i}`)), cells.map((d) => {
						const future = d.date > stats.today;
						const selected = d.date === selectedDate;
						const today = d.date === stats.today;
						const justLogged = logTick > 0 && d.date === lastLoggedDate && d.deposit != null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								disabled: future,
								onClick: () => setSelectedDate(d.date),
								className: cn("aspect-square rounded-sm transition-[transform,box-shadow] duration-150", intensity(future ? null : d.deposit), selected && "ring-2 ring-paper/80 ring-offset-2 ring-offset-panel", today && !selected && "ring-1 ring-sage", !future && "hover:scale-[1.06]", future && "opacity-40", justLogged && "cal-ink"),
								"aria-label": `${formatDay(d.date, "short")}${d.deposit == null ? "" : `, ${formatK(d.deposit, 0)}`}`
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TooltipContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: formatDay(d.date, "short")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-mist",
							children: future ? "Upcoming" : d.deposit == null ? "Not logged" : d.deposit === 0 ? "Rest day" : formatK(d.deposit, 0)
						})] })] }, justLogged ? `${d.date}-${logTick}` : d.date);
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-[12px] text-haze",
				children: [parseISODate(stats.today).toLocaleDateString("en-GB", { weekday: "long" }), " — tap a past day to edit it in the log."]
			})
		]
	});
}
function Celebration() {
	const pending = useTracker((s) => s.pendingComplete);
	const startNextCycle = useTracker((s) => s.startNextCycle);
	const today = todayISO();
	const [target, setTarget] = (0, import_react.useState)(() => String(pending?.targetAmount ?? 7e3));
	const [endDate, setEndDate] = (0, import_react.useState)(() => addYearsISO(today, 1));
	const [daily, setDaily] = (0, import_react.useState)(String(10));
	if (!pending) return null;
	const amount = Number(target);
	const perDay = Number(daily);
	const span = Math.max(1, diffDays(today, endDate) + 1);
	const implied = Number.isFinite(amount) ? amount / span : 0;
	function start() {
		if (!Number.isFinite(amount) || amount <= 0) return;
		if (!endDate || endDate < today) return;
		startNextCycle({
			targetAmount: amount,
			endDate,
			dailyTarget: Number.isFinite(perDay) && perDay > 0 ? perDay : 10
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 flex items-end justify-center sm:items-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-ink/80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Confetti, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 m-4 w-full max-w-md rounded-xl bg-panel p-6 shadow-[var(--shadow-border)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[12px] tracking-[0.2em] text-sage-2 uppercase",
						children: [
							"Cycle ",
							pending.number,
							" complete"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl tracking-tight text-paper",
						children: "Goal reached"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-mist",
						children: [
							formatDay(pending.firstDeposit ?? pending.startDate, "short"),
							" →",
							" ",
							formatDay(pending.lastDeposit ?? pending.completedAt, "short")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-5 grid grid-cols-2 gap-3 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Deposited",
								value: formatK(pending.totalDeposited, 0)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Patumba",
								value: formatK(pending.cashBalance)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Interest",
								value: formatK(pending.interest)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								label: "Days logged",
								value: String(pending.daysLogged)
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid gap-3 border-t border-line pt-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-paper",
								children: ["Start cycle ", pending.number + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "next-target",
									children: "New target (K)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "next-target",
									inputMode: "decimal",
									className: "tabular-nums",
									value: target,
									onChange: (e) => setTarget(e.target.value)
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-2 gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "next-end",
										children: "End date"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "next-end",
										type: "date",
										min: today,
										value: endDate,
										onChange: (e) => setEndDate(e.target.value)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
										htmlFor: "next-daily",
										children: "Daily pace (K)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										id: "next-daily",
										inputMode: "decimal",
										className: "tabular-nums",
										value: daily,
										onChange: (e) => setDaily(e.target.value)
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-[12px] text-haze",
								children: [
									span,
									" days · about ",
									formatK(implied, 0),
									"/day to hit the target."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "lg",
								className: "w-full",
								onClick: start,
								id: "start-next-cycle",
								children: ["Archive and start cycle ", pending.number + 1]
							})
						]
					})
				]
			})
		]
	});
}
function Stat({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-ink-2 px-3 py-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-[11px] tracking-wide text-haze uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "mt-0.5 font-display text-xl tabular-nums text-paper",
			children: value
		})]
	});
}
function Confetti() {
	const bits = (0, import_react.useMemo)(() => Array.from({ length: 42 }, (_, i) => ({
		left: i * 97 % 100,
		delay: i * 37 % 80 / 100,
		duration: 1.6 + i * 13 % 10 / 10,
		size: 5 + i % 4,
		tone: i % 3
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "confetti-layer pointer-events-none absolute inset-0 overflow-hidden",
		"aria-hidden": "true",
		children: bits.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: b.tone === 0 ? "bg-sage" : b.tone === 1 ? "bg-paper" : "bg-sage-2",
			style: {
				left: `${b.left}%`,
				width: b.size,
				height: b.size * .45,
				animationDelay: `${b.delay}s`,
				animationDuration: `${b.duration}s`
			}
		}, i))
	});
}
function CycleCompare() {
	const archive = useTracker((s) => s.archive);
	const stats = useTrackerStats();
	const cycle = useTracker((s) => s.cycle);
	if (!archive.length) return null;
	const rows = [...archive.map((c) => ({
		id: c.id,
		label: `Cycle ${c.number}`,
		total: c.totalDeposited,
		days: c.daysLogged,
		average: c.averageDeposit ?? (c.daysLogged ? c.totalDeposited / c.daysLogged : 0),
		streak: c.longestStreak ?? c.streak ?? 0
	})), {
		id: cycle.id,
		label: `Cycle ${cycle.number} · now`,
		total: stats.totalDeposited,
		days: stats.daysLogged,
		average: stats.averageDeposit,
		streak: stats.longestStreak
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl tracking-tight",
				children: "Cycle compare"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-mist",
				children: "How this pot sits against closed ones."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[28rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-[11px] tracking-[0.14em] text-haze uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Cycle"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Total"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Days"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Avg / day"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Best streak"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-b border-line/70",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 pr-3 text-paper",
								children: r.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 pr-3 tabular-nums",
								children: formatK(r.total, 0)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 pr-3 tabular-nums",
								children: r.days
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 pr-3 tabular-nums",
								children: formatK(r.average, 0)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "py-2.5 tabular-nums",
								children: r.streak
							})
						]
					}, r.id)) })]
				})
			})
		]
	});
}
function CycleSettings() {
	const cycle = useTracker((s) => s.cycle);
	const updateCyclePlan = useTracker((s) => s.updateCyclePlan);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [target, setTarget] = (0, import_react.useState)(String(cycle.targetAmount));
	const [endDate, setEndDate] = (0, import_react.useState)(cycle.endDate);
	const [daily, setDaily] = (0, import_react.useState)(String(cycle.dailyTarget));
	function openDialog() {
		setTarget(String(cycle.targetAmount));
		setEndDate(cycle.endDate);
		setDaily(String(cycle.dailyTarget));
		setOpen(true);
	}
	function save() {
		const amount = Number(target);
		const pace = Number(daily);
		if (!Number.isFinite(amount) || amount <= 0) {
			toast.error("Enter a target greater than zero.");
			return;
		}
		if (!endDate) {
			toast.error("Pick an end date.");
			return;
		}
		const { completed } = updateCyclePlan({
			targetAmount: amount,
			endDate,
			dailyTarget: Number.isFinite(pace) && pace > 0 ? pace : cycle.dailyTarget
		});
		setOpen(false);
		if (completed) toast.success("Target reached — time to archive this cycle.");
		else toast.success("Cycle plan updated.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: openDialog,
		className: "inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-[12px] text-mist transition-colors duration-150 hover:text-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "size-3.5" }),
			"Cycle ",
			cycle.number,
			" · ",
			formatK(cycle.targetAmount, 0),
			" · ",
			formatDay(cycle.endDate, "short")
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: setOpen,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogTitle, { children: [
				"Cycle ",
				cycle.number,
				" plan"
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Change the savings goal or end date. Hitting 100% of the target archives this cycle." })] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "cycle-target",
						children: "Target (K)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "cycle-target",
						inputMode: "decimal",
						className: "tabular-nums",
						value: target,
						onChange: (e) => setTarget(e.target.value)
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "cycle-end",
							children: "End date"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "cycle-end",
							type: "date",
							min: cycle.startDate,
							value: endDate,
							onChange: (e) => setEndDate(e.target.value)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "cycle-daily",
							children: "Daily pace (K)"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "cycle-daily",
							inputMode: "decimal",
							className: "tabular-nums",
							value: daily,
							onChange: (e) => setDaily(e.target.value)
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				onClick: () => setOpen(false),
				children: "Cancel"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				onClick: save,
				children: "Save plan"
			})] })
		] })
	})] });
}
function DepositForm() {
	const days = useTracker((s) => s.days);
	const selectedDate = useTracker((s) => s.selectedDate);
	const setSelectedDate = useTracker((s) => s.setSelectedDate);
	const logDeposit = useTracker((s) => s.logDeposit);
	const cycle = useTracker((s) => s.cycle);
	const theme = useTracker((s) => s.theme);
	const soundOn = useTracker((s) => s.soundOn);
	const today = useTrackerStats().today;
	const entry = (0, import_react.useMemo)(() => days.find((d) => d.date === selectedDate), [days, selectedDate]);
	const [deposit, setDeposit] = (0, import_react.useState)("10");
	const [bank, setBank] = (0, import_react.useState)("");
	const [notes, setNotes] = (0, import_react.useState)("");
	const [justSaved, setJustSaved] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!entry) return;
		setDeposit(entry.deposit == null ? "10" : String(entry.deposit));
		setBank(entry.bankBalance == null ? "" : String(entry.bankBalance));
		setNotes(entry.notes);
		setJustSaved(false);
	}, [entry]);
	const isFuture = selectedDate > today;
	const isToday = selectedDate === today;
	const alreadyLogged = entry?.deposit != null;
	function nudge(delta) {
		const next = Math.max(0, (Number(deposit) || 0) + delta);
		setDeposit(String(next));
	}
	function submit(event) {
		event.preventDefault();
		if (isFuture) return;
		const amount = Number(deposit);
		if (!Number.isFinite(amount) || amount < 0) {
			toast.error("Enter a valid deposit amount.");
			return;
		}
		const bankValue = bank.trim() === "" ? null : Number(bank);
		if (bankValue != null && !Number.isFinite(bankValue)) {
			toast.error("Bank balance must be a number.");
			return;
		}
		const { completed, crossed } = logDeposit({
			date: selectedDate,
			deposit: amount,
			bankBalance: bankValue,
			notes: notes.trim()
		});
		setJustSaved(true);
		window.setTimeout(() => setJustSaved(false), 1400);
		if (soundOn) playFeedback(completed ? "cycle" : crossed.length ? "milestone" : "deposit", theme);
		if (amount > 0) toast.success(`Logged ${formatK(amount, 0)} on ${formatDay(selectedDate, "short")}`);
		else toast("Marked as a rest day.");
		if (crossed.length) toast(`Crossed ${crossed.map((t) => formatK(t, 0)).join(", ")}.`, { duration: 4500 });
		if (completed) toast("Goal reached.");
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl tracking-tight text-paper",
				children: isToday ? "Today’s deposit" : formatDay(selectedDate, "short")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-mist",
				children: alreadyLogged ? "Edit the row — cumulative and interest recalculate live." : "Log the real amount. Leave bank blank if the Patumba SMS isn’t in yet."
			})] }), alreadyLogged ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-1 rounded-full bg-sage-dim px-2.5 py-1 text-[11px] font-medium text-sage-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3" }), " Logged"]
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: submit,
			className: "mt-5 grid gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "log-date",
						children: "Date"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "log-date",
						type: "date",
						min: cycle.startDate,
						max: todayISO(),
						value: selectedDate,
						onChange: (e) => setSelectedDate(e.target.value)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
							htmlFor: "log-amount",
							children: "Deposit (K)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									size: "icon",
									onClick: () => nudge(-1),
									"aria-label": "Decrease",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, {})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "log-amount",
									inputMode: "decimal",
									value: deposit,
									onChange: (e) => setDeposit(e.target.value),
									className: "text-center font-medium tabular-nums"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "secondary",
									size: "icon",
									onClick: () => nudge(1),
									"aria-label": "Increase",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, {})
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-1.5",
							children: [
								0,
								10,
								15,
								20,
								25
							].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setDeposit(String(n)),
								className: "h-8 rounded-full px-3 text-[12px] text-mist shadow-[var(--shadow-border)] transition-[background-color,color] duration-150 hover:bg-panel-2 hover:text-paper",
								children: n === 0 ? "Skip" : `K${n}`
							}, n))
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "log-bank",
						children: "Bank balance from SMS (optional)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "log-bank",
						inputMode: "decimal",
						placeholder: "e.g. 542.48",
						value: bank,
						onChange: (e) => setBank(e.target.value),
						className: "tabular-nums"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
						htmlFor: "log-notes",
						children: "Note (optional)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "log-notes",
						value: notes,
						onChange: (e) => setNotes(e.target.value),
						placeholder: "Why you skipped, or what pushed a bigger day"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					size: "lg",
					disabled: isFuture,
					className: "w-full",
					children: justSaved ? "Saved" : alreadyLogged ? "Update entry" : isFuture ? "Future day" : "Record deposit"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[12px] text-haze",
					children: [
						"Cycle ",
						cycle.number,
						" runs until ",
						formatDay(cycle.endDate, "short"),
						". Don’t fill future days."
					]
				})
			]
		})]
	});
}
function ChartTip({ active, payload, label }) {
	if (!active || !payload?.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md bg-panel-2 px-3 py-2 text-xs shadow-[var(--shadow-border)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-1 text-mist",
			children: label
		}), payload.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between gap-6 tabular-nums text-paper",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-mist",
				children: p.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p.value == null ? "—" : formatK(p.value) })]
		}, p.name))]
	});
}
function GrowthChart() {
	const days = useTracker((s) => s.days);
	const cycle = useTracker((s) => s.cycle);
	const theme = useTracker((s) => s.theme);
	const stats = useTrackerStats();
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const [palette, setPalette] = (0, import_react.useState)(readChartPalette);
	(0, import_react.useEffect)(() => setMounted(true), []);
	(0, import_react.useEffect)(() => setPalette(readChartPalette()), [theme]);
	const data = (0, import_react.useMemo)(() => chartSeries(days, stats.today, cycle.dailyTarget), [
		days,
		stats.today,
		cycle.dailyTarget
	]);
	const last = data[data.length - 1];
	const delta = last ? last.deposited - last.expected : 0;
	const mark = nextMilestone(stats.totalDeposited);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Growth"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-1 text-sm text-mist",
					children: [
						"Cumulative deposits against the ",
						formatK(cycle.dailyTarget, 0),
						"/day pace line."
					]
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-3 text-[11px] tracking-wide text-mist uppercase",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "block size-2 rounded-full bg-paper" }), " Deposited"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "block size-2 rounded-full bg-haze" }), " Pace"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", { className: "block size-2 rounded-full bg-sage" }), " Patumba"]
						}),
						last ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "normal-case tracking-normal text-paper",
							children: delta >= 0 ? `${formatK(delta, 0)} ahead of pace` : `${formatK(Math.abs(delta), 0)} behind pace`
						}) : null
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-64 sm:h-80",
				children: mounted && data.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ComposedChart, {
						data,
						margin: {
							top: 12,
							right: 12,
							left: -8,
							bottom: 0
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
								id: "cashFill",
								x1: "0",
								y1: "0",
								x2: "0",
								y2: "1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "0%",
									stopColor: palette.sage,
									stopOpacity: .22
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
									offset: "100%",
									stopColor: palette.sage,
									stopOpacity: 0
								})]
							}) }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
								stroke: palette.line,
								vertical: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
								dataKey: "label",
								tick: {
									fill: palette.mist,
									fontSize: 11
								},
								tickLine: false,
								axisLine: false,
								interval: "preserveStartEnd",
								minTickGap: 28
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
								tick: {
									fill: palette.mist,
									fontSize: 11
								},
								tickLine: false,
								axisLine: false,
								tickFormatter: (v) => v >= 1e3 ? `${v / 1e3}k` : String(v),
								width: 40
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTip, {}) }),
							mark ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
								y: mark,
								stroke: palette.sage,
								strokeDasharray: "3 5",
								strokeOpacity: .55,
								label: {
									value: formatK(mark, 0),
									fill: palette.mist,
									fontSize: 11,
									position: "insideTopRight"
								}
							}) : null,
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
								type: "monotone",
								dataKey: "bank",
								name: "Patumba",
								stroke: palette.sage,
								fill: "url(#cashFill)",
								strokeWidth: 1.5,
								dot: false,
								connectNulls: true
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "expected",
								name: "Pace",
								stroke: palette.haze,
								strokeWidth: 1.25,
								strokeDasharray: "5 5",
								dot: false
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
								type: "monotone",
								dataKey: "deposited",
								name: "Deposited",
								stroke: palette.paper,
								strokeWidth: 2.25,
								dot: false,
								activeDot: {
									r: 4,
									fill: palette.paper,
									stroke: palette.sage,
									strokeWidth: 2
								}
							})
						]
					})
				}) : data.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex h-full items-center justify-center text-sm text-mist",
					children: "Waiting for deposits"
				}) : null
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-[12px] text-haze",
				children: [
					"At the current ",
					formatK(stats.averageDeposit, 0),
					" average, the plan lands near",
					" ",
					formatK(stats.projectedTotal, 0),
					" by the cycle end."
				]
			})
		]
	});
}
function AnimatedNumber({ value, decimals = 2, className, prefix = true, duration = 700 }) {
	const [display, setDisplay] = (0, import_react.useState)(value);
	const current = (0, import_react.useRef)(value);
	const first = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		if (first.current) {
			first.current = false;
			current.current = value;
			setDisplay(value);
			return;
		}
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			current.current = value;
			setDisplay(value);
			return;
		}
		const from = current.current;
		const to = value;
		const start = performance.now();
		let frame = 0;
		const tick = (now) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - Math.pow(1 - t, 3);
			const next = from + (to - from) * eased;
			current.current = next;
			setDisplay(next);
			if (t < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [value, duration]);
	const formatted = prefix ? formatK(display, decimals) : display.toLocaleString("en-ZM", {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("tabular-nums", className),
		children: formatted
	});
}
function ProgressRing({ progress, size = 236, stroke = 7, children, className, burst = 0 }) {
	const radius = (size - stroke) / 2;
	const len = 2 * Math.PI * radius;
	const offset = len * (1 - Math.min(1, Math.max(0, progress)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", className),
		style: {
			width: size,
			height: size
		},
		children: [
			burst > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "burst-ring pointer-events-none absolute inset-3 rounded-full border border-sage/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "burst-ring pointer-events-none absolute inset-0 rounded-full border border-sage/25",
				style: { animationDelay: "90ms" }
			})] }, `b1-${burst}`) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
				width: size,
				height: size,
				className: "-rotate-90",
				"aria-hidden": "true",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: size / 2,
					cy: size / 2,
					r: radius,
					fill: "none",
					stroke: "currentColor",
					className: "text-line",
					strokeWidth: stroke
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: size / 2,
					cy: size / 2,
					r: radius,
					fill: "none",
					stroke: "currentColor",
					className: "text-sage",
					strokeWidth: stroke,
					strokeLinecap: "round",
					strokeDasharray: len,
					strokeDashoffset: offset,
					style: {
						transition: "stroke-dashoffset 1050ms cubic-bezier(0.16, 1, 0.3, 1)",
						filter: "drop-shadow(0 0 8px color-mix(in srgb, var(--color-sage) 42%, transparent))"
					}
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 flex flex-col items-center justify-center px-8 text-center",
				children
			})
		]
	});
}
function HeroPanel() {
	const stats = useTrackerStats();
	const burstId = useTracker((s) => s.burstId);
	const thousandBurst = useTracker((s) => s.thousandBurst);
	const cycle = useTracker((s) => s.cycle);
	const [ringSize, setRingSize] = (0, import_react.useState)(220);
	(0, import_react.useEffect)(() => {
		const apply = () => setRingSize(window.innerWidth < 640 ? 208 : 248);
		apply();
		window.addEventListener("resize", apply);
		return () => window.removeEventListener("resize", apply);
	}, []);
	const pct = Math.round(Math.min(1, stats.progress) * 1e3) / 10;
	const upcoming = nextMilestone(stats.totalDeposited);
	const toMark = upcoming ? upcoming - stats.totalDeposited : 0;
	const daysOut = upcoming ? daysToAmount(toMark, stats.averageDeposit) : null;
	const paceLabel = stats.paceDelta > 0 ? `${formatK(stats.paceDelta, 0)} ahead of ${formatK(cycle.dailyTarget, 0)}/day` : stats.paceDelta < 0 ? `${formatK(Math.abs(stats.paceDelta), 0)} behind ${formatK(cycle.dailyTarget, 0)}/day` : `Exactly on the ${formatK(cycle.dailyTarget, 0)}/day pace`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "stagger-in flex flex-col items-center pt-4 pb-2 sm:pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-[13px] tracking-[0.22em] text-mist uppercase",
				children: [
					"Cycle ",
					cycle.number,
					" · running total"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AmbientHalo, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ProgressRing, {
						progress: stats.progress,
						burst: burstId,
						className: "relative z-[1]",
						size: ringSize,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedNumber, {
							value: stats.totalDeposited,
							duration: 900,
							className: "font-display text-[2.75rem] leading-none tracking-tight text-paper sm:text-5xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "mt-2 max-w-[11rem] text-[12px] leading-snug text-mist",
							children: [
								pct,
								"% of ",
								formatK(stats.planTarget, 0)
							]
						})]
					}),
					thousandBurst ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThousandBurst, { mark: thousandBurst.mark }, thousandBurst.id) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-sm text-center text-sm text-paper/80",
				children: paceLabel
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-[12px] text-haze",
				children: [
					"Target ",
					formatDay(cycle.endDate, "short"),
					" · ",
					stats.daysRemaining,
					" days left"
				]
			}),
			upcoming && daysOut != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1 text-[12px] text-sage-2",
				children: [
					formatK(upcoming, 0),
					" in ~",
					daysOut,
					" day",
					daysOut === 1 ? "" : "s",
					" at this pace"
				]
			}) : null
		]
	});
}
function AmbientHalo() {
	const specks = (0, import_react.useMemo)(() => Array.from({ length: 9 }, (_, i) => ({
		left: 18 + i * 37 % 64,
		top: 16 + i * 23 % 62,
		delay: i * .7 % 6,
		duration: 8 + i % 4
	})), []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "ambient-halo",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ambient-orb a" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "ambient-orb b" }),
			specks.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "ambient-speck",
				style: {
					left: `${s.left}%`,
					top: `${s.top}%`,
					animationDelay: `${s.delay}s`,
					animationDuration: `${s.duration}s`
				}
			}, i))
		]
	});
}
function ThousandBurst({ mark }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "k-burst",
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "k-burst-wave" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "k-burst-wave delay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "k-burst-label",
				children: formatK(mark, 0)
			})
		]
	});
}
function HydrateGate({ children }) {
	(0, import_react.useEffect)(() => {
		let cancelled = false;
		(async () => {
			const fallback = window.setTimeout(() => {
				if (!cancelled && !useTracker.getState().hydrated) useTracker.getState().hydrate();
			}, 400);
			try {
				await useTracker.persist.rehydrate();
			} catch {}
			window.clearTimeout(fallback);
			if (!cancelled) useTracker.getState().hydrate();
		})();
		return () => {
			cancelled = true;
		};
	}, []);
	return children;
}
function LedgerTable() {
	const days = useTracker((s) => s.days);
	const selectedDate = useTracker((s) => s.selectedDate);
	const setSelectedDate = useTracker((s) => s.setSelectedDate);
	const stats = useTrackerStats();
	const [filter, setFilter] = (0, import_react.useState)("recent");
	const views = (0, import_react.useMemo)(() => withViews(days), [days]);
	const rows = (0, import_react.useMemo)(() => {
		const elapsed = views.filter((d) => d.date <= stats.today);
		if (filter === "logged") return [...elapsed].filter((d) => d.deposit != null).reverse();
		if (filter === "gaps") return [...elapsed].filter((d) => d.deposit == null || d.deposit === 0).reverse();
		return [...elapsed].slice(-14).reverse();
	}, [
		views,
		stats.today,
		filter
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: "Ledger"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-mist",
					children: "The daily book. Select a row to edit it in the log."
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex gap-1 rounded-full bg-ink-2 p-1",
					children: [
						["recent", "Recent"],
						["logged", "Logged"],
						["gaps", "Gaps"]
					].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setFilter(id),
						className: cn("h-8 rounded-full px-3 text-[12px] font-medium transition-[background-color,color] duration-150", filter === id ? "bg-panel text-paper" : "text-mist hover:text-paper"),
						children: label
					}, id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[36rem] text-left text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
						className: "text-[11px] tracking-[0.14em] text-haze uppercase",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-line",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Date"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Deposit"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Cumulative"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Bank"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 pr-3 font-medium",
									children: "Interest"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2 font-medium",
									children: "Notes"
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						colSpan: 6,
						className: "py-8 text-center text-mist",
						children: "Nothing in this view."
					}) }) : rows.map((row) => {
						const selected = row.date === selectedDate;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							onClick: () => setSelectedDate(row.date),
							className: cn("cursor-pointer border-b border-line/70 transition-colors duration-150", selected ? "bg-sage-dim/50" : "hover:bg-panel-2"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5 pr-3 whitespace-nowrap text-paper",
									children: formatDay(row.date, "short")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5 pr-3 tabular-nums",
									children: row.deposit == null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-haze",
										children: "—"
									}) : formatK(row.deposit, row.deposit % 1 ? 2 : 0)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5 pr-3 tabular-nums text-mist",
									children: formatK(row.cumulative, 0)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5 pr-3 tabular-nums",
									children: row.bankBalance == null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-haze",
										children: "—"
									}) : formatK(row.bankBalance)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2.5 pr-3 tabular-nums text-sage-2",
									children: row.interest == null ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-haze",
										children: "—"
									}) : formatK(row.interest)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "max-w-[16rem] py-2.5 text-mist",
									children: row.notes ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "line-clamp-2",
										title: row.notes,
										children: row.notes
									}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-haze",
										children: "—"
									})
								})
							]
						}, row.date);
					}) })]
				})
			}),
			filter === "recent" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "ghost",
					size: "sm",
					onClick: () => setFilter("logged"),
					children: "Show every logged day"
				})
			}) : null
		]
	});
}
function MilestoneTrack() {
	const days = useTracker((s) => s.days);
	const notes = useTracker((s) => s.milestoneNotes);
	const setNote = useTracker((s) => s.setMilestoneNote);
	const stats = useTrackerStats();
	const upcoming = nextMilestone(stats.totalDeposited);
	const remaining = upcoming ? upcoming - stats.totalDeposited : 0;
	const daysOut = upcoming ? daysToAmount(remaining, stats.averageDeposit) : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl tracking-tight",
				children: "LuSE marks"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-mist",
				children: "When the running total crosses a mark, jot broker notes on that card. Trades themselves live in Portfolio."
			})] }), upcoming ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-lg bg-ink-2 px-3 py-2 text-right",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] tracking-[0.16em] text-haze uppercase",
						children: "Next mark"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-xl tabular-nums text-paper",
						children: formatK(upcoming, 0)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[12px] text-mist",
						children: [
							formatK(remaining, 0),
							" to go",
							daysOut == null ? "" : daysOut === 0 ? " · due now" : ` · ~${daysOut} day${daysOut === 1 ? "" : "s"} at ${formatK(stats.averageDeposit, 0)}/day`
						]
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-sage-2",
				children: "All listed marks reached."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-5 grid gap-3 sm:grid-cols-2",
			children: MILESTONE_THRESHOLDS.map((threshold) => {
				const reached = dateReached(days, threshold);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MilestoneCard, {
					threshold,
					reached,
					isNext: threshold === upcoming,
					note: notes[threshold] ?? "",
					onNote: (value) => setNote(threshold, value)
				}, threshold);
			})
		})]
	});
}
function MilestoneCard({ threshold, reached, isNext, note, onNote }) {
	const [draft, setDraft] = (0, import_react.useState)(note);
	(0, import_react.useEffect)(() => setDraft(note), [note]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: cn("rounded-lg bg-ink-2 p-3", isNext && "shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-sage)_45%,transparent)]"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-baseline justify-between gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-xl tabular-nums text-paper",
				children: formatK(threshold, 0)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[12px] text-mist",
				children: reached ? `Hit ${formatDay(reached, "short")}` : isNext ? "Up next" : "Ahead"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
			className: "mt-3 block",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] tracking-wide text-haze uppercase",
				children: "Notes"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
				value: draft,
				rows: 2,
				placeholder: "Broker fees, minimums, what you’ll buy…",
				onChange: (e) => setDraft(e.target.value),
				onBlur: () => {
					if (draft !== note) onNote(draft);
				},
				className: "mt-1 w-full resize-none rounded-md bg-panel px-2.5 py-2 text-sm text-paper shadow-[var(--shadow-border)] placeholder:text-haze focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-sage)_55%,transparent)]"
			})]
		})]
	});
}
function PastCycles() {
	const archive = useTracker((s) => s.archive);
	if (!archive.length) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl tracking-tight",
				children: "Past cycles"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-mist",
				children: "Completed pots, oldest last."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4 space-y-2",
				children: [...archive].reverse().map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "flex flex-col gap-1 rounded-lg bg-ink-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-medium text-paper",
						children: [
							"Cycle ",
							c.number,
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "ml-2 text-sm font-normal text-mist",
								children: [
									formatK(c.totalDeposited, 0),
									" of ",
									formatK(c.targetAmount, 0)
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[12px] text-haze",
						children: [
							formatDay(c.firstDeposit ?? c.startDate, "short"),
							" →",
							" ",
							formatDay(c.lastDeposit ?? c.completedAt, "short"),
							" · ",
							c.daysLogged,
							" days logged"
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm tabular-nums text-sage-2",
						children: c.interest ? `+${formatK(c.interest)} interest` : "Closed"
					})]
				}, c.id))
			})
		]
	});
}
function PinGate({ children }) {
	const hydrated = useTracker((s) => s.hydrated);
	const pinHash = useTracker((s) => s.pinHash);
	const pinSkipped = useTracker((s) => s.pinSkipped);
	const setPin = useTracker((s) => s.setPin);
	const skipPin = useTracker((s) => s.skipPin);
	const checkPin = useTracker((s) => s.checkPin);
	const clearPin = useTracker((s) => s.clearPin);
	const [mode, setMode] = (0, import_react.useState)("setup");
	const [ready, setReady] = (0, import_react.useState)(false);
	const [draft, setDraft] = (0, import_react.useState)("");
	const [pending, setPending] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		if (!pinHash) {
			setMode(pinSkipped ? "open" : "setup");
			setReady(true);
			return;
		}
		setMode(shouldLock(pinHash) ? "unlock" : "open");
		if (!shouldLock(pinHash)) touchLastSeen();
		setReady(true);
	}, [
		hydrated,
		pinHash,
		pinSkipped
	]);
	(0, import_react.useEffect)(() => {
		if (mode !== "open") return;
		touchLastSeen();
		const beat = window.setInterval(touchLastSeen, 15e3);
		const onVis = () => {
			if (document.visibilityState === "hidden") {
				touchLastSeen();
				return;
			}
			const hash = useTracker.getState().pinHash;
			if (shouldLock(hash)) {
				setDraft("");
				setError("");
				setMode("unlock");
			} else touchLastSeen();
		};
		window.addEventListener("pagehide", touchLastSeen);
		document.addEventListener("visibilitychange", onVis);
		return () => {
			window.clearInterval(beat);
			document.removeEventListener("visibilitychange", onVis);
			window.removeEventListener("pagehide", touchLastSeen);
		};
	}, [mode]);
	function press(digit) {
		if (busy || draft.length >= 4) return;
		const next = draft + digit;
		setDraft(next);
		setError("");
		if (next.length === 4) submit(next);
	}
	function backspace() {
		setDraft((d) => d.slice(0, -1));
		setError("");
	}
	async function submit(pin) {
		setBusy(true);
		try {
			if (mode === "setup") {
				setPending(pin);
				setDraft("");
				setMode("confirm");
				return;
			}
			if (mode === "confirm") {
				if (pin !== pending) {
					setError("PINs didn’t match. Try again.");
					setDraft("");
					setPending("");
					setMode("setup");
					return;
				}
				await setPin(pin);
				touchLastSeen();
				setDraft("");
				setMode("open");
				return;
			}
			if (!await checkPin(pin)) {
				setError("Wrong PIN.");
				setDraft("");
				return;
			}
			touchLastSeen();
			setDraft("");
			setMode("open");
		} finally {
			setBusy(false);
		}
	}
	if (hydrated && ready && mode === "open") return children;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[80] flex items-center justify-center bg-ink",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm px-6 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl tracking-tight text-paper",
					children: mode === "setup" ? "Set a 4-digit PIN" : mode === "confirm" ? "Confirm PIN" : "Enter PIN"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-mist",
					children: mode === "setup" ? "This stays on this device. You’ll need it after 5 minutes away." : mode === "confirm" ? "Enter the same PIN once more." : "Locked after time away. Savings never leave this device."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex justify-center gap-3",
					children: [
						0,
						1,
						2,
						3
					].map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-3 rounded-full", i < draft.length ? "bg-sage" : "bg-line-strong") }, i))
				}),
				error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-center text-sm text-danger",
					children: error
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "mt-3 h-5" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid grid-cols-3 gap-2",
					children: [
						[
							"1",
							"2",
							"3",
							"4",
							"5",
							"6",
							"7",
							"8",
							"9"
						].map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid h-14 place-items-center rounded-lg bg-panel text-lg font-medium text-paper hover:bg-panel-2",
							onClick: () => press(d),
							children: d
						}, d)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid h-14 place-items-center rounded-lg text-mist hover:bg-panel-2 hover:text-paper",
							onClick: backspace,
							"aria-label": "Delete",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delete, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid h-14 place-items-center rounded-lg bg-panel text-lg font-medium text-paper hover:bg-panel-2",
							onClick: () => press("0"),
							children: "0"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {})
					]
				}),
				mode === "setup" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-6 h-11 w-full text-sm text-mist hover:text-paper",
					onClick: () => {
						skipPin();
						setMode("open");
					},
					children: "Skip for now"
				}) : mode === "unlock" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-6 h-11 w-full text-sm text-mist hover:text-paper",
					onClick: () => {
						if (window.confirm("Remove the PIN on this device? Your savings stay.")) {
							clearPin();
							setMode("open");
						}
					},
					children: "Forgot PIN"
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mt-6 h-11 w-full text-sm text-mist hover:text-paper",
					onClick: () => {
						setDraft("");
						setPending("");
						setMode("setup");
					},
					children: "Start over"
				})
			]
		})
	});
}
var emptyForm = {
	date: todayISO(),
	ticker: "",
	company: "",
	amount: "",
	shares: "",
	notes: ""
};
function PortfolioPage() {
	const purchases = useTracker((s) => s.purchases);
	const addPurchase = useTracker((s) => s.addPurchase);
	const updatePurchase = useTracker((s) => s.updatePurchase);
	const removePurchase = useTracker((s) => s.removePurchase);
	const setQuote = useTracker((s) => s.setQuote);
	const totals = usePortfolioTotals();
	const [form, setForm] = (0, import_react.useState)(emptyForm);
	const [editing, setEditing] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setForm((f) => ({
			...f,
			date: f.date || todayISO()
		}));
	}, []);
	function load(p) {
		setEditing(p.id);
		setForm({
			date: p.date,
			ticker: p.ticker,
			company: p.company,
			amount: String(p.amount),
			shares: String(p.shares),
			notes: p.notes
		});
	}
	function reset() {
		setEditing(null);
		setForm({
			...emptyForm,
			date: todayISO()
		});
	}
	function submit(e) {
		e.preventDefault();
		const amount = Number(form.amount);
		const shares = Number(form.shares);
		if (!form.date) {
			toast.error("Pick a trade date.");
			return;
		}
		if (!Number.isFinite(amount) || amount <= 0) {
			toast.error("Enter the amount invested.");
			return;
		}
		if (!Number.isFinite(shares) || shares < 0) {
			toast.error("Enter shares as a number.");
			return;
		}
		const named = form.company || LUSE_COUNTERS.find((c) => c.ticker === form.ticker)?.name || "";
		const payload = {
			date: form.date,
			ticker: form.ticker,
			company: named,
			amount,
			shares,
			notes: form.notes.trim()
		};
		if (editing) {
			updatePurchase(editing, payload);
			toast.success("Trade updated.");
		} else {
			addPurchase(payload);
			toast.success(`Logged ${formatK(amount, 0)} in ${named || "LuSE"}.`);
		}
		reset();
	}
	const sorted = [...purchases].sort((a, b) => a.date < b.date ? 1 : a.date > b.date ? -1 : 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "pt-4 sm:pt-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[13px] tracking-[0.22em] text-mist uppercase",
					children: "LuSE book"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-4xl tracking-tight sm:text-5xl",
					children: "Portfolio"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-xl text-sm text-mist",
					children: "Log buys whenever they happen. This book is independent of the savings cycle."
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-panel px-4 py-4 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] tracking-[0.16em] text-mist uppercase",
						children: "Invested"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 font-display text-2xl tracking-tight",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedNumber, {
							value: totals.invested,
							decimals: 0
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-panel px-4 py-4 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] tracking-[0.16em] text-mist uppercase",
						children: "Market"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 font-display text-2xl tracking-tight",
						children: totals.market == null ? "—" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedNumber, {
							value: totals.market,
							decimals: 0
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-panel px-4 py-4 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] tracking-[0.16em] text-mist uppercase",
						children: "Gain / loss"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `mt-1.5 font-display text-2xl tracking-tight ${totals.gain == null ? "" : totals.gain >= 0 ? "text-sage-2" : "text-danger"}`,
						children: totals.gain == null ? "—" : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedNumber, {
							value: totals.gain,
							decimals: 0
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-panel px-4 py-4 sm:px-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[11px] tracking-[0.16em] text-mist uppercase",
						children: "Trades"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1.5 font-display text-2xl tabular-nums tracking-tight",
						children: totals.count
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-2xl tracking-tight",
					children: editing ? "Edit trade" : "New trade"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: submit,
					className: "mt-4 grid gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "p-date",
								children: "Date"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "p-date",
								type: "date",
								max: todayISO(),
								value: form.date,
								onChange: (e) => setForm({
									...form,
									date: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "p-counter",
								children: "Counter"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "p-counter",
								value: form.ticker,
								onChange: (e) => {
									const ticker = e.target.value;
									const hit = LUSE_COUNTERS.find((c) => c.ticker === ticker);
									setForm({
										...form,
										ticker,
										company: hit?.name ?? form.company
									});
								},
								className: "flex h-11 w-full rounded-md bg-ink-2 px-3 text-sm text-paper shadow-[var(--shadow-border)] focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-sage)_55%,transparent)]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Choose a LuSE counter"
									}),
									LUSE_COUNTERS.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
										value: c.ticker,
										children: [
											c.ticker,
											" — ",
											c.name
										]
									}, c.ticker)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "OTHER",
										children: "Other"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "p-company",
								children: "Company"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "p-company",
								value: form.company,
								onChange: (e) => setForm({
									...form,
									company: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "p-amount",
									children: "Amount (K)"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "p-amount",
									inputMode: "decimal",
									className: "tabular-nums",
									value: form.amount,
									onChange: (e) => setForm({
										...form,
										amount: e.target.value
									})
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
									htmlFor: "p-shares",
									children: "Shares"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
									id: "p-shares",
									inputMode: "decimal",
									className: "tabular-nums",
									value: form.shares,
									onChange: (e) => setForm({
										...form,
										shares: e.target.value
									})
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
								htmlFor: "p-notes",
								children: "Notes"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "p-notes",
								value: form.notes,
								onChange: (e) => setForm({
									...form,
									notes: e.target.value
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								type: "submit",
								className: "flex-1",
								id: "save-trade",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), editing ? "Save changes" : "Add trade"]
							}), editing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "ghost",
								onClick: reset,
								children: "Cancel"
							}) : null]
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6",
				children: [totals.holdings.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-2xl tracking-tight",
							children: "Holdings"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-mist",
							children: "Set a last price yourself. No live feed."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-4 divide-y divide-line",
							children: totals.holdings.map((h) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-medium text-paper",
										children: h.ticker || "—"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "ml-2 text-sm text-mist",
										children: h.company
									})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "tabular-nums text-paper",
										children: formatK(h.amount, 0)
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex flex-wrap items-center gap-2 text-[12px] text-mist",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [h.shares.toLocaleString("en-ZM"), " sh"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteField, {
											ticker: h.ticker || h.company,
											price: h.price,
											onSave: (price) => setQuote(h.ticker || h.company, price)
										}),
										h.market != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: h.gain != null && h.gain < 0 ? "text-danger" : "text-sage-2",
											children: [
												"now ",
												formatK(h.market, 0),
												h.gain != null ? ` (${h.gain >= 0 ? "+" : ""}${formatK(h.gain, 0)})` : ""
											]
										}) : null
									]
								})]
							}, h.ticker || h.company))
						})
					]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-2xl tracking-tight",
						children: "Trades"
					}), sorted.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-mist",
						children: "No trades yet. Add a LuSE buy any time."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2",
						children: sorted.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start justify-between gap-3 rounded-lg bg-ink-2 px-3 py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "truncate font-medium text-paper",
									children: [p.ticker ? `${p.ticker} · ` : "", p.company || "LuSE"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[12px] text-haze",
									children: [
										formatDay(p.date, "short"),
										" · ",
										formatK(p.amount),
										" · ",
										p.shares,
										" sh"
									]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex shrink-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-11 place-items-center text-mist hover:text-paper",
									onClick: () => load(p),
									"aria-label": "Edit trade",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-4" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "grid size-11 place-items-center text-mist hover:text-danger",
									onClick: () => {
										removePurchase(p.id);
										if (editing === p.id) reset();
									},
									"aria-label": "Delete trade",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
								})]
							})]
						}, p.id))
					})]
				})]
			})]
		})
	] });
}
function QuoteField({ ticker, price, onSave }) {
	const [editing, setEditing] = (0, import_react.useState)(false);
	const [value, setValue] = (0, import_react.useState)(price != null ? String(price) : "");
	(0, import_react.useEffect)(() => {
		setValue(price != null ? String(price) : "");
	}, [price]);
	if (!editing) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: "rounded-md px-2 py-1 text-paper hover:bg-panel-2",
		onClick: () => setEditing(true),
		children: price != null ? `K${price.toFixed(2)} / sh` : "Set price"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		className: "flex items-center gap-1",
		onSubmit: (e) => {
			e.preventDefault();
			const n = Number(value);
			if (!Number.isFinite(n) || n < 0) return;
			onSave(n);
			setEditing(false);
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			"aria-label": `Price for ${ticker}`,
			inputMode: "decimal",
			className: "h-9 w-24 tabular-nums",
			value,
			onChange: (e) => setValue(e.target.value),
			autoFocus: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			type: "submit",
			size: "sm",
			children: "Save"
		})]
	});
}
function ReminderWatch() {
	const reminderOn = useTracker((s) => s.reminderOn);
	const reminderTime = useTracker((s) => s.reminderTime);
	const lastReminderDate = useTracker((s) => s.lastReminderDate);
	const markReminded = useTracker((s) => s.markReminded);
	const stats = useTrackerStats();
	(0, import_react.useEffect)(() => {
		if (!reminderOn) return;
		const tick = () => {
			const today = todayISO();
			if (lastReminderDate === today) return;
			if (useTracker.getState().days.find((d) => d.date === today)?.deposit != null) return;
			if (lusakaHm() < reminderTime) return;
			markReminded(today);
			toast("Time to log today’s K10.", { duration: 8e3 });
			if (typeof Notification !== "undefined" && Notification.permission === "granted") try {
				new Notification("K10 Daily", {
					body: "You haven’t logged today’s deposit yet.",
					silent: true
				});
			} catch {}
		};
		tick();
		const id = window.setInterval(tick, 3e4);
		const onVis = () => {
			if (document.visibilityState === "visible") tick();
		};
		document.addEventListener("visibilitychange", onVis);
		return () => {
			window.clearInterval(id);
			document.removeEventListener("visibilitychange", onVis);
		};
	}, [
		reminderOn,
		reminderTime,
		lastReminderDate,
		markReminded,
		stats.daysLogged
	]);
	return null;
}
function StatStrip() {
	const s = useTrackerStats();
	const flameLevel = s.streak >= 8 ? 3 : s.streak >= 4 ? 2 : s.streak > 0 ? 1 : 0;
	const items = [
		{
			label: "Deposited",
			value: s.totalDeposited,
			kind: "money"
		},
		{
			label: "Interest",
			value: s.interest,
			kind: "money"
		},
		{
			label: "Patumba",
			value: s.cashBalance,
			kind: "money"
		},
		{
			label: "Avg / day",
			value: s.averageDeposit,
			kind: "money"
		},
		{
			label: "Streak",
			value: s.streak,
			kind: "streak"
		},
		{
			label: "Logged",
			value: s.daysLogged,
			kind: "count"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-3 lg:grid-cols-6",
		children: items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-panel px-4 py-4 sm:px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] tracking-[0.16em] text-mist uppercase",
				children: item.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mt-1.5 font-display text-2xl tracking-tight text-paper", item.kind === "streak" && "relative inline-flex items-center gap-2"),
				children: [item.kind === "money" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedNumber, {
					value: item.value,
					decimals: item.label === "Interest" ? 2 : 0
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "tabular-nums",
					children: item.value
				}), item.kind === "streak" && flameLevel > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "streak-glow",
					"data-level": flameLevel,
					"aria-hidden": "true"
				}) : null]
			})]
		}, item.label))
	});
}
function YearSnap() {
	const days = useTracker((s) => s.days);
	const months = monthsLoggedCount(days);
	const snaps = yearSnapshots(days);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "font-display text-2xl tracking-tight",
			children: "Yearly recap"
		}), months < 12 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-2 text-sm text-mist",
			children: [
				"Unlocks after 12 months of logging. ",
				months,
				" of 12 so far."
			]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-mist",
			children: "A quiet look back at each calendar year."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: snaps.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "rounded-lg bg-ink-2 p-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl text-paper",
						children: s.year
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-mist",
						children: [
							formatK(s.total, 0),
							" saved · ",
							s.daysWithDeposit,
							" deposit days"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-1 text-sm text-mist",
						children: [
							"Longest streak ",
							s.longestStreak,
							" days"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-sage-2",
						children: s.milestones.length ? `Marks hit: ${s.milestones.map((n) => formatK(n, 0)).join(", ")}` : "No LuSE marks this year"
					})
				]
			}, s.year))
		})] })]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HydrateGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrackerPage, {}) }) });
}
function TrackerPage() {
	const resetToSeed = useTracker((s) => s.resetToSeed);
	const section = useTracker((s) => s.section);
	const pending = useTracker((s) => s.pendingComplete);
	const theme = useTracker((s) => s.theme);
	(0, import_react.useEffect)(() => {
		const onKey = (e) => {
			if ((e.metaKey || e.ctrlKey) && e.key === "k") {
				e.preventDefault();
				if (section === "savings") document.getElementById("log-amount")?.focus();
				else document.getElementById("p-amount")?.focus();
			}
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [section]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AppShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReminderWatch, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
			theme: isLightTheme(theme) ? "light" : "dark",
			position: "top-center",
			toastOptions: { className: "!bg-panel-2 !text-paper !border-0 !shadow-[var(--shadow-border)]" }
		}),
		pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Celebration, {}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pane-enter",
			children: section === "portfolio" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortfolioPage, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SavingsPage, { resetToSeed })
		}, section)
	] });
}
function SavingsPage({ resetToSeed }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex justify-center pt-1",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CycleSettings, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,26rem)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroPanel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "lg:pt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DepositForm, {})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GrowthChart, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-6 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarHeat, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MilestoneTrack, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PastCycles, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CycleCompare, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearSnap, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LedgerTable, {})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
			className: "mt-10 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 pb-4 text-[12px] text-haze sm:flex-row sm:items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Savings and Portfolio stay on this device, independent of each other." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "sm",
				className: "h-8 text-haze",
				onClick: () => {
					if (window.confirm("Restore the original spreadsheet figures and clear trades?")) resetToSeed();
				},
				children: "Restore spreadsheet"
			})]
		})
	] });
}
//#endregion
export { Home as component };
