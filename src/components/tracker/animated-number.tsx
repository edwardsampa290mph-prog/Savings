import { useEffect, useRef, useState } from "react";
import { cn, formatK } from "@/lib/utils";

type Props = {
  value: number;
  decimals?: number;
  className?: string;
  prefix?: boolean;
  duration?: number;
};

export function AnimatedNumber({
  value,
  decimals = 2,
  className,
  prefix = true,
  duration = 700,
}: Props) {
  const [display, setDisplay] = useState(value);
  const current = useRef(value);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      current.current = value;
      setDisplay(value);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      current.current = value;
      setDisplay(value);
      return;
    }
    const from = current.current;
    const to = value;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const next = from + (to - from) * eased;
      current.current = next;
      setDisplay(next);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  const formatted = prefix
    ? formatK(display, decimals)
    : display.toLocaleString("en-ZM", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });

  return <span className={cn("tabular-nums", className)}>{formatted}</span>;
}
