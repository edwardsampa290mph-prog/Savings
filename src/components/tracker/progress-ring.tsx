import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  progress: number;
  size?: number;
  stroke?: number;
  children?: ReactNode;
  className?: string;
  burst?: number;
};

export function ProgressRing({
  progress,
  size = 236,
  stroke = 7,
  children,
  className,
  burst = 0,
}: Props) {
  const radius = (size - stroke) / 2;
  const len = 2 * Math.PI * radius;
  const clamped = Math.min(1, Math.max(0, progress));
  const offset = len * (1 - clamped);

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      {burst > 0 ? (
        <span key={`b1-${burst}`}>
          <span className="burst-ring pointer-events-none absolute inset-3 rounded-full border border-sage/40" />
          <span
            className="burst-ring pointer-events-none absolute inset-0 rounded-full border border-sage/25"
            style={{ animationDelay: "90ms" }}
          />
        </span>
      ) : null}
      <svg width={size} height={size} className="-rotate-90" aria-hidden="true">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-line"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="currentColor"
          className="text-sage"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={len}
          strokeDashoffset={offset}
          style={{
            transition: "stroke-dashoffset 1050ms cubic-bezier(0.16, 1, 0.3, 1)",
            filter: "drop-shadow(0 0 8px color-mix(in srgb, var(--color-sage) 42%, transparent))",
          }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
        {children}
      </div>
    </div>
  );
}
