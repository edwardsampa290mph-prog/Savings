import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTracker } from "@/lib/store";
import { addYearsISO, DAILY_TARGET } from "@/lib/tracker-data";
import { diffDays, formatDay, formatK, todayISO } from "@/lib/utils";

export function Celebration() {
  const pending = useTracker((s) => s.pendingComplete);
  const startNextCycle = useTracker((s) => s.startNextCycle);
  const today = todayISO();
  const [target, setTarget] = useState(() => String(pending?.targetAmount ?? 7000));
  const [endDate, setEndDate] = useState(() => addYearsISO(today, 1));
  const [daily, setDaily] = useState(String(DAILY_TARGET));

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
      dailyTarget: Number.isFinite(perDay) && perDay > 0 ? perDay : DAILY_TARGET,
    });
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <div className="absolute inset-0 bg-ink/80" />
      <Confetti />
      <div className="relative z-10 m-4 w-full max-w-md rounded-xl bg-panel p-6 shadow-[var(--shadow-border)]">
        <p className="text-[12px] tracking-[0.2em] text-sage-2 uppercase">Cycle {pending.number} complete</p>
        <h2 className="mt-2 font-display text-3xl tracking-tight text-paper">Goal reached</h2>
        <p className="mt-2 text-sm text-mist">
          {formatDay(pending.firstDeposit ?? pending.startDate, "short")} →{" "}
          {formatDay(pending.lastDeposit ?? pending.completedAt, "short")}
        </p>
        <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <Stat label="Deposited" value={formatK(pending.totalDeposited, 0)} />
          <Stat label="Patumba" value={formatK(pending.cashBalance)} />
          <Stat label="Interest" value={formatK(pending.interest)} />
          <Stat label="Days logged" value={String(pending.daysLogged)} />
        </dl>

        <div className="mt-6 grid gap-3 border-t border-line pt-5">
          <p className="text-sm text-paper">Start cycle {pending.number + 1}</p>
          <div className="grid gap-2">
            <Label htmlFor="next-target">New target (K)</Label>
            <Input
              id="next-target"
              inputMode="decimal"
              className="tabular-nums"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="next-end">End date</Label>
              <Input
                id="next-end"
                type="date"
                min={today}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="next-daily">Daily pace (K)</Label>
              <Input
                id="next-daily"
                inputMode="decimal"
                className="tabular-nums"
                value={daily}
                onChange={(e) => setDaily(e.target.value)}
              />
            </div>
          </div>
          <p className="text-[12px] text-haze">
            {span} days · about {formatK(implied, 0)}/day to hit the target.
          </p>
          <Button size="lg" className="w-full" onClick={start} id="start-next-cycle">
            Archive and start cycle {pending.number + 1}
          </Button>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-ink-2 px-3 py-2">
      <dt className="text-[11px] tracking-wide text-haze uppercase">{label}</dt>
      <dd className="mt-0.5 font-display text-xl tabular-nums text-paper">{value}</dd>
    </div>
  );
}

function Confetti() {
  const bits = useMemo(
    () =>
      Array.from({ length: 42 }, (_, i) => ({
        left: (i * 97) % 100,
        delay: ((i * 37) % 80) / 100,
        duration: 1.6 + ((i * 13) % 10) / 10,
        size: 5 + (i % 4),
        tone: i % 3,
      })),
    [],
  );
  return (
    <div className="confetti-layer pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {bits.map((b, i) => (
        <span
          key={i}
          className={
            b.tone === 0 ? "bg-sage" : b.tone === 1 ? "bg-paper" : "bg-sage-2"
          }
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size * 0.45,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
