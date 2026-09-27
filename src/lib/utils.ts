import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function todayISO(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Africa/Lusaka",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function formatK(value: number, decimals = 2): string {
  const abs = Math.abs(value);
  const formatted = abs.toLocaleString("en-ZM", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `${value < 0 ? "−" : ""}K${formatted}`;
}

export function formatKCompact(value: number): string {
  if (Math.abs(value) >= 1000) {
    const k = value / 1000;
    const digits = k >= 10 ? 0 : 1;
    return `K${k.toFixed(digits)}k`;
  }
  return formatK(value, value % 1 === 0 ? 0 : 2);
}

export function formatDay(iso: string, style: "full" | "short" | "month" = "full"): string {
  const d = parseISODate(iso);
  if (style === "short") {
    return new Intl.DateTimeFormat("en-GB", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(d);
  }
  if (style === "month") {
    return new Intl.DateTimeFormat("en-GB", {
      month: "long",
      year: "numeric",
    }).format(d);
  }
  return new Intl.DateTimeFormat("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}

export function parseISODate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function toISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function addDaysISO(iso: string, days: number): string {
  const d = parseISODate(iso);
  d.setDate(d.getDate() + days);
  return toISODate(d);
}

export function diffDays(fromISO: string, toISO: string): number {
  const a = parseISODate(fromISO);
  const b = parseISODate(toISO);
  return Math.round((b.getTime() - a.getTime()) / 86_400_000);
}

export function clamp(n: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, n));
}

export function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

export function lusakaNow(): { time: string; weekday: string; date: string } {
  const now = new Date();
  return {
    time: new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lusaka",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(now),
    weekday: new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lusaka",
      weekday: "short",
    }).format(now),
    date: new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lusaka",
      day: "numeric",
      month: "short",
    }).format(now),
  };
}
