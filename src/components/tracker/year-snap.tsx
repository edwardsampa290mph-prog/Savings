import { useTracker } from "@/lib/store";
import { monthsLoggedCount, yearSnapshots } from "@/lib/tracker-data";
import { formatK } from "@/lib/utils";

export function YearSnap() {
  const days = useTracker((s) => s.days);
  const months = monthsLoggedCount(days);
  const snaps = yearSnapshots(days);

  return (
    <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
      <h2 className="font-display text-2xl tracking-tight">Yearly recap</h2>
      {months < 12 ? (
        <p className="mt-2 text-sm text-mist">
          Unlocks after 12 months of logging. {months} of 12 so far.
        </p>
      ) : (
        <>
          <p className="mt-1 text-sm text-mist">A quiet look back at each calendar year.</p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {snaps.map((s) => (
              <li key={s.year} className="rounded-lg bg-ink-2 p-4">
                <p className="font-display text-2xl text-paper">{s.year}</p>
                <p className="mt-2 text-sm text-mist">
                  {formatK(s.total, 0)} saved · {s.daysWithDeposit} deposit days
                </p>
                <p className="mt-1 text-sm text-mist">Longest streak {s.longestStreak} days</p>
                <p className="mt-1 text-sm text-sage-2">
                  {s.milestones.length
                    ? `Marks hit: ${s.milestones.map((n) => formatK(n, 0)).join(", ")}`
                    : "No LuSE marks this year"}
                </p>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
}
