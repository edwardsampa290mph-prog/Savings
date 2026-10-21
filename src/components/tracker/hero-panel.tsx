import { useEffect, useMemo, useState } from "react";
import { AnimatedNumber } from "./animated-number";
import { ProgressRing } from "./progress-ring";
import { useTracker, useTrackerStats } from "@/lib/store";
import { daysToAmount, nextMilestone } from "@/lib/tracker-data";
import { formatK, formatDay } from "@/lib/utils";

export function HeroPanel() {
  const stats = useTrackerStats();
  const burstId = useTracker((s) => s.burstId);
  const thousandBurst = useTracker((s) => s.thousandBurst);
  const cycle = useTracker((s) => s.cycle);
  const [ringSize, setRingSize] = useState(220);

  useEffect(() => {
    const apply = () => setRingSize(window.innerWidth < 640 ? 208 : 248);
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  const pct = Math.round(Math.min(1, stats.progress) * 1000) / 10;
  const upcoming = nextMilestone(stats.totalDeposited);
  const toMark = upcoming ? upcoming - stats.totalDeposited : 0;
  const daysOut = upcoming ? daysToAmount(toMark, stats.averageDeposit) : null;
  const paceLabel =
    stats.paceDelta > 0
      ? `${formatK(stats.paceDelta, 0)} ahead of ${formatK(cycle.dailyTarget, 0)}/day`
      : stats.paceDelta < 0
        ? `${formatK(Math.abs(stats.paceDelta), 0)} behind ${formatK(cycle.dailyTarget, 0)}/day`
        : `Exactly on the ${formatK(cycle.dailyTarget, 0)}/day pace`;

  return (
    <section className="stagger-in flex flex-col items-center pt-4 pb-2 sm:pt-6">
      <p className="text-[13px] tracking-[0.22em] text-mist uppercase">
        Cycle {cycle.number} · running total
      </p>
      <div className="relative mt-4">
        <AmbientHalo />
        <ProgressRing progress={stats.progress} burst={burstId} className="relative z-[1]" size={ringSize}>
          <AnimatedNumber
            value={stats.totalDeposited}
            duration={900}
            className="font-display text-[2.75rem] leading-none tracking-tight text-paper sm:text-5xl"
          />
          <span className="mt-2 max-w-[11rem] text-[12px] leading-snug text-mist">
            {pct}% of {formatK(stats.planTarget, 0)}
          </span>
        </ProgressRing>
        {thousandBurst ? <ThousandBurst key={thousandBurst.id} mark={thousandBurst.mark} /> : null}
      </div>
      <p className="mt-3 max-w-sm text-center text-sm text-paper/80">{paceLabel}</p>
      <p className="mt-1 text-[12px] text-haze">
        Target {formatDay(cycle.endDate, "short")} · {stats.daysRemaining} days left
      </p>
      {upcoming && daysOut != null ? (
        <p className="mt-1 text-[12px] text-sage-2">
          {formatK(upcoming, 0)} in ~{daysOut} day{daysOut === 1 ? "" : "s"} at this pace
        </p>
      ) : null}
    </section>
  );
}

function AmbientHalo() {
  const specks = useMemo(
    () =>
      Array.from({ length: 9 }, (_, i) => ({
        left: 18 + ((i * 37) % 64),
        top: 16 + ((i * 23) % 62),
        delay: (i * 0.7) % 6,
        duration: 8 + (i % 4),
      })),
    [],
  );
  return (
    <div className="ambient-halo" aria-hidden="true">
      <span className="ambient-orb a" />
      <span className="ambient-orb b" />
      {specks.map((s, i) => (
        <span
          key={i}
          className="ambient-speck"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}
    </div>
  );
}

function ThousandBurst({ mark }: { mark: number }) {
  return (
    <div className="k-burst" aria-hidden="true">
      <span className="k-burst-wave" />
      <span className="k-burst-wave delay" />
      <span className="k-burst-label">{formatK(mark, 0)}</span>
    </div>
  );
}
