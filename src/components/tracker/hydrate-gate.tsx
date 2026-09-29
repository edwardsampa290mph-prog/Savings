import { useEffect, type ReactNode } from "react";
import { useTracker } from "@/lib/store";

export function HydrateGate({ children }: { children: ReactNode }) {
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      const fallback = window.setTimeout(() => {
        if (!cancelled && !useTracker.getState().hydrated) useTracker.getState().hydrate();
      }, 400);
      try {
        await useTracker.persist.rehydrate();
      } catch {
        /* localStorage may be blocked; still open on seed */
      }
      window.clearTimeout(fallback);
      if (!cancelled) useTracker.getState().hydrate();
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return children;
}
