import { useEffect, useMemo, useState } from "react";
import { useTracker, useTrackerStats } from "@/lib/store";
import { monthKey, weekdayIndex, withViews } from "@/lib/tracker-data";
import { cn, formatDay, formatK, parseISODate } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const WEEKDAYS = ["S", "M", "T", "W", "T", "F", "S"];

function intensity(deposit: number | null): string {
  if (deposit == null) return "bg-transparent shadow-[inset_0_0_0_1px_var(--cell-stroke)]";
  if (deposit === 0) return "bg-panel-2";
  if (deposit < 10) return "bg-sage/30";
  if (deposit === 10) return "bg-sage/55";
  if (deposit < 20) return "bg-sage/80";
  return "bg-sage";
}

export function CalendarHeat() {
  const days = useTracker((s) => s.days);
  const cycle = useTracker((s) => s.cycle);
  const selectedDate = useTracker((s) => s.selectedDate);
  const setSelectedDate = useTracker((s) => s.setSelectedDate);
  const stats = useTrackerStats();
  const logTick = useTracker((s) => s.logTick);
  const lastLoggedDate = useTracker((s) => s.lastLoggedDate);
  const [month, setMonth] = useState(() => monthKey(stats.today));

  useEffect(() => {
    setMonth(monthKey(stats.today));
  }, [cycle.id, stats.today]);

  const views = useMemo(() => withViews(days), [days]);
  const cells = useMemo(() => views.filter((d) => monthKey(d.date) === month), [views, month]);

  const startPad = cells[0] ? weekdayIndex(cells[0].date) : 0;
  const title = cells[0] ? formatDay(cells[0].date, "month") : month;

  function shift(delta: number) {
    const [y, m] = month.split("-").map(Number);
    const next = new Date(y, (m ?? 1) - 1 + delta, 1);
    const key = `${next.getFullYear()}-${String(next.getMonth() + 1).padStart(2, "0")}`;
    const min = cycle.startDate.slice(0, 7);
    const max = cycle.endDate.slice(0, 7);
    if (key < min || key > max) return;
    setMonth(key);
  }

  const monthTotal = cells.reduce((s, d) => s + (d.deposit ?? 0), 0);
  const loggedCount = cells.filter((d) => d.deposit != null).length;

  return (
    <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
      <div className="flex items-center justify-between gap-3">
        <div>
          <h2 className="font-display text-2xl tracking-tight">Calendar</h2>
          <p className="mt-1 text-sm text-mist">
            {formatK(monthTotal, 0)} this month · {loggedCount} days logged
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" className="size-9" onClick={() => shift(-1)} aria-label="Previous month">
            <ChevronLeft className="size-4" />
          </Button>
          <span className="min-w-[8.5rem] text-center text-sm text-paper">{title}</span>
          <Button variant="ghost" size="icon" className="size-9" onClick={() => shift(1)} aria-label="Next month">
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <TooltipProvider delayDuration={80}>
        <div className="mt-5 grid grid-cols-7 gap-1.5 text-center text-[10px] tracking-[0.14em] text-haze uppercase">
          {WEEKDAYS.map((d, i) => (
            <div key={`${d}-${i}`}>{d}</div>
          ))}
        </div>
        <div className="mt-2 grid grid-cols-7 gap-1.5">
          {Array.from({ length: startPad }).map((_, i) => (
            <div key={`pad-${i}`} />
          ))}
          {cells.map((d) => {
            const future = d.date > stats.today;
            const selected = d.date === selectedDate;
            const today = d.date === stats.today;
            const justLogged = logTick > 0 && d.date === lastLoggedDate && d.deposit != null;
            return (
              <Tooltip key={justLogged ? `${d.date}-${logTick}` : d.date}>
                <TooltipTrigger asChild>
                  <button
                    type="button"
                    disabled={future}
                    onClick={() => setSelectedDate(d.date)}
                    className={cn(
                      "aspect-square rounded-sm transition-[transform,box-shadow] duration-150",
                      intensity(future ? null : d.deposit),
                      selected && "ring-2 ring-paper/80 ring-offset-2 ring-offset-panel",
                      today && !selected && "ring-1 ring-sage",
                      !future && "hover:scale-[1.06]",
                      future && "opacity-40",
                      justLogged && "cal-ink",
                    )}
                    aria-label={`${formatDay(d.date, "short")}${d.deposit == null ? "" : `, ${formatK(d.deposit, 0)}`}`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <div className="font-medium">{formatDay(d.date, "short")}</div>
                  <div className="text-mist">
                    {future
                      ? "Upcoming"
                      : d.deposit == null
                        ? "Not logged"
                        : d.deposit === 0
                          ? "Rest day"
                          : formatK(d.deposit, 0)}
                  </div>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </TooltipProvider>
      <p className="mt-4 text-[12px] text-haze">
        {parseISODate(stats.today).toLocaleDateString("en-GB", { weekday: "long" })} — tap a past day to edit it in the
        log.
      </p>
    </section>
  );
}
