import { useTracker, useTrackerStats } from "@/lib/store";
import { formatK } from "@/lib/utils";

export function CycleCompare() {
  const archive = useTracker((s) => s.archive);
  const stats = useTrackerStats();
  const cycle = useTracker((s) => s.cycle);
  if (!archive.length) return null;

  const rows = [
    ...archive.map((c) => ({
      id: c.id,
      label: `Cycle ${c.number}`,
      total: c.totalDeposited,
      days: c.daysLogged,
      average: c.averageDeposit ?? (c.daysLogged ? c.totalDeposited / c.daysLogged : 0),
      streak: c.longestStreak ?? c.streak ?? 0,
    })),
    {
      id: cycle.id,
      label: `Cycle ${cycle.number} · now`,
      total: stats.totalDeposited,
      days: stats.daysLogged,
      average: stats.averageDeposit,
      streak: stats.longestStreak,
    },
  ];

  return (
    <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
      <h2 className="font-display text-2xl tracking-tight">Cycle compare</h2>
      <p className="mt-1 text-sm text-mist">How this pot sits against closed ones.</p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[28rem] text-left text-sm">
          <thead className="text-[11px] tracking-[0.14em] text-haze uppercase">
            <tr className="border-b border-line">
              <th className="py-2 pr-3 font-medium">Cycle</th>
              <th className="py-2 pr-3 font-medium">Total</th>
              <th className="py-2 pr-3 font-medium">Days</th>
              <th className="py-2 pr-3 font-medium">Avg / day</th>
              <th className="py-2 font-medium">Best streak</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-b border-line/70">
                <td className="py-2.5 pr-3 text-paper">{r.label}</td>
                <td className="py-2.5 pr-3 tabular-nums">{formatK(r.total, 0)}</td>
                <td className="py-2.5 pr-3 tabular-nums">{r.days}</td>
                <td className="py-2.5 pr-3 tabular-nums">{formatK(r.average, 0)}</td>
                <td className="py-2.5 tabular-nums">{r.streak}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
