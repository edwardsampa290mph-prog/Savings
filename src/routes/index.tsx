import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { AppShell } from "@/components/tracker/app-shell";
import { CalendarHeat } from "@/components/tracker/calendar-heat";
import { Celebration } from "@/components/tracker/celebration";
import { CycleCompare } from "@/components/tracker/cycle-compare";
import { CycleSettings } from "@/components/tracker/cycle-settings";
import { DepositForm } from "@/components/tracker/deposit-form";
import { GrowthChart } from "@/components/tracker/growth-chart";
import { HeroPanel } from "@/components/tracker/hero-panel";
import { HydrateGate } from "@/components/tracker/hydrate-gate";
import { LedgerTable } from "@/components/tracker/ledger-table";
import { MilestoneTrack } from "@/components/tracker/milestone-track";
import { PastCycles } from "@/components/tracker/past-cycles";
import { PinGate } from "@/components/tracker/pin-gate";
import { PortfolioPage } from "@/components/tracker/portfolio-page";
import { ReminderWatch } from "@/components/tracker/reminder-watch";
import { StatStrip } from "@/components/tracker/stat-strip";
import { YearSnap } from "@/components/tracker/year-snap";
import { useTracker } from "@/lib/store";
import { isLightTheme } from "@/lib/theme";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <HydrateGate>
      <PinGate>
        <TrackerPage />
      </PinGate>
    </HydrateGate>
  );
}

function TrackerPage() {
  const resetToSeed = useTracker((s) => s.resetToSeed);
  const section = useTracker((s) => s.section);
  const pending = useTracker((s) => s.pendingComplete);
  const theme = useTracker((s) => s.theme);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (section === "savings") document.getElementById("log-amount")?.focus();
        else document.getElementById("p-amount")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [section]);

  return (
    <AppShell>
      <ReminderWatch />
      <Toaster
        theme={isLightTheme(theme) ? "light" : "dark"}
        position="top-center"
        toastOptions={{
          className: "!bg-panel-2 !text-paper !border-0 !shadow-[var(--shadow-border)]",
        }}
      />
      {pending ? <Celebration /> : null}
      <div key={section} className="pane-enter">
        {section === "portfolio" ? (
          <PortfolioPage />
        ) : (
          <SavingsPage resetToSeed={resetToSeed} />
        )}
      </div>
    </AppShell>
  );
}

function SavingsPage({ resetToSeed }: { resetToSeed: () => void }) {
  return (
    <>
      <div className="flex justify-center pt-1">
        <CycleSettings />
      </div>
      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,26rem)]">
        <HeroPanel />
        <div className="lg:pt-6">
          <DepositForm />
        </div>
      </div>
      <StatStrip />
      <div className="mt-6">
        <GrowthChart />
      </div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <CalendarHeat />
        <MilestoneTrack />
      </div>
      <div className="mt-6">
        <PastCycles />
      </div>
      <div className="mt-6">
        <CycleCompare />
      </div>
      <div className="mt-6">
        <YearSnap />
      </div>
      <div className="mt-6">
        <LedgerTable />
      </div>
      <footer className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 pb-4 text-[12px] text-haze sm:flex-row sm:items-center">
        <p>Savings and Portfolio stay on this device, independent of each other.</p>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 text-haze"
          onClick={() => {
            if (window.confirm("Restore the original spreadsheet figures and clear trades?")) {
              resetToSeed();
            }
          }}
        >
          Restore spreadsheet
        </Button>
      </footer>
    </>
  );
}
