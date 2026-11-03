#!/usr/bin/env node
// check-render.mjs — julio-antislop-design
// Contrôle la page RENDUE (ce que check-tokens ne voit pas dans le code) : défilement horizontal,
// mots coupés, contraste, texte trop petit, cibles trop petites, images sans texte alternatif,
// sauts de titres, vides irréguliers entre sections, marges gauches qui changent, textes provisoires.
// Usage : node scripts/check-render.mjs <fichier.html|URL> [--widths 390,1440] [--shots dossier] [--lang fr|en] [--json]
// Nécessite Playwright (npm i -D playwright, puis npx playwright install chromium).
// Code de sortie 1 s'il reste au moins une erreur.
import { resolve } from "node:path";
import { existsSync, mkdirSync } from "node:fs";
import { pathToFileURL } from "node:url";

const argv = process.argv.slice(2);
const opt = (k, d) => { const i = argv.indexOf(k); return i > -1 ? argv[i + 1] : d; };
const LANG = (opt("--lang", process.env.JULIO_LANG || (import.meta.url.includes("julio-antislop-design-en") ? "en" : "fr")) || "fr").startsWith("en") ? "en" : "fr";
const T = (fr, en) => (LANG === "en" ? en : fr);
const target = argv.find((a, i) => !a.startsWith("--") && !["--widths", "--shots", "--lang"].includes(argv[i - 1]));
if (!target) { console.error(T("Usage : node scripts/check-render.mjs <fichier.html|URL> [--widths 390,1440] [--shots dossier] [--lang fr|en] [--json]", "Usage: node scripts/check-render.mjs <file.html|URL> [--widths 390,1440] [--shots folder] [--lang fr|en] [--json]")); process.exit(2); }
const url = /^https?:\/\//.test(target) ? target : pathToFileURL(resolve(target)).href;
if (!/^https?:/.test(target) && !existsSync(resolve(target))) { console.error(T("Fichier introuvable : ", "File not found: ") + target); process.exit(2); }
const widths = opt("--widths", "390,1440").split(",").map(Number).filter(Boolean);
const shots = opt("--shots");
const json = argv.includes("--json");

let chromium;
try { ({ chromium } = await import("playwright")); } catch { console.error(T("Playwright introuvable : npm i -D playwright && npx playwright install chromium", "Playwright not found: npm i -D playwright && npx playwright install chromium")); process.exit(2); }

const browser = await chromium.launch();
const issues = [];
const add = (level, width, rule, msg) => issues.push({ level, width, rule, msg });

// Langue de la page pour la locale du navigateur (formats de date, coupure des mots)
let pageLang = "fr-FR";
{
  const ctx = await browser.newContext();
  const p = await ctx.newPage();
  await p.goto(url, { waitUntil: "load" }).catch(() => {});
  pageLang = (await p.evaluate(() => document.documentElement.lang).catch(() => "")) || pageLang;
  await ctx.close();
}

for (const w of widths) {
  const ctx = await browser.newContext({ viewport: { width: w, height: w < 700 ? 844 : 900 }, locale: pageLang, reducedMotion: "reduce" });
  const page = await ctx.newPage();
  await page.goto(url, { waitUntil: "networkidle" }).catch(() => page.goto(url, { waitUntil: "load" }));
  await page.evaluate(() => document.fonts && document.fonts.ready);
  // Faire défiler pour déclencher les révélations au défilement, puis revenir en haut
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 60)); } window.scrollTo(0, 0); });
  await page.waitForTimeout(400);

  const r = await page.evaluate(() => {
    const out = { overflow: 0, broken: [], hyphenBreaks: [], contrast: [], tiny: [], targets: [], noAlt: 0, noName: [], headingSkips: [], gaps: [], lefts: [], placeholders: [], h1: 0, vh: innerHeight };
    out.overflow = document.documentElement.scrollWidth - innerWidth;
    const visible = (el) => { const s = getComputedStyle(el); if (s.visibility === "hidden" || s.display === "none" || +s.opacity === 0) return false; const b = el.getBoundingClientRect(); return b.width > 0 && b.height > 0; };
    const label = (el) => (el.innerText || el.getAttribute("aria-label") || el.tagName).trim().replace(/\s+/g, " ").slice(0, 40);

    // Couleurs et contraste (WCAG 2.x)
    const parse = (c) => { const m = c.match(/rgba?\(([^)]+)\)/); if (!m) return null; const p = m[1].split(/[ ,/]+/).filter(Boolean).map(Number); return { r: p[0], g: p[1], b: p[2], a: p[3] === undefined ? 1 : p[3] }; };
    const lum = ({ r, g, b }) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
    const blend = (fg, bg) => ({ r: fg.r * fg.a + bg.r * (1 - fg.a), g: fg.g * fg.a + bg.g * (1 - fg.a), b: fg.b * fg.a + bg.b * (1 - fg.a), a: 1 });
    const bgOf = (el) => { const layers = []; for (let e = el; e; e = e.parentElement) { const s = getComputedStyle(e); if (s.backgroundImage && s.backgroundImage !== "none") return null; const c = parse(s.backgroundColor); if (c && c.a > 0) { layers.push(c); if (c.a >= 1) break; } } let bg = { r: 255, g: 255, b: 255, a: 1 }; for (const l of layers.reverse()) bg = blend(l, bg); return bg; };

    // Textes : parcourir les nœuds texte visibles
    const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.textContent.trim() && n.parentElement && !["SCRIPT", "STYLE", "NOSCRIPT", "TEMPLATE"].includes(n.parentElement.tagName) ? 1 : 2) });
    const seenEl = new Set();
    let words = 0;
    while (tw.nextNode()) {
      const n = tw.currentNode, el = n.parentElement;
      if (!visible(el) || el.closest("svg")) continue;
      if (!seenEl.has(el)) {
        seenEl.add(el);
        const s = getComputedStyle(el);
        const fs = parseFloat(s.fontSize), bold = parseInt(s.fontWeight) >= 700;
        if (fs < 12 && out.tiny.length < 8) out.tiny.push(`${label(el)} (${fs.toFixed(1)} px)`);
        const fg = parse(s.color), bg = bgOf(el);
        if (fg && bg) {
          const c = blend(fg, bg); const L1 = lum(c), L2 = lum(bg); const ratio = (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
          const large = fs >= 24 || (fs >= 18.66 && bold);
          if (ratio < (large ? 3 : 4.5) && out.contrast.length < 10) out.contrast.push(`${label(el)} : ${ratio.toFixed(2)}:1 (${large ? "3" : "4,5"}:1)`);
        }
      }
      // Mots coupés : un mot de 4 lettres ou plus réparti sur deux lignes sans trait d'union visible
      const text = n.textContent;
      for (const m of text.matchAll(/[\p{L}\p{N}@.\-]{4,}/gu)) {
        if (++words > 6000) break;
        const range = document.createRange(); range.setStart(n, m.index); range.setEnd(n, m.index + m[0].length);
        const rects = [...range.getClientRects()].filter((r) => r.width > 0);
        const tops = new Set(rects.map((r) => Math.round(r.top)));
        if (tops.size > 1) {
          // Coupure au trait d'union existant : tolérée (avertissement) ; coupure au milieu des lettres : erreur
          let atHyphen = false;
          if (m[0].includes("-") && !m[0].includes("@")) {
            atHyphen = true; let off = 0;
            for (const part of m[0].split("-")) {
              const rg = document.createRange(); rg.setStart(n, m.index + off); rg.setEnd(n, m.index + off + part.length);
              if (new Set([...rg.getClientRects()].filter((r) => r.width > 0).map((r) => Math.round(r.top))).size > 1) atHyphen = false;
              off += part.length + 1;
            }
          }
          const bucket = atHyphen ? out.hyphenBreaks : out.broken;
          if (bucket.length < 10) bucket.push(m[0]);
        }
      }
    }

    // Textes provisoires oubliés
    const body = document.body.innerText;
    for (const re of [/lorem ipsum/i, /\[(?:à fournir|a fournir|to be provided|tbd|todo|placeholder)[^\]]*\]/gi, /\bTODO\b/, /\bXXX+\b/, /\{\{[^}]+\}\}/]) {
      const ms = body.match(re); if (ms) out.placeholders.push(...[...new Set(ms)].slice(0, 4));
    }

    // Images, contrôles, titres
    for (const img of document.querySelectorAll("img")) if (!img.hasAttribute("alt") && visible(img)) out.noAlt++;
    for (const c of document.querySelectorAll("a[href], button, input:not([type=hidden]), select, textarea, [role=button]")) {
      if (!visible(c)) continue;
      let b = c.getBoundingClientRect();
      if (b.width <= 2 || b.height <= 2) continue; // champ masqué visuellement, porté par son label
      if (["checkbox", "radio"].includes(c.type) && c.labels && c.labels[0]) { const lb = c.labels[0].getBoundingClientRect(); b = { width: Math.max(b.right, lb.right) - Math.min(b.left, lb.left), height: Math.max(b.bottom, lb.bottom) - Math.min(b.top, lb.top) }; }
      const name = (c.getAttribute("aria-label") || c.innerText || c.value || c.getAttribute("title") || (c.labels && c.labels[0] && c.labels[0].innerText) || c.getAttribute("placeholder") || "").trim();
      if (!name && !c.querySelector("img[alt]:not([alt=''])") && out.noName.length < 6) out.noName.push(c.outerHTML.slice(0, 60));
      const inline = c.tagName === "A" && getComputedStyle(c).display === "inline" && c.closest("p, li, td, dd, figcaption");
      if (!inline && (b.width < 24 || b.height < 24) && out.targets.length < 8) out.targets.push(`${label(c)} (${Math.round(b.width)}×${Math.round(b.height)})`);
    }
    let last = 0;
    for (const h of document.querySelectorAll("h1, h2, h3, h4, h5, h6")) { if (!visible(h)) continue; const lv = +h.tagName[1]; if (lv === 1) out.h1++; if (last && lv > last + 1 && out.headingSkips.length < 5) out.headingSkips.push(`h${last} → h${lv} « ${label(h)} »`); last = lv; }

    // Sections : vides entre contenus successifs et bord gauche du contenu
    const main = document.querySelector("main") || document.body;
    const kids = (e) => [...e.children].filter((c) => visible(c) && c.getBoundingClientRect().height > 80 && !["SCRIPT", "STYLE"].includes(c.tagName) && !["fixed", "sticky"].includes(getComputedStyle(c).position));
    // Découper la page en blocs de premier niveau : descendre dans le plus haut bloc tant qu'il y en a moins de 4
    let secs = kids(main);
    for (let guard = 0; guard < 6 && secs.length < 4; guard++) {
      const tall = secs.reduce((a, c) => (!a || c.getBoundingClientRect().height > a.getBoundingClientRect().height ? c : a), null);
      if (!tall || kids(tall).length < 2) break;
      secs.splice(secs.indexOf(tall), 1, ...kids(tall));
    }
    const contentBox = (s) => {
      let top = Infinity, bottom = -Infinity, left = Infinity;
      for (const e of s.querySelectorAll("h1, h2, h3, h4, p, li, img, svg, figure, table, form, button, a, input, canvas, video, dl, blockquote")) {
        if (!visible(e)) continue; const b = e.getBoundingClientRect(); if (b.height < 4) continue;
        top = Math.min(top, b.top + scrollY); bottom = Math.max(bottom, b.bottom + scrollY); if (b.width < innerWidth * 0.95) left = Math.min(left, b.left);
      }
      return isFinite(top) ? { top, bottom, left } : null;
    };
    const boxes = secs.map(contentBox).filter(Boolean).sort((a, b) => a.top - b.top);
    for (let i = 1; i < boxes.length; i++) out.gaps.push(Math.round(boxes[i].top - boxes[i - 1].bottom));
    out.lefts = boxes.map((b) => Math.round(b.left)).filter((x) => isFinite(x));
    return out;
  });

  const W = `${w}px`;
  if (r.overflow > 1) add("error", W, "defilement-horizontal", T(`La page déborde de ${r.overflow} px en largeur`, `Page overflows horizontally by ${r.overflow} px`));
  if (r.broken.length) add("error", W, "mots-coupes", T(`Mots coupés en fin de ligne : ${[...new Set(r.broken)].join(", ")} (raccourcir, réduire d'un cran, ou hyphens: auto avec la bonne langue)`, `Words broken across lines: ${[...new Set(r.broken)].join(", ")} (shorten, step down the scale, or hyphens: auto with the right lang)`));
  if (r.hyphenBreaks.length) add("warning", W, "coupure-trait-union", T(`Mots coupés à leur trait d'union : ${[...new Set(r.hyphenBreaks)].join(", ")} (acceptable, mais éviter dans les titres et les libellés)`, `Words broken at their hyphen: ${[...new Set(r.hyphenBreaks)].join(", ")} (acceptable, but avoid in headings and labels)`));
  if (r.contrast.length) add("error", W, "contraste", T(`Contraste insuffisant (A1) : ${r.contrast.join(" ; ")}`, `Insufficient contrast (A1): ${r.contrast.join("; ")}`));
  if (r.tiny.length) add("warning", W, "texte-minuscule", T(`Texte sous 12 px : ${r.tiny.join(" ; ")}`, `Text under 12 px: ${r.tiny.join("; ")}`));
  if (r.targets.length) add("warning", W, "cibles", T(`Cibles sous 24 px (A1) : ${r.targets.join(" ; ")}`, `Targets under 24 px (A1): ${r.targets.join("; ")}`));
  if (r.noAlt) add("error", W, "alt", T(`${r.noAlt} image(s) sans attribut alt`, `${r.noAlt} image(s) without alt`));
  if (r.noName.length) add("error", W, "nom-accessible", T(`Contrôles sans nom accessible : ${r.noName.join(" ; ")}`, `Controls without an accessible name: ${r.noName.join("; ")}`));
  if (w === widths[0]) {
    if (r.h1 !== 1) add("error", W, "h1", T(`${r.h1} titre(s) h1 visible(s) : il en faut un`, `${r.h1} visible h1: there must be exactly one`));
    if (r.headingSkips.length) add("warning", W, "niveaux-de-titres", T(`Sauts de niveau : ${r.headingSkips.join(" ; ")}`, `Heading level skips: ${r.headingSkips.join("; ")}`));
    if (r.placeholders.length) add("warning", W, "textes-provisoires", T(`Textes provisoires visibles, à remplacer ou à lister dans le rapport : ${[...new Set(r.placeholders)].join(", ")}`, `Visible placeholder text, replace or list in the report: ${[...new Set(r.placeholders)].join(", ")}`));
  }
  const gaps = r.gaps.filter((g) => g > 24);
  if (gaps.length >= 3) {
    const sorted = [...gaps].sort((a, b) => a - b), med = sorted[Math.floor(sorted.length / 2)];
    const odd = gaps.filter((g) => g > med * 1.8 || g < med / 1.8);
    if (odd.length) add("warning", W, "rythme-sections", T(`Écarts entre sections irréguliers : ${gaps.join(", ")} px (médiane ${med} px). Un seul écart de section (spacing.md)`, `Irregular gaps between sections: ${gaps.join(", ")} px (median ${med} px). One section gap (spacing.md)`));
  }
  const bigHole = r.gaps.find((g) => g > r.vh * 0.75);
  if (bigHole) add("warning", W, "vide", T(`Un vide de ${bigHole} px entre deux sections (plus des trois quarts de l'écran)`, `A ${bigHole} px empty band between two sections (over three quarters of the screen)`));
  if (w >= 1000 && r.lefts.length >= 3) {
    const cl = []; for (const x of r.lefts) if (!cl.some((c) => Math.abs(c - x) <= 8)) cl.push(x);
    if (cl.length > 2) add("warning", W, "marges", T(`Bords gauches du contenu différents d'une section à l'autre : ${cl.sort((a, b) => a - b).join(", ")} px (une seule gouttière, ou un décalage voulu et écrit)`, `Content left edges change between sections: ${cl.sort((a, b) => a - b).join(", ")} px (one gutter, or an intended, documented offset)`));
  }
  if (shots) { mkdirSync(shots, { recursive: true }); await page.screenshot({ path: `${shots}/${w}.png`, fullPage: true }); }
  await ctx.close();
}
await browser.close();

if (json) console.log(JSON.stringify(issues, null, 2));
else {
  for (const i of issues) console.log(`${i.level === "error" ? "✗" : "!"} [${i.width}] [${i.rule}] ${i.msg}`);
  const e = issues.filter((i) => i.level === "error").length, w = issues.length - e;
  console.log(T(`\n${target} · locale ${pageLang} · largeurs ${widths.join(", ")} · ${e} erreur(s), ${w} avertissement(s)`, `\n${target} · locale ${pageLang} · widths ${widths.join(", ")} · ${e} error(s), ${w} warning(s)`) + (shots ? T(` · captures dans ${shots}`, ` · screenshots in ${shots}`) : ""));
}
process.exitCode = issues.some((i) => i.level === "error") ? 1 : 0;
