import type { ThemeId } from "./theme";

const PITCH: Record<ThemeId, number> = {
  gold: 528,
  purple: 620,
  turquoise: 494,
  red: 440,
};

let ctx: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!ctx) ctx = new Ctor();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function tone(frequency: number, start: number, duration: number, volume: number) {
  const a = audio();
  if (!a) return;
  const osc = a.createOscillator();
  const gain = a.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.016);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(gain);
  gain.connect(a.destination);
  osc.start(start);
  osc.stop(start + duration + 0.02);
}

export function playFeedback(kind: "deposit" | "milestone", theme: ThemeId) {
  try {
    const a = audio();
    if (!a) return;
    const now = a.currentTime;
    const base = PITCH[theme] ?? 528;
    if (kind === "milestone") {
      tone(base, now, 0.16, 0.045);
      tone(base * 1.26, now + 0.1, 0.2, 0.04);
      navigator.vibrate?.([10, 28, 16]);
    } else {
      tone(base, now, 0.12, 0.04);
      navigator.vibrate?.(8);
    }
  } catch {
    // Audio can fail if the browser blocks it; logging still works.
  }
}
