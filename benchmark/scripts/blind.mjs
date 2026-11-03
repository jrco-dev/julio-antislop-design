// Anonymise les runs : lettres A, B, C tirées au hasard, copie pages et captures dans blind/,
// écrit blind/mapping-SECRET.json et blind/index.html (page de vote).
import { readdirSync, mkdirSync, copyFileSync, writeFileSync, existsSync, rmSync } from "node:fs";
import { join, resolve } from "node:path";
import { randomInt } from "node:crypto";

const runs = resolve("runs");
const names = readdirSync(runs, { withFileTypes: true }).filter((d) => d.isDirectory() && existsSync(join(runs, d.name, "index.html"))).map((d) => d.name);
if (names.length < 2) { console.error("Il faut au moins 2 runs avec un index.html dans runs/."); process.exit(1); }
for (let i = names.length - 1; i > 0; i--) { const j = randomInt(i + 1); [names[i], names[j]] = [names[j], names[i]]; }
const letters = names.map((_, i) => String.fromCharCode(65 + i));
const blind = resolve("blind");
if (existsSync(blind)) rmSync(blind, { recursive: true });
mkdirSync(blind);
const mapping = {};
names.forEach((n, i) => {
  const L = letters[i]; mapping[L] = n;
  copyFileSync(join(runs, n, "index.html"), join(blind, `${L}.html`));
  for (const s of ["desktop-1440", "mobile-390"]) if (existsSync(join(runs, n, `${s}.png`))) copyFileSync(join(runs, n, `${s}.png`), join(blind, `${L}-${s}.png`));
});
writeFileSync(join(blind, "mapping-SECRET.json"), JSON.stringify(mapping, null, 2));

const tabs = letters.map((L) => `<button type="button" data-l="${L}">Page ${L}</button>`).join("");
const opts = letters.map((L) => `<option>${L}</option>`).join("");
writeFileSync(join(blind, "index.html"), `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Vote à l'aveugle</title>
<style>
:root{--bg:#f4f3ef;--ink:#1c1b19;--muted:#5d5a54;--line:#d8d5cd;--accent:#1d4ed8}
@media (prefers-color-scheme:dark){:root{--bg:#161614;--ink:#f1efe9;--muted:#a9a59c;--line:#3a3833;--accent:#8fb0ff}}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.5 system-ui,sans-serif}
header{display:flex;flex-wrap:wrap;gap:12px;align-items:center;padding:12px 16px;border-bottom:1px solid var(--line)}
header h1{font-size:18px;margin:0 12px 0 0}
button,select{font:inherit;padding:8px 14px;border:1px solid var(--line);background:transparent;color:var(--ink);border-radius:6px;cursor:pointer}
button[aria-pressed=true]{background:var(--ink);color:var(--bg)}
.frames{display:flex;gap:16px;padding:16px;overflow-x:auto}
.frame{flex:0 0 auto}.frame p{margin:0 0 6px;color:var(--muted);font-size:14px}
iframe{border:1px solid var(--line);background:#fff}
#d{width:min(1440px,100%);height:80vh}#m{width:390px;height:80vh}
form{display:flex;flex-wrap:wrap;gap:12px;align-items:center;padding:16px;border-top:1px solid var(--line)}
output{flex-basis:100%;font-weight:600}
</style></head><body>
<header><h1>Vote à l'aveugle</h1><nav>${tabs}</nav></header>
<div class="frames"><div class="frame"><p>Desktop</p><iframe id="d" title="Desktop"></iframe></div><div class="frame"><p>Mobile 390 px</p><iframe id="m" title="Mobile"></iframe></div></div>
<form id="f"><label>1er <select name="a">${opts}</select></label><label>2e <select name="b">${opts}</select></label><label>3e <select name="c">${opts}</select></label><button>Valider mon classement</button><output id="o"></output></form>
<script>
const show=L=>{d.src=m.src=L+".html";document.querySelectorAll("nav button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.l===L))};
document.querySelectorAll("nav button").forEach(b=>b.onclick=()=>show(b.dataset.l));show("A");
f.onsubmit=e=>{e.preventDefault();const r=[f.a.value,f.b.value,f.c.value];o.textContent=new Set(r).size<r.length?"Chaque page une seule fois.":"Ton classement : "+r.join(" > ")+". Note-le avant de lancer npm run reveal."};
</script></body></html>`);
console.log(`✓ ${names.length} pages anonymisées dans blind/. Ouvre blind/index.html (ne lis pas mapping-SECRET.json).`);
