export const THEMES = [
  { id: "gold", label: "Gold", mode: "dark", swatch: ["#0c0d0c", "#7ea894"] },
  { id: "purple", label: "Purple", mode: "dark", swatch: ["#110e16", "#b48cff"] },
  { id: "turquoise", label: "Turquoise", mode: "light", swatch: ["#f4faf9", "#1d9a8c"] },
  { id: "red", label: "Red", mode: "light", swatch: ["#fbf6f4", "#c24a3a"] },
] as const;

export type ThemeId = (typeof THEMES)[number]["id"];

export function isThemeId(value: unknown): value is ThemeId {
  return THEMES.some((t) => t.id === value);
}

export function isLightTheme(theme: ThemeId): boolean {
  return theme === "turquoise" || theme === "red";
}

export function applyTheme(theme: ThemeId) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.dataset.theme = theme;
  root.style.colorScheme = isLightTheme(theme) ? "light" : "dark";
  const bg = getComputedStyle(root).getPropertyValue("--color-ink").trim();
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta && bg) meta.setAttribute("content", bg);
}

export function readChartPalette() {
  if (typeof document === "undefined") {
    return { sage: "#7ea894", paper: "#e8e6e1", mist: "#8b8f8a", haze: "#5c605c", line: "#2a2d2a" };
  }
  const s = getComputedStyle(document.documentElement);
  const read = (name: string, fallback: string) => s.getPropertyValue(name).trim() || fallback;
  return {
    sage: read("--color-sage", "#7ea894"),
    paper: read("--color-paper", "#e8e6e1"),
    mist: read("--color-mist", "#8b8f8a"),
    haze: read("--color-haze", "#5c605c"),
    line: read("--color-line", "#2a2d2a"),
  };
}
