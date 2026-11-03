// Captures pleine page à 1440 et 390 px de runs/<skill>/index.html.
// Usage : node scripts/shoot.mjs   (traite tous les dossiers de runs/)
import { chromium } from "playwright";
import { readdirSync, existsSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const runs = resolve("runs");
const dirs = readdirSync(runs, { withFileTypes: true }).filter((d) => d.isDirectory()).map((d) => d.name);
const browser = await chromium.launch();
for (const name of dirs) {
  const file = join(runs, name, "index.html");
  if (!existsSync(file)) { console.log(`- ${name} : pas d'index.html, ignoré`); continue; }
  for (const [w, h, label] of [[1440, 900, "desktop-1440"], [390, 844, "mobile-390"]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(pathToFileURL(file).href, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    // Laisse jouer les animations d'entrée, puis fait défiler pour déclencher les révélations au scroll.
    await page.waitForTimeout(1500);
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
      window.scrollTo(0, 0);
    });
    await page.waitForTimeout(800);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    await page.screenshot({ path: join(runs, name, `${label}.png`), fullPage: true });
    console.log(`✓ ${name} ${label}${overflow > 0 ? `  (défilement horizontal : ${overflow} px)` : ""}`);
    await page.close();
  }
}
await browser.close();
