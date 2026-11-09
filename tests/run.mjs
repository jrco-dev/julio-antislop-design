// Tests des scripts et de la structure des deux éditions du skill.
// Usage : node tests/run.mjs   (les tests de rendu sont sautés si Playwright manque)
import { execFileSync } from "node:child_process";
import { readFileSync, readdirSync, existsSync, mkdtempSync, writeFileSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";

const root = resolve(import.meta.dirname, "..");
const ed = { fr: join(root, "skills/julio-antislop-design"), en: join(root, "skills/julio-antislop-design-en") };
let fails = 0, passes = 0, skips = 0;
const ok = (name, cond, extra = "") => { if (cond) { passes++; console.log(`✓ ${name}`); } else { fails++; console.log(`✗ ${name} ${extra}`); } };
const run = (args, opts = {}) => { try { return { code: 0, out: execFileSync("node", args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...opts }) }; } catch (e) { return { code: e.status, out: (e.stdout || "") + (e.stderr || "") }; } };
const good = join(root, "tests/fixtures/good.html"), bad = join(root, "tests/fixtures/bad.html");

// 1. Structure des deux éditions
const walk = (d, base = d) => readdirSync(d).flatMap((f) => { const p = join(d, f); return statSync(p).isDirectory() ? walk(p, base) : [p.slice(base.length + 1)]; }).sort();
const filesFr = walk(ed.fr), filesEn = walk(ed.en);
ok("les deux éditions ont les mêmes fichiers", JSON.stringify(filesFr) === JSON.stringify(filesEn), `\n  fr seul : ${filesFr.filter((f) => !filesEn.includes(f))}\n  en seul : ${filesEn.filter((f) => !filesFr.includes(f))}`);
for (const [k, d] of Object.entries(ed)) {
  const skill = readFileSync(join(d, "SKILL.md"), "utf8");
  const fm = skill.match(/^---\n([\s\S]*?)\n---/);
  ok(`${k} : frontmatter présent`, !!fm);
  const name = fm && fm[1].match(/^name:\s*(.+)$/m);
  ok(`${k} : nom ${k === "fr" ? "julio-antislop-design" : "julio-antislop-design-en"}`, name && name[1].trim() === (k === "fr" ? "julio-antislop-design" : "julio-antislop-design-en"));
  const desc = fm && fm[1].match(/^description:\s*(.+)$/m);
  ok(`${k} : description de 1024 caractères au plus`, desc && desc[1].replace(/^"|"$/g, "").length <= 1024, desc ? `(${desc[1].length})` : "");
  ok(`${k} : SKILL.md sous 10 Ko`, Buffer.byteLength(skill) < 10240, `(${Buffer.byteLength(skill)} octets)`);
  for (const f of walk(d).filter((f) => f.endsWith(".md"))) {
    const txt = readFileSync(join(d, f), "utf8");
    for (const m of txt.matchAll(/`((?:references|templates|scripts)\/[\w.-]+\.(?:md|mjs))`/g)) {
      ok(`${k} : ${f} → ${m[1]} existe`, existsSync(join(d, m[1])));
    }
  }
}

// 2. check-tokens
for (const [k, d] of Object.entries(ed)) {
  const ct = join(d, "scripts/check-tokens.mjs");
  const g = run([ct, good]);
  ok(`${k} : check-tokens accepte la page propre`, g.code === 0, g.out);
  const b = run([ct, bad, "--json"]);
  ok(`${k} : check-tokens refuse la page fautive`, b.code === 1);
  let rules = [];
  try { rules = JSON.parse(b.out).map((i) => i.rule); } catch {}
  for (const r of ["taille-hors-token", "espace-hors-token", "police-hors-token", "police-reflexe", "eyebrow", "capitales-espacees"]) ok(`${k} : check-tokens signale ${r}`, rules.includes(r));
}
ok("check-tokens parle anglais dans l'édition anglaise", /Nothing flagged|Summary/.test(run([join(ed.en, "scripts/check-tokens.mjs"), good]).out));

// 3. roll
const tmp = mkdtempSync(join(tmpdir(), "julio-"));
const roll = join(ed.fr, "scripts/roll.mjs");
const r1 = run([roll, "--mode", "persuader", "--brief", "test", "--seed", "abc", "--out", join(tmp, "a.json"), "--json"]);
const r2 = run([roll, "--mode", "persuader", "--brief", "test", "--seed", "abc", "--out", join(tmp, "b.json"), "--json"]);
const strip = (o) => { try { const j = JSON.parse(o); delete j.date; return JSON.stringify(j); } catch { return o; } };
ok("roll : même graine, même tirage", r1.code === 0 && strip(r1.out) === strip(r2.out));
const a1 = JSON.parse(r1.out).archetype.split(" ")[0];
writeFileSync(join(tmp, "log.md"), `| Date | Projet | Mode | Archétype (C#) |\n| --- | --- | --- | --- |\n| 2026-11-03 | t | P | ${a1} |\n`);
const r3 = run([roll, "--mode", "persuader", "--brief", "test", "--seed", "abc", "--log", join(tmp, "log.md"), "--out", join(tmp, "c.json"), "--json"]);
ok("roll : évite l'archétype du journal", r3.code === 0 && !JSON.parse(r3.out).archetype.startsWith(a1 + " "));
const r4 = run([roll, "--mode", "operer", "--brief", "x", "--seed", "z", "--out", join(tmp, "d.json"), "--json"]);
ok("roll : archétype compatible avec le mode Opérer", ["C2", "C5", "C16", "C17", "C24"].includes(JSON.parse(r4.out).archetype.split(" ")[0]));
ok("roll : sortie anglaise", /Archetype:/.test(run([roll, "--mode", "persuade", "--brief", "x", "--lang", "en", "--out", join(tmp, "e.json")]).out));

// 3 bis. copy-lint
for (const [k, d] of Object.entries(ed)) {
  const cl = join(d, "scripts/copy-lint.mjs");
  const g = run([cl, join(root, "tests/fixtures/copy-good.html")]);
  ok(`${k} : copy-lint accepte la page propre`, g.code === 0, g.out);
  ok(`${k} : copy-lint accepte la page propre en français`, run([cl, good]).code === 0);
  const b = run([cl, join(root, "tests/fixtures/copy-bad.html"), "--json"]);
  ok(`${k} : copy-lint refuse la page fautive`, b.code === 1);
  let rules = [];
  try { rules = JSON.parse(b.out).map((i) => i.rule); } catch {}
  for (const r of ["titre-vague", "intertitre-vague", "bouton-vague", "bouton-sans-nom", "actions-hero", "formule-toute-faite", "pas-seulement", "trois-temps", "negations-en-serie", "mots-creux", "texte-provisoire", "tirets-cadratins", "titres-points", "residu-de-conversation", "residu-de-redaction", "page-qui-se-commente", "contrastes", "chiffre-sans-source", "annee-perimee", "titre-question"]) ok(`${k} : copy-lint signale ${r}`, rules.includes(r), JSON.stringify(rules));
  const md = run([cl, join(root, "tests/fixtures/copy-brouillon.md"), "--json"]);
  let mdRules = [];
  try { mdRules = JSON.parse(md.out).map((i) => i.rule); } catch {}
  for (const r of ["titre-vague", "bouton-vague", "formule-toute-faite", "intertitre-vague"]) ok(`${k} : copy-lint signale ${r} dans un brouillon Markdown`, mdRules.includes(r), JSON.stringify(mdRules));
  const allowed = run([cl, join(root, "tests/fixtures/copy-bad.html"), "--allow", "seamless", "--json"]);
  ok(`${k} : copy-lint respecte --allow`, !JSON.parse(allowed.out).some((i) => /seamless/i.test(i.msg)));
}
ok("copy-lint parle anglais dans l'édition anglaise", /Nothing flagged|Summary/.test(run([join(ed.en, "scripts/copy-lint.mjs"), good]).out));

// 4. check-render (si Playwright est présent)
let hasPw = true;
try { await import("playwright"); } catch { hasPw = false; }
if (!hasPw) { skips++; console.log("- check-render : sauté (Playwright absent)"); }
else {
  const cr = join(ed.fr, "scripts/check-render.mjs");
  const g = run([cr, good, "--json"]);
  ok("check-render accepte la page propre", g.code === 0, g.out.slice(0, 400));
  const b = run([cr, bad, "--json"]);
  let rules = [];
  try { rules = JSON.parse(b.out).map((i) => i.rule); } catch {}
  ok("check-render refuse la page fautive", b.code === 1);
  for (const r of ["defilement-horizontal", "contraste", "alt", "mots-coupes", "textes-provisoires", "hick-navigation", "miller-formulaire"]) ok(`check-render signale ${r}`, rules.includes(r), JSON.stringify(rules));
}

console.log(`\n${passes} réussis, ${fails} échoués, ${skips} sautés`);
process.exitCode = fails ? 1 : 0;
