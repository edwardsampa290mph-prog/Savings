import { AnimatedNumber } from "./animated-number";
import { useTrackerStats } from "@/lib/store";
import { cn } from "@/lib/utils";

export function StatStrip() {
  const s = useTrackerStats();
  const flameLevel = s.streak >= 8 ? 3 : s.streak >= 4 ? 2 : s.streak > 0 ? 1 : 0;

  const items = [
    { label: "Deposited", value: s.totalDeposited, kind: "money" as const },
    { label: "Interest", value: s.interest, kind: "money" as const },
    { label: "Patumba", value: s.cashBalance, kind: "money" as const },
    { label: "Avg / day", value: s.averageDeposit, kind: "money" as const },
    { label: "Streak", value: s.streak, kind: "streak" as const },
    { label: "Logged", value: s.daysLogged, kind: "count" as const },
  ];

  return (
    <section className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-line sm:grid-cols-3 lg:grid-cols-6">
      {items.map((item) => (
        <div key={item.label} className="bg-panel px-4 py-4 sm:px-5">
          <div className="text-[11px] tracking-[0.16em] text-mist uppercase">{item.label}</div>
          <div
            className={cn(
              "mt-1.5 font-display text-2xl tracking-tight text-paper",
              item.kind === "streak" && "relative inline-flex items-center gap-2",
            )}
          >
            {item.kind === "money" ? (
              <AnimatedNumber value={item.value} decimals={item.label === "Interest" ? 2 : 0} />
            ) : (
              <span className="tabular-nums">{item.value}</span>
            )}
            {item.kind === "streak" && flameLevel > 0 ? (
              <span className="streak-glow" data-level={flameLevel} aria-hidden="true" />
            ) : null}
          </div>
        </div>
      ))}
    </section>
  );
}
