#!/usr/bin/env node
// board.mjs — julio-antislop-design
// Capture des sites de référence (desktop 1440 et mobile 390, premier écran et page) et compose une planche.
// Usage : node scripts/board.mjs <url> [<url>...] [--out .julio/board]
// Nécessite Playwright (npm i -D playwright, puis npx playwright install chromium) et un accès réseau.
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

let chromium;
try { ({ chromium } = await import("playwright")); } catch { console.error("Playwright introuvable : npm i -D playwright && npx playwright install chromium"); process.exit(2); }
const args = process.argv.slice(2);
const oi = args.indexOf("--out");
const out = resolve(oi > -1 ? args[oi + 1] : ".julio/board");
const urls = args.filter((a, i) => a.startsWith("http") && args[i - 1] !== "--out");
if (!urls.length) { console.error("Usage : node scripts/board.mjs <url>... [--out dossier]"); process.exit(2); }
mkdirSync(out, { recursive: true });

const browser = await chromium.launch();
const shots = [];
for (const [i, url] of urls.entries()) {
  const slug = String(i + 1).padStart(2, "0");
  const entry = { url, ok: true, files: [] };
  for (const [w, h, tag] of [[1440, 900, "desktop"], [390, 844, "mobile"]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    try {
      await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
      await page.waitForTimeout(1200);
      const f = `${slug}-${tag}.png`;
      await page.screenshot({ path: join(out, f) });
      entry.files.push(f);
      if (tag === "desktop") { const g = `${slug}-page.png`; await page.screenshot({ path: join(out, g), fullPage: true }); entry.files.push(g); }
    } catch (e) { entry.ok = false; entry.error = String(e.message || e).split("\n")[0]; }
    await page.close();
  }
  console.log(`${entry.ok ? "✓" : "✗"} ${url}${entry.ok ? "" : "  (" + entry.error + ")"}`);
  shots.push(entry);
}
const cells = shots.filter((s) => s.ok).map((s) => `<figure><div class="pair"><img src="${s.files[0]}"><img class="m" src="${s.files[1] || s.files[0]}"></div><figcaption>${s.url}</figcaption></figure>`).join("");
writeFileSync(join(out, "board.html"), `<!doctype html><meta charset="utf-8"><style>body{margin:0;background:#e9e7e2;font:14px system-ui;padding:24px}main{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}figure{margin:0}.pair{display:flex;gap:8px;align-items:flex-start}.pair img{width:78%;border:1px solid #bbb}.pair img.m{width:20%}figcaption{margin-top:6px;color:#333}</style><main>${cells}</main>`);
const p = await browser.newPage({ viewport: { width: 1600, height: 900 } });
await p.goto(pathToFileURL(join(out, "board.html")).href);
await p.waitForTimeout(500);
await p.screenshot({ path: join(out, "board.png"), fullPage: true });
await browser.close();
writeFileSync(join(out, "board.json"), JSON.stringify(shots, null, 2));
console.log(`Planche : ${join(out, "board.png")} (la regarder avant d'écrire les directions)`);
