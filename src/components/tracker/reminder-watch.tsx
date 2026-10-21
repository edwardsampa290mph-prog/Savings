import { useEffect } from "react";
import { toast } from "sonner";
import { useTracker, useTrackerStats } from "@/lib/store";
import { lusakaHm } from "@/lib/pin";
import { todayISO } from "@/lib/utils";

export function ReminderWatch() {
  const reminderOn = useTracker((s) => s.reminderOn);
  const reminderTime = useTracker((s) => s.reminderTime);
  const lastReminderDate = useTracker((s) => s.lastReminderDate);
  const markReminded = useTracker((s) => s.markReminded);
  const stats = useTrackerStats();

  useEffect(() => {
    if (!reminderOn) return;

    const tick = () => {
      const today = todayISO();
      if (lastReminderDate === today) return;
      const todayEntry = useTracker.getState().days.find((d) => d.date === today);
      if (todayEntry?.deposit != null) return;
      const now = lusakaHm();
      if (now < reminderTime) return;
      markReminded(today);
      toast("Time to log today’s K10.", { duration: 8000 });
      if (typeof Notification !== "undefined" && Notification.permission === "granted") {
        try {
          new Notification("K10 Daily", { body: "You haven’t logged today’s deposit yet.", silent: true });
        } catch {
          // Preview browsers may block Notification construction.
        }
      }
    };

    tick();
    const id = window.setInterval(tick, 30_000);
    const onVis = () => {
      if (document.visibilityState === "visible") tick();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => {
      window.clearInterval(id);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [reminderOn, reminderTime, lastReminderDate, markReminded, stats.daysLogged]);

  return null;
}
