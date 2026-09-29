const LAST_SEEN_KEY = "k10-last-seen";
export const LOCK_MS = 5 * 60 * 1000;

export async function hashPin(pin: string): Promise<string> {
  const data = new TextEncoder().encode(`k10-daily-pin:${pin}`);
  const buf = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join("");
}

export function touchLastSeen() {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(LAST_SEEN_KEY, String(Date.now()));
}

export function lastSeenAt(): number {
  if (typeof localStorage === "undefined") return 0;
  const n = Number(localStorage.getItem(LAST_SEEN_KEY) ?? 0);
  return Number.isFinite(n) ? n : 0;
}

export function shouldLock(pinHash: string | null): boolean {
  if (!pinHash) return false;
  const seen = lastSeenAt();
  if (!seen) return true;
  return Date.now() - seen > LOCK_MS;
}

export function lusakaHm(): string {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Lusaka",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date());
}
