import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
page.on("pageerror", (e) => console.log("PAGEERROR", e.message));
await page.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(600);
const pin = await page.getByText("Set a 4-digit PIN").count();
console.log("pin setup", pin);
if (pin) {
  await page.getByRole("button", { name: "Skip for now" }).click();
  await page.waitForTimeout(400);
}
const total = await page.locator("text=/K720|K580|K542/").first().textContent().catch(() => "?");
console.log("total", total);
await page.screenshot({ path: "/workspace/screenshots/qa-hero.png", clip: { x: 0, y: 0, width: 1280, height: 700 } });

await page.click("#theme-menu");
await page.waitForTimeout(200);
console.log("export", await page.locator("#export-data").isVisible());
console.log("set pin", await page.getByText("Set PIN").count());
console.log("nudge", await page.getByText(/Daily nudge/).count());
await page.screenshot({ path: "/workspace/screenshots/qa-settings.png" });
const [dl] = await Promise.all([
  page.waitForEvent("download", { timeout: 4000 }).catch(() => null),
  page.click("#export-data"),
]);
console.log("download", dl ? dl.suggestedFilename() : "none");

await page.getByRole("button", { name: "Portfolio" }).click();
await page.waitForTimeout(300);
await page.screenshot({ path: "/workspace/screenshots/qa-portfolio.png" });

await page.evaluate(() => window.scrollTo(0, 2200));
await page.getByRole("button", { name: "Savings" }).click();
await page.waitForTimeout(200);
const recap = page.locator("section", { has: page.getByRole("heading", { name: "Yearly recap" }) });
await recap.scrollIntoViewIfNeeded();
await recap.screenshot({ path: "/workspace/screenshots/qa-year.png" });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto("http://127.0.0.1:8080/", { waitUntil: "networkidle" });
await mobile.waitForTimeout(500);
await mobile.screenshot({ path: "/workspace/screenshots/qa-mobile-pin.png" });
await mobile.getByRole("button", { name: "1" }).click();
await mobile.getByRole("button", { name: "1" }).click();
await mobile.getByRole("button", { name: "1" }).click();
await mobile.getByRole("button", { name: "1" }).click();
await mobile.waitForTimeout(200);
await mobile.getByRole("button", { name: "1" }).click();
await mobile.getByRole("button", { name: "1" }).click();
await mobile.getByRole("button", { name: "1" }).click();
await mobile.getByRole("button", { name: "1" }).click();
await mobile.waitForTimeout(500);
console.log("after pin", await mobile.getByText("running total").count());
await mobile.screenshot({ path: "/workspace/screenshots/qa-mobile-home.png" });

await browser.close();
console.log("done");
