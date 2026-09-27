import { useEffect, useState } from "react";
import { Delete } from "lucide-react";
import { useTracker } from "@/lib/store";
import { shouldLock, touchLastSeen } from "@/lib/pin";
import { cn } from "@/lib/utils";

type Mode = "setup" | "confirm" | "unlock" | "open";

export function PinGate({ children }: { children: React.ReactNode }) {
  const hydrated = useTracker((s) => s.hydrated);
  const pinHash = useTracker((s) => s.pinHash);
  const pinSkipped = useTracker((s) => s.pinSkipped);
  const setPin = useTracker((s) => s.setPin);
  const skipPin = useTracker((s) => s.skipPin);
  const checkPin = useTracker((s) => s.checkPin);
  const clearPin = useTracker((s) => s.clearPin);
  const [mode, setMode] = useState<Mode>("open");
  const [ready, setReady] = useState(false);
  const [draft, setDraft] = useState("");
  const [pending, setPending] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!hydrated) return;
    if (!pinHash) {
      setMode(pinSkipped ? "open" : "setup");
      setReady(true);
      return;
    }
    setMode(shouldLock(pinHash) ? "unlock" : "open");
    if (!shouldLock(pinHash)) touchLastSeen();
    setReady(true);
  }, [hydrated, pinHash, pinSkipped]);

  useEffect(() => {
    if (mode !== "open") return;
    touchLastSeen();
    const beat = window.setInterval(touchLastSeen, 15_000);
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
      } else {
        touchLastSeen();
      }
    };
    window.addEventListener("pagehide", touchLastSeen);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.clearInterval(beat);
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("pagehide", touchLastSeen);
    };
  }, [mode]);

  function press(digit: string) {
    if (busy || draft.length >= 4) return;
    const next = draft + digit;
    setDraft(next);
    setError("");
    if (next.length === 4) void submit(next);
  }

  function backspace() {
    setDraft((d) => d.slice(0, -1));
    setError("");
  }

  async function submit(pin: string) {
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
      const ok = await checkPin(pin);
      if (!ok) {
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

  if (!hydrated || !ready) {
    return <div className="min-h-dvh bg-ink" />;
  }
  if (mode === "open") return children;

  const title =
    mode === "setup" ? "Set a 4-digit PIN" : mode === "confirm" ? "Confirm PIN" : "Enter PIN";
  const copy =
    mode === "setup"
      ? "This stays on this device. You’ll need it after 5 minutes away."
      : mode === "confirm"
        ? "Enter the same PIN once more."
        : "Locked after time away. Savings never leave this device.";

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-ink sm:items-center">
      <div className="w-full max-w-sm px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-10 sm:pb-8">
        <p className="font-display text-3xl tracking-tight text-paper">{title}</p>
        <p className="mt-2 text-sm text-mist">{copy}</p>
        <div className="mt-8 flex justify-center gap-3">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={cn("size-3 rounded-full", i < draft.length ? "bg-sage" : "bg-line-strong")}
            />
          ))}
        </div>
        {error ? <p className="mt-3 text-center text-sm text-danger">{error}</p> : <p className="mt-3 h-5" />}
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9"].map((d) => (
            <button
              key={d}
              type="button"
              className="grid h-14 place-items-center rounded-lg bg-panel text-lg font-medium text-paper hover:bg-panel-2"
              onClick={() => press(d)}
            >
              {d}
            </button>
          ))}
          <button
            type="button"
            className="grid h-14 place-items-center rounded-lg text-mist hover:bg-panel-2 hover:text-paper"
            onClick={backspace}
            aria-label="Delete"
          >
            <Delete className="size-5" />
          </button>
          <button
            type="button"
            className="grid h-14 place-items-center rounded-lg bg-panel text-lg font-medium text-paper hover:bg-panel-2"
            onClick={() => press("0")}
          >
            0
          </button>
          <span />
        </div>
        {mode === "setup" ? (
          <button
            type="button"
            className="mt-6 h-11 w-full text-sm text-mist hover:text-paper"
            onClick={() => {
              skipPin();
              setMode("open");
            }}
          >
            Skip for now
          </button>
        ) : mode === "unlock" ? (
          <button
            type="button"
            className="mt-6 h-11 w-full text-sm text-mist hover:text-paper"
            onClick={() => {
              if (window.confirm("Remove the PIN on this device? Your savings stay.")) {
                clearPin();
                setMode("open");
              }
            }}
          >
            Forgot PIN
          </button>
        ) : (
          <button
            type="button"
            className="mt-6 h-11 w-full text-sm text-mist hover:text-paper"
            onClick={() => {
              setDraft("");
              setPending("");
              setMode("setup");
            }}
          >
            Start over
          </button>
        )}
      </div>
    </div>
  );
}
