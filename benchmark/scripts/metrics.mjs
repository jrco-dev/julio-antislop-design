// Mesures objectives, à lire comme des indices et non comme un verdict :
// chaque outil de contrôle vient de l'un des skills et favorise ses propres règles.
import { readdirSync, existsSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { execFileSync } from "node:child_process";

const runs = resolve("runs");
const checker = process.env.CHECK_TOKENS || resolve("scripts/check-tokens.mjs");
const names = readdirSync(runs, { withFileTypes: true }).filter((d) => d.isDirectory() && existsSync(join(runs, d.name, "index.html"))).map((d) => d.name);
const run = (cmd, args) => { try { return execFileSync(cmd, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }); } catch (e) { return (e.stdout || "") + (e.stderr || ""); } };
let md = "# Mesures\n\nIndices seulement : check-tokens vient de julio-antislop-design, detect d'Impeccable ; chacun mesure d'abord ses propres règles.\n\n| Run | Octets | check-tokens | impeccable detect |\n| --- | --- | --- | --- |\n";
for (const n of names) {
  const f = join(runs, n, "index.html");
  const size = readFileSync_size(f);
  const ct = run("node", [checker, f]).trim().split("\n").filter((l) => l.startsWith("Résumé") || l.startsWith("Aucun")).join(" ") || "?";
  const det = run("npx", ["--yes", "impeccable", "detect", f, "--json"]);
  let detSum = "?";
  try { const j = JSON.parse(det.slice(det.indexOf("["))); detSum = `${j.length} constat(s)`; } catch { detSum = det.split("\n").slice(-3).join(" ").slice(0, 120); }
  md += `| ${n} | ${size} | ${ct.replace(/\|/g, "/")} | ${detSum} |\n`;
}
function readFileSync_size(f) { return execFileSync("wc", ["-c", f], { encoding: "utf8" }).trim().split(/\s+/)[0]; }
writeFileSync("metrics.md", md);
console.log(md);
