import { useTracker } from "@/lib/store";
import { formatDay, formatK } from "@/lib/utils";

export function PastCycles() {
  const archive = useTracker((s) => s.archive);
  if (!archive.length) return null;

  return (
    <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
      <h2 className="font-display text-2xl tracking-tight">Past cycles</h2>
      <p className="mt-1 text-sm text-mist">Completed pots, oldest last.</p>
      <ol className="mt-4 space-y-2">
        {[...archive].reverse().map((c) => (
          <li
            key={c.id}
            className="flex flex-col gap-1 rounded-lg bg-ink-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="font-medium text-paper">
                Cycle {c.number}
                <span className="ml-2 text-sm font-normal text-mist">
                  {formatK(c.totalDeposited, 0)} of {formatK(c.targetAmount, 0)}
                </span>
              </p>
              <p className="text-[12px] text-haze">
                {formatDay(c.firstDeposit ?? c.startDate, "short")} →{" "}
                {formatDay(c.lastDeposit ?? c.completedAt, "short")} · {c.daysLogged} days
                logged
              </p>
            </div>
            <p className="text-sm tabular-nums text-sage-2">
              {c.interest ? `+${formatK(c.interest)} interest` : "Closed"}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
