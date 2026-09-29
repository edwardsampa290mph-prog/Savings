import type { ThemeId } from "./theme";

const MOOD: Record<ThemeId, { root: number; wave: OscillatorType }> = {
  gold: { root: 392, wave: "triangle" },
  purple: { root: 349.23, wave: "sine" },
  turquoise: { root: 440, wave: "triangle" },
  red: { root: 329.63, wave: "sine" },
};

let ctx: AudioContext | null = null;

function audio(): AudioContext | null {
  if (typeof window === "undefined") return null;
  const Ctor =
    window.AudioContext ||
    (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  if (!ctx) ctx = new Ctor();
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function voice(
  a: AudioContext,
  freq: number,
  start: number,
  duration: number,
  volume: number,
  type: OscillatorType,
) {
  const osc = a.createOscillator();
  const filter = a.createBiquadFilter();
  const gain = a.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(Math.min(2400, freq * 4.2), start);
  filter.Q.setValueAtTime(0.7, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.018);
  gain.gain.exponentialRampToValueAtTime(volume * 0.55, start + duration * 0.45);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(a.destination);
  osc.start(start);
  osc.stop(start + duration + 0.04);
}

export function playFeedback(kind: "deposit" | "milestone" | "cycle", theme: ThemeId) {
  try {
    const a = audio();
    if (!a) return;
    const now = a.currentTime;
    const mood = MOOD[theme] ?? MOOD.gold;
    const r = mood.root;
    if (kind === "cycle") {
      voice(a, r, now, 0.42, 0.038, mood.wave);
      voice(a, r * 1.25, now + 0.06, 0.48, 0.032, "sine");
      voice(a, r * 1.5, now + 0.14, 0.62, 0.028, "triangle");
      navigator.vibrate?.([12, 40, 18, 50, 24]);
      return;
    }
    if (kind === "milestone") {
      voice(a, r, now, 0.16, 0.036, mood.wave);
      voice(a, r * 1.25, now + 0.09, 0.18, 0.032, "sine");
      voice(a, r * 1.5, now + 0.2, 0.28, 0.03, "triangle");
      navigator.vibrate?.([10, 28, 16]);
      return;
    }
    voice(a, r * 1.5, now, 0.14, 0.03, mood.wave);
    voice(a, r * 2, now + 0.07, 0.18, 0.022, "sine");
    navigator.vibrate?.(10);
  } catch {
    // Audio can fail if the browser blocks it; logging still works.
  }
}
