import { useEffect, useRef, useState } from "react";
import { Bell, BellOff, Check, Download, KeyRound, Settings2, Upload, Volume2, VolumeX } from "lucide-react";
import { toast } from "sonner";
import { useTracker } from "@/lib/store";
import { playFeedback } from "@/lib/feedback";
import { THEMES } from "@/lib/theme";
import { cn, todayISO } from "@/lib/utils";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ThemeMenu() {
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
  const [open, setOpen] = useState(false);
  const [pinOpen, setPinOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: MouseEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
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

  function onFile(event: React.ChangeEvent<HTMLInputElement>) {
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
    if (next && typeof Notification !== "undefined" && Notification.permission === "default") {
      try {
        await Notification.requestPermission();
      } catch {
        /* permission prompt can fail in previews */
      }
    }
    setReminder(next);
    toast(
      next
        ? `I’ll nudge you at ${reminderTime} CAT if today isn’t logged — while this page is open.`
        : "Daily reminder off.",
    );
  }

  return (
    <div className="relative" ref={root}>
      <button
        type="button"
        className="grid size-11 place-items-center rounded-full text-mist transition-colors duration-150 hover:bg-panel-2 hover:text-paper"
        aria-label="Settings"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        id="theme-menu"
      >
        <Settings2 className="size-4" />
      </button>
      {open ? (
        <div
          role="menu"
          aria-label="Settings"
          className="absolute right-0 z-50 mt-1 max-h-[min(36rem,calc(100dvh-5.5rem))] w-[min(18.5rem,calc(100vw-1.5rem))] overflow-y-auto rounded-xl bg-panel p-1.5 shadow-[var(--shadow-border)]"
        >
          <p className="px-2.5 pt-1.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase">Theme</p>
          {THEMES.map((item) => {
            const active = theme === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                className={cn(
                  "flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm transition-colors duration-150",
                  active ? "bg-panel-2 text-paper" : "text-mist hover:bg-panel-2 hover:text-paper",
                )}
                onClick={() => setTheme(item.id)}
              >
                <span
                  className="flex size-6 overflow-hidden rounded-full shadow-[var(--shadow-border)]"
                  aria-hidden="true"
                >
                  <span className="h-full w-1/2" style={{ background: item.swatch[0] }} />
                  <span className="h-full w-1/2" style={{ background: item.swatch[1] }} />
                </span>
                <span className="flex-1 text-left">{item.label}</span>
                {active ? <Check className="size-3.5 text-sage" /> : null}
              </button>
            );
          })}

          <div className="my-1.5 h-px bg-line" />
          <p className="px-2.5 pt-0.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase">Lock</p>
          <button
            type="button"
            className="flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2"
            onClick={() => {
              setOpen(false);
              setPinOpen(true);
            }}
          >
            <KeyRound className="size-4 text-sage" />
            {pinHash ? "Change PIN" : "Set PIN"}
          </button>
          {pinHash ? (
            <button
              type="button"
              className="flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2"
              onClick={() => {
                if (window.confirm("Remove the PIN on this device?")) {
                  clearPin();
                  toast("PIN removed.");
                }
              }}
            >
              <KeyRound className="size-4 text-mist" />
              Remove PIN
            </button>
          ) : null}

          <div className="my-1.5 h-px bg-line" />
          <p className="px-2.5 pt-0.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase">Sound</p>
          <button
            type="button"
            role="menuitemcheckbox"
            aria-checked={soundOn}
            className="flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2"
            onClick={() => {
              const next = !soundOn;
              setSoundOn(next);
              if (next) playFeedback("deposit", theme);
            }}
          >
            {soundOn ? <Volume2 className="size-4 text-sage" /> : <VolumeX className="size-4 text-mist" />}
            <span className="flex-1 text-left">{soundOn ? "Deposit sounds on" : "Deposit sounds off"}</span>
          </button>

          <div className="my-1.5 h-px bg-line" />
          <p className="px-2.5 pt-0.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase">Reminder</p>
          <button
            type="button"
            role="menuitemcheckbox"
            aria-checked={reminderOn}
            className="flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2"
            onClick={() => void toggleReminder()}
          >
            {reminderOn ? <Bell className="size-4 text-sage" /> : <BellOff className="size-4 text-mist" />}
            <span className="flex-1 text-left">{reminderOn ? "Daily nudge on" : "Daily nudge off"}</span>
          </button>
          <label className="flex min-h-11 items-center gap-3 px-2.5 text-sm text-paper">
            <span className="flex-1 text-mist">Time (CAT)</span>
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminder(reminderOn, e.target.value || "20:00")}
              className="h-9 rounded-md bg-ink-2 px-2 text-sm tabular-nums text-paper shadow-[var(--shadow-border)]"
            />
          </label>

          <div className="my-1.5 h-px bg-line" />
          <p className="px-2.5 pt-0.5 pb-1 text-[11px] tracking-[0.16em] text-haze uppercase">Backup</p>
          <button
            type="button"
            id="export-data"
            className="flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2"
            onClick={download}
          >
            <Download className="size-4 text-sage" />
            Export my data
          </button>
          <button
            type="button"
            className="flex min-h-11 w-full items-center gap-3 rounded-lg px-2.5 text-sm text-paper hover:bg-panel-2"
            onClick={() => fileRef.current?.click()}
          >
            <Upload className="size-4 text-sage" />
            Restore from file
          </button>
          <input
            ref={fileRef}
            type="file"
            accept="application/json,.json"
            className="hidden"
            onChange={onFile}
          />
        </div>
      ) : null}

      <PinDialog
        open={pinOpen}
        onOpenChange={setPinOpen}
        hasPin={Boolean(pinHash)}
        setPin={setPin}
        checkPin={checkPin}
      />
    </div>
  );
}

function PinDialog({
  open,
  onOpenChange,
  hasPin,
  setPin,
  checkPin,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  hasPin: boolean;
  setPin: (pin: string) => Promise<void>;
  checkPin: (pin: string) => Promise<boolean>;
}) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [again, setAgain] = useState("");

  useEffect(() => {
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
    if (hasPin && !(await checkPin(current))) {
      toast.error("Current PIN is wrong.");
      return;
    }
    await setPin(next);
    toast.success("PIN saved.");
    onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{hasPin ? "Change PIN" : "Set PIN"}</DialogTitle>
          <DialogDescription>Four digits, stored only on this device. Lock kicks in after 5 minutes away.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-3">
          {hasPin ? (
            <div className="grid gap-2">
              <Label htmlFor="pin-current">Current PIN</Label>
              <Input
                id="pin-current"
                inputMode="numeric"
                maxLength={4}
                value={current}
                onChange={(e) => setCurrent(e.target.value.replace(/\D/g, "").slice(0, 4))}
                className="tabular-nums tracking-[0.4em]"
              />
            </div>
          ) : null}
          <div className="grid gap-2">
            <Label htmlFor="pin-new">New PIN</Label>
            <Input
              id="pin-new"
              inputMode="numeric"
              maxLength={4}
              value={next}
              onChange={(e) => setNext(e.target.value.replace(/\D/g, "").slice(0, 4))}
              className="tabular-nums tracking-[0.4em]"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="pin-again">Confirm</Label>
            <Input
              id="pin-again"
              inputMode="numeric"
              maxLength={4}
              value={again}
              onChange={(e) => setAgain(e.target.value.replace(/\D/g, "").slice(0, 4))}
              className="tabular-nums tracking-[0.4em]"
            />
          </div>
          <Button type="button" onClick={() => void save()}>
            Save PIN
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
