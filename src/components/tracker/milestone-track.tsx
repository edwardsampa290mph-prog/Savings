import { useEffect, useState } from "react";
import { useTracker, useTrackerStats } from "@/lib/store";
import {
  dateReached,
  daysToAmount,
  MILESTONE_THRESHOLDS,
  nextMilestone,
} from "@/lib/tracker-data";
import { cn, formatDay, formatK } from "@/lib/utils";

export function MilestoneTrack() {
  const days = useTracker((s) => s.days);
  const notes = useTracker((s) => s.milestoneNotes);
  const setNote = useTracker((s) => s.setMilestoneNote);
  const stats = useTrackerStats();
  const upcoming = nextMilestone(stats.totalDeposited);
  const remaining = upcoming ? upcoming - stats.totalDeposited : 0;
  const daysOut = upcoming ? daysToAmount(remaining, stats.averageDeposit) : 0;

  return (
    <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl tracking-tight">LuSE marks</h2>
          <p className="mt-1 text-sm text-mist">
            When the running total crosses a mark, jot broker notes on that card. Trades themselves live in Portfolio.
          </p>
        </div>
        {upcoming ? (
          <div className="rounded-lg bg-ink-2 px-3 py-2 text-right">
            <p className="text-[11px] tracking-[0.16em] text-haze uppercase">Next mark</p>
            <p className="font-display text-xl tabular-nums text-paper">{formatK(upcoming, 0)}</p>
            <p className="text-[12px] text-mist">
              {formatK(remaining, 0)} to go
              {daysOut == null
                ? ""
                : daysOut === 0
                  ? " · due now"
                  : ` · ~${daysOut} day${daysOut === 1 ? "" : "s"} at ${formatK(stats.averageDeposit, 0)}/day`}
            </p>
          </div>
        ) : (
          <p className="text-sm text-sage-2">All listed marks reached.</p>
        )}
      </div>

      <ol className="mt-5 grid gap-3 sm:grid-cols-2">
        {MILESTONE_THRESHOLDS.map((threshold) => {
          const reached = dateReached(days, threshold);
          const isNext = threshold === upcoming;
          return (
            <MilestoneCard
              key={threshold}
              threshold={threshold}
              reached={reached}
              isNext={isNext}
              note={notes[threshold] ?? ""}
              onNote={(value) => setNote(threshold, value)}
            />
          );
        })}
      </ol>
    </section>
  );
}

function MilestoneCard({
  threshold,
  reached,
  isNext,
  note,
  onNote,
}: {
  threshold: number;
  reached: string | null;
  isNext: boolean;
  note: string;
  onNote: (value: string) => void;
}) {
  const [draft, setDraft] = useState(note);
  useEffect(() => setDraft(note), [note]);

  return (
    <li
      className={cn(
        "rounded-lg bg-ink-2 p-3",
        isNext && "shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-sage)_45%,transparent)]",
      )}
    >
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-display text-xl tabular-nums text-paper">{formatK(threshold, 0)}</p>
        <p className="text-[12px] text-mist">
          {reached ? `Hit ${formatDay(reached, "short")}` : isNext ? "Up next" : "Ahead"}
        </p>
      </div>
      <label className="mt-3 block">
        <span className="text-[11px] tracking-wide text-haze uppercase">Notes</span>
        <textarea
          value={draft}
          rows={2}
          placeholder="Broker fees, minimums, what you’ll buy…"
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => {
            if (draft !== note) onNote(draft);
          }}
          className="mt-1 w-full resize-none rounded-md bg-panel px-2.5 py-2 text-sm text-paper shadow-[var(--shadow-border)] placeholder:text-haze focus-visible:outline-none focus-visible:shadow-[0_0_0_1px_color-mix(in_srgb,var(--color-sage)_55%,transparent)]"
        />
      </label>
    </li>
  );
}
