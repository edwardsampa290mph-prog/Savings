import { useEffect, useState, type ReactNode } from "react";
import { Landmark, Wallet } from "lucide-react";
import { ThemeMenu } from "./theme-menu";
import { useTracker } from "@/lib/store";
import { applyTheme } from "@/lib/theme";
import { cn, lusakaNow } from "@/lib/utils";

const TABS = [
  { id: "savings" as const, label: "Savings", icon: Wallet },
  { id: "portfolio" as const, label: "Portfolio", icon: Landmark },
];

export function AppShell({ children }: { children: ReactNode }) {
  const [clock, setClock] = useState(() => lusakaNow());
  const section = useTracker((s) => s.section);
  const setSection = useTracker((s) => s.setSection);
  const theme = useTracker((s) => s.theme);
  const hydrated = useTracker((s) => s.hydrated);

  useEffect(() => {
    const id = window.setInterval(() => setClock(lusakaNow()), 15_000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    applyTheme(theme);
  }, [theme, hydrated]);

  return (
    <div className="relative min-h-dvh bg-ink text-paper">
      <div aria-hidden="true" className="header-wash pointer-events-none absolute inset-x-0 top-0 h-72" />
      <header className="relative z-30 mx-auto flex max-w-[1120px] items-center justify-between gap-3 px-5 pt-6 pb-2 sm:px-8 sm:pt-8">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl tracking-tight text-paper italic">K10</span>
          <span className="text-[13px] font-medium tracking-[0.18em] text-mist uppercase">
            Daily
          </span>
        </div>
        <nav
          className="hidden rounded-full bg-panel-2 p-1 sm:flex"
          aria-label="Main"
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSection(tab.id)}
              className={cn(
                "h-9 rounded-full px-4 text-[13px] font-medium transition-[background-color,color] duration-150",
                section === tab.id ? "bg-panel text-paper" : "text-mist hover:text-paper",
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-1 text-[13px] text-mist sm:gap-2">
          <span className="hidden md:inline">
            {clock.weekday} {clock.date}
          </span>
          <span className="mr-0.5 flex items-center gap-2 tabular-nums">
            <span className="live-dot size-1.5 rounded-full bg-sage" />
            {clock.time} CAT
          </span>
          <ThemeMenu />
        </div>
      </header>
      <main className="relative z-10 mx-auto max-w-[1120px] px-5 pb-28 sm:px-8 sm:pb-16">
        {children}
      </main>
      <nav
        className="fixed inset-x-0 bottom-0 z-20 border-t border-line bg-ink/95 px-4 pt-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:hidden"
        aria-label="Main"
      >
        <div className="mx-auto grid max-w-sm grid-cols-2 gap-1">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = section === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSection(tab.id)}
                className={cn(
                  "flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-lg px-3 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors duration-150",
                  active ? "text-sage-2" : "text-haze",
                )}
              >
                <Icon className="size-5" strokeWidth={active ? 2.2 : 1.75} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
