import { useMemo, useState } from "react";
import { useTracker, useTrackerStats } from "@/lib/store";
import { withViews } from "@/lib/tracker-data";
import { cn, formatDay, formatK } from "@/lib/utils";
import { Button } from "@/components/ui/button";

type Filter = "recent" | "logged" | "gaps";

export function LedgerTable() {
  const days = useTracker((s) => s.days);
  const selectedDate = useTracker((s) => s.selectedDate);
  const setSelectedDate = useTracker((s) => s.setSelectedDate);
  const stats = useTrackerStats();
  const [filter, setFilter] = useState<Filter>("recent");

  const views = useMemo(() => withViews(days), [days]);

  const rows = useMemo(() => {
    const elapsed = views.filter((d) => d.date <= stats.today);
    if (filter === "logged") return [...elapsed].filter((d) => d.deposit != null).reverse();
    if (filter === "gaps")
      return [...elapsed].filter((d) => d.deposit == null || d.deposit === 0).reverse();
    return [...elapsed].slice(-14).reverse();
  }, [views, stats.today, filter]);

  return (
    <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl tracking-tight">Ledger</h2>
          <p className="mt-1 text-sm text-mist">The daily book. Select a row to edit it in the log.</p>
        </div>
        <div className="flex gap-1 rounded-full bg-ink-2 p-1">
          {(
            [
              ["recent", "Recent"],
              ["logged", "Logged"],
              ["gaps", "Gaps"],
            ] as const
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => setFilter(id)}
              className={cn(
                "h-8 rounded-full px-3 text-[12px] font-medium transition-[background-color,color] duration-150",
                filter === id ? "bg-panel text-paper" : "text-mist hover:text-paper",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[36rem] text-left text-sm">
          <thead className="text-[11px] tracking-[0.14em] text-haze uppercase">
            <tr className="border-b border-line">
              <th className="py-2 pr-3 font-medium">Date</th>
              <th className="py-2 pr-3 font-medium">Deposit</th>
              <th className="py-2 pr-3 font-medium">Cumulative</th>
              <th className="py-2 pr-3 font-medium">Bank</th>
              <th className="py-2 pr-3 font-medium">Interest</th>
              <th className="py-2 font-medium">Notes</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-mist">
                  Nothing in this view.
                </td>
              </tr>
            ) : (
              rows.map((row) => {
                const selected = row.date === selectedDate;
                return (
                  <tr
                    key={row.date}
                    onClick={() => setSelectedDate(row.date)}
                    className={cn(
                      "cursor-pointer border-b border-line/70 transition-colors duration-150",
                      selected ? "bg-sage-dim/50" : "hover:bg-panel-2",
                    )}
                  >
                    <td className="py-2.5 pr-3 whitespace-nowrap text-paper">
                      {formatDay(row.date, "short")}
                    </td>
                    <td className="py-2.5 pr-3 tabular-nums">
                      {row.deposit == null ? (
                        <span className="text-haze">—</span>
                      ) : (
                        formatK(row.deposit, row.deposit % 1 ? 2 : 0)
                      )}
                    </td>
                    <td className="py-2.5 pr-3 tabular-nums text-mist">{formatK(row.cumulative, 0)}</td>
                    <td className="py-2.5 pr-3 tabular-nums">
                      {row.bankBalance == null ? (
                        <span className="text-haze">—</span>
                      ) : (
                        formatK(row.bankBalance)
                      )}
                    </td>
                    <td className="py-2.5 pr-3 tabular-nums text-sage-2">
                      {row.interest == null ? (
                        <span className="text-haze">—</span>
                      ) : (
                        formatK(row.interest)
                      )}
                    </td>
                    <td className="max-w-[16rem] py-2.5 text-mist">
                      {row.notes ? (
                        <span className="line-clamp-2" title={row.notes}>
                          {row.notes}
                        </span>
                      ) : (
                        <span className="text-haze">—</span>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
      {filter === "recent" ? (
        <div className="mt-3">
          <Button variant="ghost" size="sm" onClick={() => setFilter("logged")}>
            Show every logged day
          </Button>
        </div>
      ) : null}
    </section>
  );
}
