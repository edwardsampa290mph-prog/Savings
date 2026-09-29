import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useTracker } from "@/lib/store";
import { formatDay, formatK } from "@/lib/utils";
import { Settings2 } from "lucide-react";

export function CycleSettings() {
  const cycle = useTracker((s) => s.cycle);
  const updateCyclePlan = useTracker((s) => s.updateCyclePlan);
  const [open, setOpen] = useState(false);
  const [target, setTarget] = useState(String(cycle.targetAmount));
  const [endDate, setEndDate] = useState(cycle.endDate);
  const [daily, setDaily] = useState(String(cycle.dailyTarget));

  function openDialog() {
    setTarget(String(cycle.targetAmount));
    setEndDate(cycle.endDate);
    setDaily(String(cycle.dailyTarget));
    setOpen(true);
  }

  function save() {
    const amount = Number(target);
    const pace = Number(daily);
    if (!Number.isFinite(amount) || amount <= 0) {
      toast.error("Enter a target greater than zero.");
      return;
    }
    if (!endDate) {
      toast.error("Pick an end date.");
      return;
    }
    const { completed } = updateCyclePlan({
      targetAmount: amount,
      endDate,
      dailyTarget: Number.isFinite(pace) && pace > 0 ? pace : cycle.dailyTarget,
    });
    setOpen(false);
    if (completed) {
      toast.success("Target reached — time to archive this cycle.");
    } else {
      toast.success("Cycle plan updated.");
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="inline-flex min-h-11 items-center gap-2 rounded-full px-3 text-[12px] text-mist transition-colors duration-150 hover:text-paper"
      >
        <Settings2 className="size-3.5" />
        Cycle {cycle.number} · {formatK(cycle.targetAmount, 0)} · {formatDay(cycle.endDate, "short")}
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cycle {cycle.number} plan</DialogTitle>
            <DialogDescription>
              Change the savings goal or end date. Hitting 100% of the target archives this cycle.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3">
            <div className="grid gap-2">
              <Label htmlFor="cycle-target">Target (K)</Label>
              <Input
                id="cycle-target"
                inputMode="decimal"
                className="tabular-nums"
                value={target}
                onChange={(e) => setTarget(e.target.value)}
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="grid gap-2">
                <Label htmlFor="cycle-end">End date</Label>
                <Input
                  id="cycle-end"
                  type="date"
                  min={cycle.startDate}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="cycle-daily">Daily pace (K)</Label>
                <Input
                  id="cycle-daily"
                  inputMode="decimal"
                  className="tabular-nums"
                  value={daily}
                  onChange={(e) => setDaily(e.target.value)}
                />
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={save}>Save plan</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
