import { useEffect } from "react";

export function SwRegister() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) return;
    const url = "/sw.js";
    navigator.serviceWorker.register(url).catch(() => {});
  }, []);
  return null;
}
