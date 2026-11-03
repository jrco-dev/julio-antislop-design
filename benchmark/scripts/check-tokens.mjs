#!/usr/bin/env node
// check-tokens.mjs — julio-antislop-design
// Signale les tailles de texte, espacements et polices écrits hors tokens,
// les polices réflexes, et une échelle typographique trop chargée ou trop serrée.
// Usage : node scripts/check-tokens.mjs <fichier|dossier>... [--allow-font "Nom"]... [--mode persuade|operate|read|experience] [--json]
// Code de sortie 1 s'il reste au moins une erreur.

import { readFileSync, statSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";

const REFLEX_FONTS = [
  "Inter", "Roboto", "Open Sans", "Lato", "Poppins", "Montserrat",
  "Space Grotesk", "DM Sans", "Manrope", "Plus Jakarta Sans", "Outfit", "Sora", "Geist", "Hanken Grotesk",
  "Archivo", "Archivo Narrow", "Archivo Black",
  "Satoshi", "General Sans", "Clash Display", "Cabinet Grotesk",
  "Instrument Serif", "Instrument Sans", "Fraunces", "Playfair Display", "Cormorant", "Cormorant Garamond",
  "Libre Caslon Display", "Libre Caslon Text",
];
const GENERIC = new Set(["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui", "ui-sans-serif",
  "ui-serif", "ui-monospace", "ui-rounded", "emoji", "math", "inherit", "initial", "unset", "revert", "-apple-system",
  "blinkmacsystemfont", "segoe ui", "helvetica", "arial", "helvetica neue", "times new roman", "georgia", "menlo", "consolas", "arial narrow", "courier new"]);
const SPACE_PROPS = /^(margin|padding|gap|row-gap|column-gap|inset|grid-gap|grid-row-gap|grid-column-gap|margin-block|margin-inline|padding-block|padding-inline|scroll-margin|scroll-padding)(-[a-z-]+)?$/;
const LENGTH = /(-?\d*\.?\d+)(px|rem|em|vw|vh|svh|dvh|lvh|ch|ex|vmin|vmax|cqi|cqw|%)\b/;

const args = process.argv.slice(2);
const langArg = args.indexOf("--lang") > -1 ? args[args.indexOf("--lang") + 1] : (process.env.JULIO_LANG || (import.meta.url.includes("julio-antislop-design-en") ? "en" : "fr"));
const T = (fr, en) => (String(langArg).startsWith("en") ? en : fr);
const allow = new Set();
const targets = [];
let json = false;
let mode = "persuade";
for (let i = 0; i < args.length; i++) {
  if (args[i] === "--allow-font") allow.add(args[++i].toLowerCase());
  else if (args[i] === "--mode") mode = args[++i];
  else if (args[i] === "--json") json = true;
  else if (args[i] === "--lang") i++;
  else if (args[i] === "--allow-eyebrow") {}
  else targets.push(args[i]);
}
if (!targets.length) {
  console.error(T('Usage : node check-tokens.mjs <fichier|dossier>... [--allow-font "Nom"] [--mode persuade|operate|read|experience] [--allow-eyebrow] [--lang fr|en] [--json]', 'Usage: node check-tokens.mjs <file|folder>... [--allow-font "Name"] [--mode persuade|operate|read|experience] [--allow-eyebrow] [--lang fr|en] [--json]'));
  process.exit(2);
}

const files = [];
const walk = (p) => {
  const s = statSync(p);
  if (s.isDirectory()) {
    for (const n of readdirSync(p)) if (!["node_modules", ".git", "dist", "build", ".next"].includes(n)) walk(join(p, n));
  } else if ([".html", ".htm", ".css", ".vue", ".svelte", ".astro", ".jsx", ".tsx"].includes(extname(p))) files.push(p);
};
targets.forEach(walk);

const issues = [];
const add = (level, file, line, rule, msg) => issues.push({ level, file, line, rule, msg });

// Supprime les var(...) imbriqués pour voir ce qui reste en dur.
const stripVars = (v) => { let prev; do { prev = v; v = v.replace(/var\([^()]*\)/g, "§"); } while (v !== prev); return v; };

const sizeTokensUsed = new Map(); // nom -> nb
const tokenDefs = new Map();      // nom -> valeur
const fontsLoaded = new Map();    // police -> fichier

for (const file of files) {
  const src = readFileSync(file, "utf8");
  const ext = extname(file);
  const chunks = [];
  if (ext === ".css") chunks.push({ css: src, offset: 0 });
  else {
    for (const m of src.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)) chunks.push({ css: m[1], offset: m.index + m[0].indexOf(m[1]) });
    for (const m of src.matchAll(/style="([^"]*)"/gi)) chunks.push({ css: `x{${m[1]}}`, offset: m.index, inline: true });
  }
  // Polices chargées (Google Fonts, Fontshare, @font-face)
  for (const m of src.matchAll(/family=([^&"':)]+)/g)) {
    for (const fam of m[1].split("|")) fontsLoaded.set(decodeURIComponent(fam.split(":")[0].replace(/\+/g, " ")).trim(), file);
  }
  for (const m of src.matchAll(/api\.fontshare\.com[^"']*?f\[\]=([a-z-]+)/gi)) fontsLoaded.set(m[1].replace(/-/g, " "), file);
  const lineAt = (idx) => src.slice(0, idx).split("\n").length;
  // Eyebrow : court texte posé juste au-dessus d'un titre, ou capitales espacées (tells.md, vague 2)
  if (ext !== ".css") {
    for (const m of src.matchAll(/<(p|span|div|small|strong)\b[^>]*>([^<]{1,48})<\/\1>\s*<h[1-3]\b/gi))
      add(process.argv.includes("--allow-eyebrow") ? "warning" : "error", file, lineAt(m.index), "eyebrow", T(`« ${m[2].trim()} » juste au-dessus d'un titre : intégrer au titre ou supprimer (défaut le plus fort)`, `"${m[2].trim()}" sits right above a heading (eyebrow): merge it into the heading or remove it (strongest default)`));
  }
  for (const m of src.matchAll(/\{[^{}]*text-transform\s*:\s*uppercase[^{}]*letter-spacing\s*:\s*(0?\.\d+|\d+(\.\d+)?)(em|rem|px)[^{}]*\}|\{[^{}]*letter-spacing\s*:\s*(0?\.\d+|\d+(\.\d+)?)(em|rem|px)[^{}]*text-transform\s*:\s*uppercase[^{}]*\}/gi)) {
    const v = parseFloat(m[1] || m[4]), u = m[3] || m[6];
    if ((u === "em" && v >= 0.05) || (u === "px" && v >= 1) || (u === "rem" && v >= 0.05))
      add("warning", file, lineAt(m.index), "capitales-espacees", T("Capitales espacées : label en capitales et interlettrage large (tells.md, vague 2)", "Tracked caps: uppercase label with wide letter-spacing (tells.md, wave 2)"));
  }

  for (const { css, offset, inline } of chunks) {
    const clean = css.replace(/\/\*[\s\S]*?\*\//g, (c) => c.replace(/[^\n]/g, " "));
    for (const m of clean.matchAll(/@font-face\s*{[^}]*font-family\s*:\s*["']?([^;"'}]+)/g)) fontsLoaded.set(m[1].trim(), file);
    for (const m of clean.matchAll(/([a-z-]+)\s*:\s*([^;{}]+)/gi)) {
      const prop = m[1].toLowerCase();
      const value = m[2].trim();
      const line = lineAt(offset + m.index);
      if (prop.startsWith("--")) { tokenDefs.set(prop, value); continue; }
      if (/^(https?|data)$/.test(prop)) continue;
      const rest = stripVars(value);
      if (prop === "font-size") {
        for (const v of value.matchAll(/var\((--[a-z0-9-]+)/gi)) sizeTokensUsed.set(v[1], (sizeTokensUsed.get(v[1]) || 0) + 1);
        if (LENGTH.test(rest) || /\b(small|medium|large|x-large|xx-large|larger|smaller)\b/.test(rest))
          add("error", file, line, "taille-hors-token", T(`font-size: ${value} — utiliser un cran de l'échelle (var(--step-n))`, `font-size: ${value} — use a step of the scale (var(--step-n))`));
      } else if (SPACE_PROPS.test(prop)) {
        const raw = rest.split(/\s+/).filter((t) => LENGTH.test(t) && !/^-?0+(\.0+)?[a-z%]*$/.test(t));
        if (raw.length) add("error", file, line, "espace-hors-token", T(`${prop}: ${value} — utiliser l'échelle d'espacement (var(--space-*) ou un token de rôle)`, `${prop}: ${value} — use the spacing scale (var(--space-*) or a role token)`));
      } else if (prop === "font-family" && !inline) {
        if (!/var\(/.test(value)) add("error", file, line, "police-hors-token", T(`font-family: ${value} — déclarer la police dans un token`, `font-family: ${value} — declare the font in a token`));
      } else if (prop === "font") {
        if (LENGTH.test(rest)) add("error", file, line, "taille-hors-token", T(`font: ${value} — taille et police via tokens`, `font: ${value} — size and family through tokens`));
      }
    }
  }
}

// Polices déclarées dans les tokens
for (const [name, value] of tokenDefs) {
  if (!/font|family|face|type/i.test(name)) continue;
  for (const f of value.split(",")) {
    const fam = f.trim().replace(/^["']|["']$/g, "");
    if (fam && !GENERIC.has(fam.toLowerCase()) && !/var\(/.test(fam)) fontsLoaded.set(fam, fontsLoaded.get(fam) || "tokens");
  }
}
for (const [fam, file] of fontsLoaded) {
  const hit = REFLEX_FONTS.find((r) => r.toLowerCase() === fam.toLowerCase());
  if (hit && !allow.has(fam.toLowerCase()))
    add(["operate", "read"].includes(mode) ? "warning" : "error", file, 0, "police-reflexe", T(`« ${fam} » est une police réflexe (typography.md §1). La remplacer par une police tirée du sujet, ou la garder pour raison de marque avec --allow-font "${fam}" et la noter comme défaut levé`, `"${fam}" is a reflex font (typography.md §1). Replace it with a face drawn from the subject, or keep it for a brand reason with --allow-font "${fam}" and record it as a lifted default`));
}

// Échelle : nombre de crans et écarts
const evalLen = (v, vw) => {
  v = v.trim();
  const clamp = v.match(/^clamp\((.+)\)$/);
  if (clamp) {
    const parts = clamp[1].split(/,(?![^()]*\))/).map((p) => evalLen(p, vw));
    if (parts.some((p) => p == null)) return null;
    return Math.min(Math.max(parts[0], parts[1]), parts[2]);
  }
  let total = 0, ok = false;
  for (const t of v.replace(/calc\(|\)/g, "").matchAll(/([+-]?)\s*(\d*\.?\d+)(rem|px|vw)/g)) {
    const n = parseFloat(t[2]) * (t[1] === "-" ? -1 : 1);
    total += t[3] === "rem" ? n * 16 : t[3] === "px" ? n : (n * vw) / 100; ok = true;
  }
  return ok ? total : null;
};
// Les petites échelles locales (faux UI, texte de dessin SVG) ne comptent pas dans l'échelle de la page.
const used = [...sizeTokensUsed.keys()].filter((n) => !/^--(ui|svg)-/.test(n));
if (used.length > 5) add("warning", "page", 0, "trop-de-crans", T(`${used.length} tailles utilisées (${used.join(", ")}) — 5 au plus`, `${used.length} sizes used (${used.join(", ")}) — 5 at most`));
for (const vw of [390, 1440]) {
  const sizes = used.map((n) => ({ n, px: tokenDefs.has(n) ? evalLen(tokenDefs.get(n), vw) : null })).filter((s) => s.px != null).sort((a, b) => a.px - b.px);
  for (let i = 1; i < sizes.length; i++) {
    const r = sizes[i].px / sizes[i - 1].px;
    if (r < 1.15) add("warning", "page", 0, "tailles-trop-proches", T(`À ${vw} px, ${sizes[i - 1].n} (${sizes[i - 1].px.toFixed(1)} px) et ${sizes[i].n} (${sizes[i].px.toFixed(1)} px) ont un rapport de ${r.toFixed(2)} — sauter un cran`, `At ${vw} px, ${sizes[i - 1].n} (${sizes[i - 1].px.toFixed(1)} px) and ${sizes[i].n} (${sizes[i].px.toFixed(1)} px) have a ratio of ${r.toFixed(2)} — skip a step`));
  }
}

process.exitCode = issues.some((i) => i.level === "error") ? 1 : 0;
if (json) { console.log(JSON.stringify(issues, null, 2)); }
else {
  const errors = issues.filter((i) => i.level === "error");
  const byRule = {};
  for (const i of issues) byRule[i.rule] = (byRule[i.rule] || 0) + 1;
  for (const i of issues) console.log(`${i.level === "error" ? "✗" : "!"} ${i.file}${i.line ? ":" + i.line : ""}  [${i.rule}]  ${i.msg}`);
  console.log(T(`\n${files.length} fichier(s) · polices : ${[...fontsLoaded.keys()].join(", ") || "aucune détectée"} · crans de texte utilisés : ${used.length}`, `\n${files.length} file(s) · fonts: ${[...fontsLoaded.keys()].join(", ") || "none detected"} · type steps used: ${used.length}`));
  console.log(Object.keys(byRule).length ? T("Résumé : ", "Summary: ") + Object.entries(byRule).map(([k, v]) => `${k} ${v}`).join(" · ") : T("Aucun signalement.", "Nothing flagged."));
  process.exitCode = errors.length ? 1 : 0;
}
