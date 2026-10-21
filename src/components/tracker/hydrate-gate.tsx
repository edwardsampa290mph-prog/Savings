import { useEffect, type ReactNode } from "react";
import { useTracker } from "@/lib/store";

export function HydrateGate({ children }: { children: ReactNode }) {
  useEffect(() => {
    let cancelled = false;
    void (async () => {
      await useTracker.persist.rehydrate();
      if (!cancelled) useTracker.getState().hydrate();
    })();
    return () => {
      cancelled = true;
    };
  }, []);
  return children;
}
