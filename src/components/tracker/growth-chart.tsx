import { useEffect, useMemo, useState } from "react";
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useTracker, useTrackerStats } from "@/lib/store";
import { chartSeries, nextMilestone } from "@/lib/tracker-data";
import { readChartPalette } from "@/lib/theme";
import { formatK } from "@/lib/utils";

type TipProps = {
  active?: boolean;
  payload?: Array<{ name: string; value: number; color: string }>;
  label?: string;
};

function ChartTip({ active, payload, label }: TipProps) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-md bg-panel-2 px-3 py-2 text-xs shadow-[var(--shadow-border)]">
      <div className="mb-1 text-mist">{label}</div>
      {payload.map((p) => (
        <div key={p.name} className="flex items-center justify-between gap-6 tabular-nums text-paper">
          <span className="text-mist">{p.name}</span>
          <span>{p.value == null ? "—" : formatK(p.value)}</span>
        </div>
      ))}
    </div>
  );
}

export function GrowthChart() {
  const days = useTracker((s) => s.days);
  const cycle = useTracker((s) => s.cycle);
  const theme = useTracker((s) => s.theme);
  const stats = useTrackerStats();
  const [mounted, setMounted] = useState(false);
  const [palette, setPalette] = useState(readChartPalette);
  useEffect(() => setMounted(true), []);
  useEffect(() => setPalette(readChartPalette()), [theme]);

  const data = useMemo(
    () => chartSeries(days, stats.today, cycle.dailyTarget),
    [days, stats.today, cycle.dailyTarget],
  );
  const last = data[data.length - 1];
  const delta = last ? last.deposited - last.expected : 0;
  const mark = nextMilestone(stats.totalDeposited);

  return (
    <section className="rounded-xl bg-panel p-5 shadow-[var(--shadow-border)] sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl tracking-tight">Growth</h2>
          <p className="mt-1 text-sm text-mist">
            Cumulative deposits against the {formatK(cycle.dailyTarget, 0)}/day pace line.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-[11px] tracking-wide text-mist uppercase">
          <span className="flex items-center gap-1.5">
            <i className="block size-2 rounded-full bg-paper" /> Deposited
          </span>
          <span className="flex items-center gap-1.5">
            <i className="block size-2 rounded-full bg-haze" /> Pace
          </span>
          <span className="flex items-center gap-1.5">
            <i className="block size-2 rounded-full bg-sage" /> Patumba
          </span>
          {last ? (
            <span className="normal-case tracking-normal text-paper">
              {delta >= 0
                ? `${formatK(delta, 0)} ahead of pace`
                : `${formatK(Math.abs(delta), 0)} behind pace`}
            </span>
          ) : null}
        </div>
      </div>
      <div className="mt-4 h-64 sm:h-80">
        {mounted && data.length ? (
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart data={data} margin={{ top: 12, right: 12, left: -8, bottom: 0 }}>
              <defs>
                <linearGradient id="cashFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={palette.sage} stopOpacity={0.22} />
                  <stop offset="100%" stopColor={palette.sage} stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke={palette.line} vertical={false} />
              <XAxis
                dataKey="label"
                tick={{ fill: palette.mist, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                interval="preserveStartEnd"
                minTickGap={28}
              />
              <YAxis
                tick={{ fill: palette.mist, fontSize: 11 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(v: number) => (v >= 1000 ? `${v / 1000}k` : String(v))}
                width={40}
              />
              <Tooltip content={<ChartTip />} />
              {mark ? (
                <ReferenceLine
                  y={mark}
                  stroke={palette.sage}
                  strokeDasharray="3 5"
                  strokeOpacity={0.55}
                  label={{
                    value: formatK(mark, 0),
                    fill: palette.mist,
                    fontSize: 11,
                    position: "insideTopRight",
                  }}
                />
              ) : null}
              <Area
                type="monotone"
                dataKey="bank"
                name="Patumba"
                stroke={palette.sage}
                fill="url(#cashFill)"
                strokeWidth={1.5}
                dot={false}
                connectNulls
              />
              <Line
                type="monotone"
                dataKey="expected"
                name="Pace"
                stroke={palette.haze}
                strokeWidth={1.25}
                strokeDasharray="5 5"
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="deposited"
                name="Deposited"
                stroke={palette.paper}
                strokeWidth={2.25}
                dot={false}
                activeDot={{ r: 4, fill: palette.paper, stroke: palette.sage, strokeWidth: 2 }}
              />
            </ComposedChart>
          </ResponsiveContainer>
        ) : data.length === 0 ? (
          <div className="flex h-full items-center justify-center text-sm text-mist">Waiting for deposits</div>
        ) : null}
      </div>
      <p className="mt-3 text-[12px] text-haze">
        At the current {formatK(stats.averageDeposit, 0)} average, the plan lands near{" "}
        {formatK(stats.projectedTotal, 0)} by the cycle end.
      </p>
    </section>
  );
}
