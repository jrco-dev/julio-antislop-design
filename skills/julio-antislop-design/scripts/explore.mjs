#!/usr/bin/env node
// explore.mjs — julio-antislop-design
// Capture plusieurs premiers écrans candidats (a.html, b.html, c.html…) et compose une page de comparaison.
// Usage : node scripts/explore.mjs <dossier>   (contient a.html, b.html, c.html)
import { readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const LANG = (process.argv.includes("--lang") ? process.argv[process.argv.indexOf("--lang") + 1] : (process.env.JULIO_LANG || (import.meta.url.includes("julio-antislop-design-en") ? "en" : "fr"))).startsWith("en") ? "en" : "fr";
const T = (fr, en) => (LANG === "en" ? en : fr);
let chromium;
try { ({ chromium } = await import("playwright")); } catch { console.error(T("Playwright introuvable : npm i -D playwright && npx playwright install chromium", "Playwright not found: npm i -D playwright && npx playwright install chromium")); process.exit(2); }
const dir = resolve(process.argv.slice(2).find((a, i, arr) => !a.startsWith("--") && arr[i - 1] !== "--lang") || ".julio/explore");
const heroes = readdirSync(dir).filter((f) => /^[a-z]\.html$/.test(f)).sort();
if (heroes.length < 2) { console.error(T("Il faut au moins a.html et b.html dans ", "Need at least a.html and b.html in ") + dir); process.exit(2); }
const browser = await chromium.launch();
for (const f of heroes) {
  for (const [w, h, tag] of [[1440, 900, "desktop"], [390, 844, "mobile"]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto(pathToFileURL(join(dir, f)).href, { waitUntil: "networkidle" });
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(800);
    await page.screenshot({ path: join(dir, `${f[0]}-${tag}.png`) });
    await page.close();
  }
  console.log(`✓ ${f}`);
}
const L = heroes.map((f) => f[0].toUpperCase());
writeFileSync(join(dir, "index.html"), `<!doctype html><html lang="${LANG}"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${T("Trois premiers écrans", "Three first screens")}</title>
<style>:root{--bg:#f2f1ed;--ink:#1b1a18;--line:#cfccc4}@media(prefers-color-scheme:dark){:root{--bg:#161614;--ink:#eeece6;--line:#3b3934}}body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.5 system-ui;padding:16px}h1{font-size:18px;margin:0 0 12px}main{display:grid;grid-template-columns:repeat(${heroes.length},minmax(0,1fr));gap:16px}@media(max-width:900px){main{grid-template-columns:1fr}}figure{margin:0}img{width:100%;border:1px solid var(--line);display:block}.m{width:40%;margin-top:8px}figcaption{font-weight:600;margin:6px 0}a{color:inherit}</style>
<h1>${T("Trois premiers écrans : choisir, ou mélanger (« la couleur de B sur la structure de A »)", "Three first screens: pick one, or mix (\"B's colour on A's structure\")")}</h1><main>${heroes.map((f, i) => `<figure><figcaption>${L[i]} · <a href="${f}">${T("ouvrir", "open")}</a></figcaption><img src="${f[0]}-desktop.png" alt="${T("Premier écran", "First screen")} ${L[i]} desktop"><img class="m" src="${f[0]}-mobile.png" alt="${T("Premier écran", "First screen")} ${L[i]} mobile"></figure>`).join("")}</main></html>`);
const p = await browser.newPage({ viewport: { width: 1600, height: 900 } });
await p.goto(pathToFileURL(join(dir, "index.html")).href);
await p.waitForTimeout(400);
await p.screenshot({ path: join(dir, "board.png"), fullPage: true });
await browser.close();
console.log(T("Comparaison : ", "Comparison: ") + `${join(dir, "index.html")} + ${join(dir, "board.png")}`);
