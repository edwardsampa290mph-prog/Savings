import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTracker, useTrackerStats } from "@/lib/store";
import { playFeedback } from "@/lib/feedback";
import { formatDay, formatK, todayISO } from "@/lib/utils";
import { Check, Minus, Plus } from "lucide-react";

export function DepositForm() {
  const days = useTracker((s) => s.days);
  const selectedDate = useTracker((s) => s.selectedDate);
  const setSelectedDate = useTracker((s) => s.setSelectedDate);
  const logDeposit = useTracker((s) => s.logDeposit);
  const cycle = useTracker((s) => s.cycle);
  const theme = useTracker((s) => s.theme);
  const soundOn = useTracker((s) => s.soundOn);
  const stats = useTrackerStats();
  const today = stats.today;

  const entry = useMemo(
    () => days.find((d) => d.date === selectedDate),
    [days, selectedDate],
  );

  const [deposit, setDeposit] = useState("10");
  const [bank, setBank] = useState("");
  const [notes, setNotes] = useState("");
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    if (!entry) return;
    setDeposit(entry.deposit == null ? "10" : String(entry.deposit));
    setBank(entry.bankBalance == null ? "" : String(entry.bankBalance));
    setNotes(entry.notes);
    setJustSaved(false);
  }, [entry]);

  const isFuture = selectedDate > today;
  const isToday = selectedDate === today;
  const alreadyLogged = entry?.deposit != null;

  function nudge(delta: number) {
    const next = Math.max(0, (Number(deposit) || 0) + delta);
    setDeposit(String(next));
  }

  function submit(event: React.FormEvent) {
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
      notes: notes.trim(),
    });
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 1400);
    if (soundOn) {
      const kind = completed ? "cycle" : crossed.length ? "milestone" : "deposit";
      playFeedback(kind, theme);
    }
    if (amount > 0) {
      toast.success(`Logged ${formatK(amount, 0)} on ${formatDay(selectedDate, "short")}`);
    } else {
      toast("Marked as a rest day.");
    }
    if (crossed.length) {
      toast(`Crossed ${crossed.map((t) => formatK(t, 0)).join(", ")}.`, { duration: 4500 });
    }
    if (completed) {
      toast("Goal reached.");
    }
  }

  return (
    <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl tracking-tight text-paper">
            {isToday ? "Today’s deposit" : formatDay(selectedDate, "short")}
          </h2>
          <p className="mt-1 text-sm text-mist">
            {alreadyLogged
              ? "Edit the row — cumulative and interest recalculate live."
              : "Log the real amount. Leave bank blank if the Patumba SMS isn’t in yet."}
          </p>
        </div>
        {alreadyLogged ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-sage-dim px-2.5 py-1 text-[11px] font-medium text-sage-2">
            <Check className="size-3" /> Logged
          </span>
        ) : null}
      </div>

      <form onSubmit={submit} className="mt-5 grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="log-date">Date</Label>
          <Input
            id="log-date"
            type="date"
            min={cycle.startDate}
            max={todayISO()}
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="log-amount">Deposit (K)</Label>
          <div className="flex gap-2">
            <Button type="button" variant="secondary" size="icon" onClick={() => nudge(-1)} aria-label="Decrease">
              <Minus />
            </Button>
            <Input
              id="log-amount"
              inputMode="decimal"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              className="text-center font-medium tabular-nums"
            />
            <Button type="button" variant="secondary" size="icon" onClick={() => nudge(1)} aria-label="Increase">
              <Plus />
            </Button>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {[0, 10, 15, 20, 25].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setDeposit(String(n))}
                className="h-8 rounded-full px-3 text-[12px] text-mist shadow-[var(--shadow-border)] transition-[background-color,color] duration-150 hover:bg-panel-2 hover:text-paper"
              >
                {n === 0 ? "Skip" : `K${n}`}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="log-bank">Bank balance from SMS (optional)</Label>
          <Input
            id="log-bank"
            inputMode="decimal"
            placeholder="e.g. 542.48"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="tabular-nums"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="log-notes">Note (optional)</Label>
          <Input
            id="log-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Why you skipped, or what pushed a bigger day"
          />
        </div>

        <Button type="submit" size="lg" disabled={isFuture} className="w-full">
          {justSaved ? "Saved" : alreadyLogged ? "Update entry" : isFuture ? "Future day" : "Record deposit"}
        </Button>
        <p className="text-[12px] text-haze">
          Cycle {cycle.number} runs until {formatDay(cycle.endDate, "short")}. Don’t fill future days.
        </p>
      </form>
    </section>
  );
}
