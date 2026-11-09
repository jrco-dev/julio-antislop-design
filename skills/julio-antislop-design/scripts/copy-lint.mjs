#!/usr/bin/env node
// copy-lint.mjs — julio-antislop-design
// Contrôle le texte d'une page (HTML) ou d'un brouillon (Markdown), sans navigateur :
// titre principal, intertitres, libellés de boutons, actions du hero, formules toutes faites,
// mots creux, cadences de texte généré, textes provisoires. Règles : references/copy.md et references/tells.md.
// Usage : node scripts/copy-lint.mjs <fichier|dossier>... [--mode persuade|operate|read|experience] [--allow "mots du client"]... [--ignore regle]... [--lang fr|en] [--json]
// Code de sortie 1 s'il reste au moins une erreur.

import { readFileSync, statSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";

const args = process.argv.slice(2);
const langArg = args.indexOf("--lang") > -1 ? args[args.indexOf("--lang") + 1] : (process.env.JULIO_LANG || (import.meta.url.includes("julio-antislop-design-en") ? "en" : "fr"));
const T = (fr, en) => (String(langArg).startsWith("en") ? en : fr);
const allow = [];
const ignore = new Set();
const targets = [];
let json = false;
let mode = "persuade";
for (let i = 0; i < args.length; i++) {
  // Une option sans valeur : message clair et code 2, pas de trace brute.
  const value = () => {
    if (i + 1 >= args.length || args[i + 1].startsWith("--")) { console.error(T(`${args[i]} attend une valeur`, `${args[i]} needs a value`)); process.exit(2); }
    return args[++i];
  };
  if (args[i] === "--mode") mode = value();
  else if (args[i] === "--allow") allow.push(value().toLowerCase());
  else if (args[i] === "--ignore") ignore.add(value());
  else if (args[i] === "--json") json = true;
  else if (args[i] === "--lang") i++;
  else targets.push(args[i]);
}
if (!targets.length) {
  console.error(T('Usage : node copy-lint.mjs <fichier|dossier>... [--mode persuade|operate|read|experience] [--allow "mots du client"] [--ignore regle] [--lang fr|en] [--json]',
    'Usage: node copy-lint.mjs <file|folder>... [--mode persuade|operate|read|experience] [--allow "client words"] [--ignore rule] [--lang fr|en] [--json]'));
  process.exit(2);
}
// Modes : les valeurs françaises sont acceptées. Certaines règles ne valent qu'en Persuader (P), Expérience (E), etc.
const M = { persuader: "persuade", operer: "operate", "opérer": "operate", lire: "read", experience: "experience", "expérience": "experience" }[mode] || mode;
const inModes = (...ms) => ms.includes(M);

// ---------- Lexique (en minuscules ; motifs avec limites de mots Unicode) ----------
// Formules toutes faites : erreur partout où elles apparaissent.
const STOCK = {
  en: [
    "unlock(?:s|ing)?", "supercharg\\w*", "seamless(?:ly)?", "elevate (?:your|the)", "effortless(?:ly)?", "cutting[- ]edge",
    "game[- ]chang\\w+", "next[- ]level", "to the next level", "revolutioni[sz]\\w*", "in today'?s fast[- ]paced", "fast[- ]paced world",
    "best[- ]in[- ]class", "world[- ]class", "state[- ]of[- ]the[- ]art", "all[- ]in[- ]one", "look no further", "harness the power",
    "unleash\\w*", "empower(?:s|ing)? (?:you|your|teams|businesses|creators)", "the future of \\w+ is here", "reimagin\\w+",
    "designed with you in mind", "we(?:'re| are) passionate about", "say goodbye to", "take (?:your|it) \\w+ (?:\\w+ )?to the next level",
    "your one[- ]stop", "like never before", "built for the modern", "lightning[- ]fast", "supercharged",
    "delv(?:e|es|ing)", "tapestry", "testament to", "embark on", "a beacon of", "multifaceted", "a myriad of", "a plethora of",
    "synerg(?:y|ies)", "transformative", "groundbreaking", "skyrocket\\w*", "frictionless", "turbocharg\\w*",
    "in today'?s digital age", "in an ever[- ]changing world", "imagine a world where", "at your fingertips", "in just a few clicks",
    "we'?ve got you covered", "\\w+ made (?:simple|easy)", "join thousands of", "trusted by (?:teams worldwide|thousands)",
    "ready to transform your", "here'?s the thing", "let that sink in", "one[- ]stop shop",
  ],
  fr: [
    "à la pointe(?: de la technologie)?", "révolutionn\\w+", "solutions? innovantes?", "dans un monde en (?:constante|perpétuelle) évolution",
    "n'attendez plus", "n’attendez plus", "au niveau supérieur", "boostez", "propulsez", "libérez (?:le|la|tout) (?:potentiel|puissance)",
    "sans effort", "en toute sérénité", "réinvent\\w+", "nouvelle génération", "tout[- ]en[- ]un", "dites adieu", "l'avenir de \\w+ est",
    "l’avenir de \\w+ est", "comme jamais auparavant", "passionnés par", "véritable partenaire", "votre partenaire de confiance",
    "une expérience (?:unique|inoubliable|inégalée)", "faites passer \\w+ \\w+ au niveau",
    "à l['’]ère du numérique", "à l['’]heure du digital", "dans un monde où", "découvrez la puissance de", "dites au revoir à",
    "rejoignez des milliers de", "plébiscité(?:e|s|es)? par", "imaginez un monde où", "(?:passez )?à la vitesse supérieure", "ne cherchez plus",
    "en toute simplicité", "en quelques clics", "à portée de (?:main|clic)", "nous avons pensé à tout", "l['’]excellence au service de",
    "bien plus qu['’]un(?:e)?", "sublime[rz]", "décupl\\w+", "catapult\\w+", "disrupti(?:f|ve|fs|ves)", "levier de croissance", "dernier cri",
    "sans pareil", "véritable révolution", "booster",
  ],
};
// Mots creux : avertissement (signalés à partir de 3 sur la page, ou dans un titre).
const VIRTUE = {
  en: ["innovative", "powerful", "robust", "intuitive", "revolutionary", "unique", "amazing", "incredible", "exceptional", "stunning",
    "top[- ]notch", "industry[- ]leading", "high[- ]quality", "premium", "unparalleled",
    "genuinely", "truly", "honest(?:ly)?", "authentic", "passionate", "crafted with care", "thoughtfully", "no[- ]nonsense", "meticulous(?:ly)?"],
  fr: ["innovant(?:e|s|es)?", "puissant(?:e|s|es)?", "robustes?", "intuiti(?:f|ve|fs|ves)", "révolutionnaires?", "incroyables?",
    "exceptionnel(?:le|s|les)?", "performant(?:e|s|es)?", "haut de gamme", "de qualité supérieure", "inégalé(?:e|s|es)?", "premium", "leader",
    "sincèrement", "authentiques?", "passionné(?:e|s|es)?", "avec soin", "bienveillan\\w+", "exigeant(?:e|s|es)?", "incontournables?"],
};
// Libellés de boutons qui ne disent pas ce qui se passe : erreur.
const WEAK_BUTTONS = {
  en: ["learn more", "read more", "get started", "click here", "submit", "discover", "explore", "see more", "find out more", "go", "ok",
    "start now", "try it", "more", "details", "click", "here", "continue reading", "let's go", "get in touch", "explore more",
    "discover more", "view more", "check it out", "let's talk"],
  fr: ["en savoir plus", "lire la suite", "commencer", "cliquez ici", "découvrir", "découvrez", "soumettre", "voir plus", "c'est parti",
    "c’est parti", "explorer", "démarrer", "plus", "détails", "ici", "valider", "go", "ok", "nous contacter", "contactez-nous",
    "lire plus", "savoir plus", "afficher plus", "en voir plus", "allons-y", "parlons-en", "explorez", "commencez", "cliquer ici"],
};
// Intertitres qui pourraient coiffer n'importe quelle page : avertissement.
const VAGUE_HEADINGS = {
  en: ["features", "key features", "benefits", "why us", "why choose us", "about", "about us", "our services", "services", "solutions",
    "our solutions", "how it works", "testimonials", "what our clients say", "what people say", "our mission", "our values", "welcome",
    "introduction", "overview", "our story", "get in touch", "contact us", "our vision", "what we do", "kind words", "next steps", "ready to get started?", "ready to get started", "the problem", "the solution"],
  fr: ["fonctionnalités", "nos fonctionnalités", "avantages", "nos avantages", "pourquoi nous", "pourquoi nous choisir", "à propos", "qui sommes-nous",
    "qui sommes-nous ?", "nos services", "services", "nos solutions", "solutions", "comment ça marche", "comment ça marche ?", "témoignages",
    "ils nous font confiance", "ce que disent nos clients", "notre mission", "nos valeurs", "bienvenue", "présentation", "notre histoire",
    "contactez-nous", "notre vision", "ce que nous faisons", "aperçu", "ils parlent de nous", "ce qu'ils en disent", "prochaines étapes", "et plus encore", "prêt à commencer ?", "prêt à vous lancer ?", "le problème", "la solution"],
};
// Restes de conversation avec un modèle : erreur.
const RESIDUE = {
  en: ["certainly!", "i hope this helps", "as an ai", "as a language model", "feel free to (?:reach out|ask|let me)", "let me know if you"],
  fr: ["bien sûr !", "j['’]espère que cela vous aide", "en tant qu['’]ia", "en tant que modèle de langage", "n['’]hésitez pas à me"],
};
// La page qui parle d'elle-même : avertissement.
const SELF_TALK = {
  en: ["this section", "below you['’]ll find", "in this section", "here are \\w+ reasons", "here['’]s why", "scroll down", "as you can see", "on this page"],
  fr: ["cette section", "vous trouverez ci-dessous", "ci-dessous,? vous trouverez", "dans cette section", "voici \\w+ raisons", "voici pourquoi", "faites défiler", "comme vous pouvez le voir", "sur cette page"],
};
// Cadres de contraste (« X, pas Y », « plutôt que ») : budget de 2 par page (copy.md §6).
const CONTRAST = {
  en: "\\bnot (?:just |only |merely )?(?:a |an |the )?[\\p{L}-]+,? but\\b|, not (?:a|an|the|just) |\\brather than\\b|\\binstead of\\b|\\bwithout the\\b|\\bno more\\b",
  fr: "\\bpas (?:seulement |juste |simplement )?(?:un |une |le |la |des )?[\\p{L}-]+,? mais\\b|, pas (?:un|une|le|la|des|juste) |\\bplutôt que\\b|\\bau lieu de\\b|\\bfini(?:s)? les?\\b|\\boubliez\\b",
};
// Chiffres de preuve sociale sans source visible (plancher A2) : avertissement.
const PROOF = /(?<![\p{L}\p{N}])\d{1,3}(?:[ ,.\u202f\u00a0]\d{3})+\s?\+|(?<![\p{L}\p{N}])\d+\s?[kK]\+|(?<![\p{L}\p{N}])\d+(?:[.,]\d)?\s?[x×]\s+(?:faster|more|better|plus rapide|plus)|(?<![\p{L}\p{N}])(?:9\d|100)\s?%\s+(?:of (?:our |the )?(?:customers|clients|users)|des (?:clients|utilisateurs)|satisf)|★{3,}|(?<![\d.,])[45][.,]\d\s?\/\s?5(?![\d])|(?<![\d.,/])[45]\s?\/\s?5\s(?:stars|étoiles)/u;
const PLACEHOLDER_CASE = /\bTODO\b|\bTBD\b|\bXXX+\b|\bFIXME\b/;
const PLACEHOLDER = /lorem ipsum|\[(?:à fournir|to be supplied|placeholder|texte|text|insert[^\]]*)\]|your (?:headline|tagline|text) here|votre (?:titre|texte|slogan) ici|\{\{[^}]*\}\}/i;

const W = (s) => `(?<![\\p{L}\\p{N}])(?:${s})(?![\\p{L}\\p{N}])`;
const compile = (lists) => new RegExp(W(lists.join("|")), "giu");
const norm = (s) => s.replace(/\s+/g, " ").trim();
const words = (s) => (norm(s).match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu) || []);
const EMOJI = /\p{Emoji_Presentation}|\p{Extended_Pictographic}\uFE0F/u;

// ---------- Fichiers ----------
const files = [];
const walk = (p) => {
  const s = statSync(p, { throwIfNoEntry: false });
  if (!s) { console.error(T(`${p} : introuvable`, `${p}: not found`)); process.exit(2); }
  if (s.isDirectory()) {
    for (const n of readdirSync(p)) if (!["node_modules", ".git", "dist", "build", ".next", "out"].includes(n)) walk(join(p, n));
  } else if ([".html", ".htm", ".md", ".markdown"].includes(extname(p).toLowerCase())) files.push(p);
};
targets.forEach(walk);

const issues = [];
const add = (level, file, line, rule, msg) => {
  if (ignore.has(rule)) return;
  // --allow : ne lève que le texte signalé (entre guillemets dans le message), mot entier.
  const hits = [...msg.matchAll(/«\s?([^»]+?)\s?»|"([^"]+)"/g)].map((m) => (m[1] || m[2]).toLowerCase());
  const esc = (x) => x.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  if (hits.length && allow.some((a) => hits.some((h) => new RegExp(`(?<![\\p{L}\\p{N}])${esc(a)}(?![\\p{L}\\p{N}])`, "iu").test(h)))) return;
  issues.push({ level, file, line, rule, msg });
};

// Remplace un bloc par des espaces en gardant les retours à la ligne (les numéros de ligne restent justes).
const blank = (s) => s.replace(/[^\n]/g, " ");
const decode = (s) => s.replace(/&nbsp;|&#160;/g, " ").replace(/&amp;/g, "&").replace(/&rsquo;|&#8217;/g, "’").replace(/&lsquo;/g, "‘")
  .replace(/&mdash;|&#8212;/g, "—").replace(/&ndash;/g, "–").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
  .replace(/&laquo;/g, "«").replace(/&raquo;/g, "»").replace(/&hellip;/g, "…").replace(/&[a-z]+;/gi, " ");
const textOf = (html) => norm(decode(html.replace(/<[^>]+>/g, " ")));

for (const file of files) {
  const raw = readFileSync(file, "utf8");
  const isMd = /\.m(?:d|arkdown)$/i.test(file);
  const lineAt = (src, idx) => src.slice(0, idx).split("\n").length;
  let lang = langArg.startsWith("en") ? "en" : "fr";
  const htmlLang = raw.match(/<html[^>]*\blang=["']?([a-z]{2})/i);
  if (htmlLang) lang = htmlLang[1].toLowerCase() === "fr" ? "fr" : "en";
  else if (isMd) { const fr = (raw.match(/\b(?:le|la|les|des|une|est|pour|avec|vous)\b/gi) || []).length, en = (raw.match(/\b(?:the|and|for|with|you|your|is)\b/gi) || []).length; lang = fr > en ? "fr" : "en"; }
  const L = (o) => o[lang];

  let src = raw;
  const headings = []; // { level, text, line }
  const buttons = [];  // { text, line, idx }
  let h1s = [];
  let heroRange = null;
  let inDetails = () => false;

  if (isMd) {
    src = src.replace(/```[\s\S]*?```/g, blank).replace(/<!--[\s\S]*?-->/g, blank);
    for (const m of src.matchAll(/^(#{1,6})\s+(.+?)\s*#*\s*$/gm)) headings.push({ level: m[1].length, text: norm(m[2].replace(/[*_`]/g, "")), line: lineAt(src, m.index) });
    // Un bouton dans un brouillon : une ligne faite seulement de liens [Libellé](...) ou d'une ligne « Bouton : … » / « CTA: … ».
    for (const m of src.matchAll(/^\s*(?:(?:bouton|button|cta)\s*:\s*(.+)|((?:\[[^\]]+\]\([^)]*\)\s*(?:·|\||,|et|and|or|ou)?\s*)+))$/gim)) {
      if (m[1]) for (const t of m[1].split(/\s*[|·]\s*|\s+\/\s+/)) buttons.push({ text: norm(t.replace(/[*_`[\]]/g, "")), line: lineAt(src, m.index), idx: m.index });
      else for (const b of m[2].matchAll(/\[([^\]]+)\]/g)) buttons.push({ text: norm(b[1]), line: lineAt(src, m.index), idx: m.index });
    }
    h1s = headings.filter((h) => h.level === 1);
    if (h1s.length) {
      // Le hero d'un brouillon : du début jusqu'au premier intertitre qui suit le h1.
      const after = headings.find((h) => h.line > h1s[0].line);
      const lines = src.split("\n");
      const end = after ? lines.slice(0, after.line - 1).join("\n").length : src.length;
      heroRange = [0, end];
    }
    src = src.replace(/!\[[^\]]*\]\([^)]*\)/g, blank).replace(/\]\([^)]*\)/g, (s) => "]" + blank(s.slice(1)));
  } else {
    src = src.replace(/<!--[\s\S]*?-->/g, blank).replace(/<(script|style|svg|template|noscript|code|pre)\b[\s\S]*?<\/\1>/gi, blank).replace(/<head\b[\s\S]*?<\/head>/i, blank);
    const navRanges = [...src.matchAll(/<nav\b[\s\S]*?<\/nav>/gi)].map((m) => [m.index, m.index + m[0].length]);
    const inNav = (i) => navRanges.some(([a, b]) => i >= a && i < b);
    const detailsRanges = [...src.matchAll(/<details\b[\s\S]*?<\/details>/gi)].map((m) => [m.index, m.index + m[0].length]);
    inDetails = (i) => detailsRanges.some(([a, b]) => i >= a && i < b);
    for (const m of src.matchAll(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi)) headings.push({ level: +m[1], text: textOf(m[2]), line: lineAt(src, m.index), idx: m.index });
    for (const m of src.matchAll(/<button\b[^>]*>([\s\S]*?)<\/button>/gi)) {
      const label = m[0].match(/aria-label=["']([^"']+)/i);
      const t = textOf(m[1]) || (label ? label[1] : "");
      if (/type=["']?(?:reset)/i.test(m[0])) continue;
      // Bouton de menu : reconnu sur sa balise ouvrante seulement (« See the menu » est une vraie action).
      const opening = m[0].slice(0, m[0].indexOf(">") + 1);
      const menuLabel = /^(?:menu|close|fermer|☰|×)$/i.test(t.trim());
      buttons.push({ text: t, line: lineAt(src, m.index), idx: m.index, nav: inNav(m.index), menu: menuLabel || /aria-(?:expanded|controls|haspopup)|\b(?:menu|burger|hamburger|nav-toggle|close|fermer)\b/i.test(opening) });
    }
    for (const m of src.matchAll(/<a\b([^>]*)>([\s\S]*?)<\/a>/gi)) {
      if (/class=["'][^"']*\b(?:btn|button|cta|bouton)\b|role=["']button/i.test(m[1])) buttons.push({ text: textOf(m[2]) || ((m[1].match(/aria-label=["']([^"']+)/i) || [])[1] || ""), line: lineAt(src, m.index), idx: m.index, nav: inNav(m.index) });
    }
    for (const m of src.matchAll(/<input\b[^>]*type=["']?submit[^>]*>/gi)) {
      const v = m[0].match(/value=["']([^"']*)/i);
      buttons.push({ text: v ? v[1] : "", line: lineAt(src, m.index), idx: m.index });
    }
    h1s = headings.filter((h) => h.level === 1);
    if (h1s.length) {
      // Le hero : la section (ou l'en-tête) qui contient le premier h1, jusqu'à sa fermeture.
      const i = h1s[0].idx;
      const before = src.slice(0, i);
      const opens = [...before.matchAll(/<(section|header|div)\b[^>]*>/gi)].filter((o) => o[1].toLowerCase() !== "div" || /hero/i.test(o[0]));
      const endOf = (o) => {
        const re = new RegExp(`<(/?)${o[1].toLowerCase()}\\b[^>]*>`, "gi");
        re.lastIndex = o.index;
        for (let t, depth = 0; (t = re.exec(src));) { depth += t[1] ? -1 : 1; if (!depth) return t.index; }
        return src.length;
      };
      // Le conteneur le plus proche qui contient vraiment le h1 ; sinon, du h1 au premier h2 qui suit.
      const container = opens.findLast((o) => endOf(o) > i);
      const nextH2 = src.slice(i).search(/<h2\b/i);
      heroRange = container ? [container.index, endOf(container)] : [i, nextH2 > 0 ? i + nextH2 : src.length];
    }
    // Retirer la navigation du texte courant et des actions du hero.
    src = src.replace(/<nav\b[\s\S]*?<\/nav>/gi, blank);
  }

  // Texte visible, ligne par ligne (les balises deviennent des espaces).
  const visible = isMd ? src.replace(/[*_`>#]/g, " ") : decode(src.replace(/<[^>]+>/g, (s) => blank(s)));
  const visibleLines = visible.split("\n");

  // 1. Titre principal
  if (!h1s.length) add("error", file, 0, "titre-absent", T("Aucun titre principal (h1) : il nomme ce qui est vendu et à qui", "No main headline (h1): it names what is sold and to whom"));
  if (h1s.length > 1) add("warning", file, h1s[1].line, "titre-multiple", T(`${h1s.length} titres h1 : un seul par page`, `${h1s.length} h1 headings: one per page`));
  for (const h of h1s.slice(0, 1)) {
    const n = words(h.text).length;
    if (n > 8) add("warning", file, h.line, "titre-long", T(`Titre de ${n} mots (« ${h.text} ») : viser 5 environ, 8 au plus, 2 lignes au plus à 320 px`, `Headline of ${n} words ("${h.text}"): aim for about 5, 8 at most, 2 lines at most at 320 px`));
    if (inModes("persuade") && /[?!]\s*$/.test(h.text)) add("error", file, h.line, "titre-question", T(`Le titre principal finit par « ${h.text.trim().slice(-1)} » : il affirme ce qui est vendu`, `The main headline ends with "${h.text.trim().slice(-1)}": it states what is sold`));
    if (inModes("persuade", "experience") && n && n <= 1 && !/\d/.test(h.text)) add("warning", file, h.line, "titre-nu", T(`Titre d'un seul mot (« ${h.text} ») : il doit dire ce qui est vendu ou le lieu`, `One-word headline ("${h.text}"): it must say what is sold or the place`));
    if (new RegExp(W(L(VAGUE_HEADINGS).map((s) => s.replace(/[?]/g, "\\?")).join("|")), "iu").test(h.text) && n <= 4 && inModes("persuade", "experience")) add("error", file, h.line, "titre-vague", T(`Titre interchangeable : « ${h.text} »`, `Interchangeable headline: "${h.text}"`));
  }

  // 2. Intertitres
  const vagueSet = new Set(L(VAGUE_HEADINGS));
  let fullStops = 0;
  const twoFrag = [];
  let faqLevel = 0;
  for (const h of headings) {
    if (faqLevel && h.level <= faqLevel) faqLevel = 0;
    if (/\bfaq\b|questions|fréquent/i.test(h.text)) faqLevel = h.level;
    const inFaq = faqLevel && h.level > faqLevel || (h.idx != null && inDetails(h.idx));
    const t = h.text.toLowerCase().replace(/[.!:]+$/, "").trim();
    if (h.level > 1 && vagueSet.has(t) && inModes("persuade", "experience")) add("warning", file, h.line, "intertitre-vague", T(`Intertitre qui irait sur n'importe quelle page : « ${h.text} » ; nommer la chose`, `Heading that would fit any page: "${h.text}"; name the thing`));
    if (/[.]$/.test(h.text) && !/\.\.\.|…$/.test(h.text)) fullStops++;
    if (/\?\s*$/.test(h.text) && !inModes("read") && !inFaq && !/faq|question|fréquent/i.test(h.text)) add("warning", file, h.line, "titre-question", T(`Titre en question : « ${h.text} » ; affirmer la réponse (sauf FAQ)`, `Heading as a question: "${h.text}"; state the answer (FAQ aside)`));
    if (/^[^.?!]{2,40}\.\s+[^.?!]{2,40}\.?$/.test(h.text)) twoFrag.push(h);
    if (/!/.test(h.text)) add("warning", file, h.line, "exclamation", T(`Point d'exclamation dans un titre : « ${h.text} »`, `Exclamation mark in a heading: "${h.text}"`));
    if (EMOJI.test(h.text)) add("warning", file, h.line, "emoji", T(`Émoji dans un titre : « ${h.text} »`, `Emoji in a heading: "${h.text}"`));
  }
  if (inModes("persuade") && twoFrag.length > 1) add(twoFrag.length >= 3 ? "error" : "warning", file, twoFrag[1].line, "titre-deux-temps", T(`${twoFrag.length} titres en deux fragments (« ${twoFrag[0].text} ») : une fois par page au plus`, `${twoFrag.length} two-fragment headings ("${twoFrag[0].text}"): once a page at most`));
  if (fullStops >= 3 && fullStops >= headings.length / 2) add("warning", file, 0, "titres-points", T(`${fullStops} titres sur ${headings.length} finissent par un point : un procédé devenu tic`, `${fullStops} of ${headings.length} headings end with a full stop: a device turned tell`));

  // 3. Boutons
  const weak = new Set(L(WEAK_BUTTONS));
  const labels = new Map();
  for (const b of buttons) {
    const t = b.text.toLowerCase().replace(/[→›»>←‹«<.!…]+/g, "").trim();
    if (!t) { if (!b.menu) add("error", file, b.line, "bouton-sans-nom", T("Bouton sans libellé lisible (ni texte ni aria-label)", "Button with no readable label (no text, no aria-label)")); continue; }
    if (b.menu) continue;
    labels.set(t, (labels.get(t) || 0) + 1);
    if (weak.has(t)) add("error", file, b.line, "bouton-vague", T(`Bouton « ${b.text} » : dire ce qui se passe (verbe + objet : « Réserver une table »)`, `Button "${b.text}": say what happens (verb + object: "Book a table")`));
    else if (words(t).length === 1 && t.length > 2) add("warning", file, b.line, "bouton-un-mot", T(`Bouton d'un seul mot « ${b.text} » : ajouter l'objet si le contexte ne le donne pas`, `One-word button "${b.text}": add the object unless the context gives it`));
    if (EMOJI.test(b.text)) add("warning", file, b.line, "emoji", T(`Émoji dans un bouton : « ${b.text} »`, `Emoji in a button: "${b.text}"`));
  }
  if (inModes("persuade") && labels.size > 10) add("warning", file, 0, "trop-d-actions", T(`${labels.size} libellés d'action différents : 10 au plus par page`, `${labels.size} different action labels: 10 at most a page`));
  for (const [t, n] of labels) if (inModes("persuade") && n > 4) add("warning", file, 0, "action-repetee", T(`L'action « ${t} » revient ${n} fois : deux fois par écran au plus`, `The action "${t}" appears ${n} times: twice a screen at most`));
  if (heroRange && inModes("persuade", "experience")) {
    const heroActions = buttons.filter((b) => !b.menu && !b.nav && b.idx >= heroRange[0] && b.idx < heroRange[1]);
    if (heroActions.length > 2) add("error", file, heroActions[2].line, "actions-hero", T(`${heroActions.length} actions dans le hero : deux au plus, une principale`, `${heroActions.length} actions in the hero: two at most, one primary`));
  }

  // 4. Texte courant : formules, mots creux, cadences, textes provisoires
  const stockRe = compile(L(STOCK));
  const residueRe = compile(L(RESIDUE));
  const selfRe = compile(L(SELF_TALK));
  const contrastRe = new RegExp(L(CONTRAST), "giu");
  const contrastHits = [];
  const footIdx = isMd ? -1 : raw.search(/<footer\b/i);
  const footLine = footIdx < 0 ? Infinity : lineAt(raw, footIdx);
  const virtueRe = compile(L(VIRTUE));
  const virtueHits = [];
  let dashes = 0, exclam = 0;
  const negStarts = []; // une entrée par série d'au moins deux phrases négatives consécutives
  let run = 0;
  visibleLines.forEach((ln, k) => {
    const line = k + 1;
    if (!ln.trim()) return;
    for (const m of ln.matchAll(stockRe)) add("error", file, line, "formule-toute-faite", T(`Formule toute faite : « ${m[0]} » ; dire le fait précis à la place`, `Stock phrase: "${m[0]}"; say the specific fact instead`));
    for (const m of ln.matchAll(virtueRe)) virtueHits.push({ w: m[0], line });
    for (const m of ln.matchAll(residueRe)) add("error", file, line, "residu-de-conversation", T(`Reste de conversation avec un modèle : « ${m[0]} »`, `Chatbot leftover: "${m[0]}"`));
    if (!isMd && (/\[(?:NOM|NAME|COMPANY|ENTREPRISE|CLIENT|TITRE|TITLE|INSERT\w*|INSÉRER|VOTRE|YOUR|PLACEHOLDER|TODO)[\p{Lu} _-]{0,25}\]/u.test(ln) || /\[[^\]]{0,20}(?:name|nom de|company|entreprise|insert|insérer|your |votre |à fournir|to be supplied)[^\]]{0,20}\]/iu.test(ln) || /\*\*[^*]+\*\*|\]\(https?:/.test(ln))) add("error", file, line, "residu-de-redaction", T(`Reste de brouillon dans la page (crochets ou Markdown) : « ${norm(ln).slice(0, 60)} »`, `Draft leftover on the page (brackets or Markdown): "${norm(ln).slice(0, 60)}"`));
    for (const m of ln.matchAll(selfRe)) add("warning", file, line, "page-qui-se-commente", T(`La page parle d'elle-même : « ${m[0]} »`, `The page talks about itself: "${m[0]}"`));
    for (const m of ln.matchAll(contrastRe)) contrastHits.push({ w: m[0], line });
    if (inModes("persuade") && PROOF.test(ln) && line < footLine) add("warning", file, line, "chiffre-sans-source", T(`Chiffre de preuve (« ${ln.match(PROOF)[0].trim()} ») : il lui faut une source dans le brief (A2), citée près du chiffre`, `Proof figure ("${ln.match(PROOF)[0].trim()}"): it needs a source in the brief (A2), cited near the figure`));
    if (PLACEHOLDER.test(ln) || PLACEHOLDER_CASE.test(ln)) add("error", file, line, "texte-provisoire", T(`Texte provisoire : « ${norm(ln).slice(0, 60)} »`, `Placeholder text: "${norm(ln).slice(0, 60)}"`));
    dashes += (ln.match(/—/g) || []).length;
    exclam += (ln.match(/!(?!=)/g) || []).length;
    // « pas seulement X, c'est Y » / « not just X, it's Y »
    if (lang === "en" ? /\b(?:it'?s |this is )?not (?:just|only|merely) (?:a |an |another )?[\w -]{1,40}[,;—–-]+\s*(?:it'?s|but|it is)\b/i.test(ln) || /\bmore than (?:just )?(?:a|an) [\w -]{1,30}[,.;—–-]/i.test(ln)
      : /\b(?:pas|non) (?:seulement|simplement|juste|qu'un|qu’un) [\p{L} '’-]{1,40}[,;—–-]+\s*(?:c'est|c’est|mais|un|une)\b/iu.test(ln) || /\bplus qu['’]un(?:e)? [\p{L} -]{1,30}[,.;—–-]/iu.test(ln))
      add("warning", file, line, "pas-seulement", T("Tournure « pas seulement X, c'est Y » : dire Y directement", "\"Not just X, it's Y\" construction: say Y directly"));
    // Cadence en trois temps : « Rapide. Simple. Sûr. »
    if (/(?:^|[\s>"«“])(?:[\p{L}’'-]+(?: [\p{L}’'-]+)?[.]\s+){2,}[\p{L}’'-]+(?: [\p{L}’'-]+)?[.](?:\s|$)/u.test(ln)) {
      const frag = ln.match(/(?:[\p{L}’'-]+(?: [\p{L}’'-]+)?[.]\s+){2,}[\p{L}’'-]+(?: [\p{L}’'-]+)?[.]/u)[0];
      // Abréviations (« Sept. Oct. Nov. », « Lun. Mar. ») : une liste, pas une cadence.
      const abbrev = frag.split(/\.\s*/).filter(Boolean).every((f) => /^[\p{L}]{1,5}$/u.test(f.trim()) && /^(?:jan|janv|feb|fév|févr|mar|mars|apr|avr|may|mai|jun|juin|jul|juil|aug|août|sep|sept|oct|nov|dec|déc|mon|tue|wed|thu|fri|sat|sun|lun|mer|jeu|ven|sam|dim)$/i.test(f.trim()));
      if (!abbrev && !/\b(?:[A-Z]\.){2,}/.test(frag) && !inModes("operate")) add("warning", file, line, "trois-temps", T(`Cadence en fragments : « ${norm(frag)} »`, `Fragment cadence: "${norm(frag)}"`));
    }
    for (const s of ln.split(/(?<=[.!?])\s+/)) {
      if (!s.trim()) continue;
      const neg = (lang === "en" ? /^\s*(?:not|no|never) /i : /^\s*(?:pas|jamais|ni|aucun|aucune|zéro) /i).test(s) && words(s).length <= 7;
      if (neg) { run++; if (run === 2) negStarts.push(line); } else run = 0;
    }
  });
  if (inModes("persuade", "experience") && contrastHits.length > 2) add("warning", file, contrastHits[2].line, "contrastes", T(`${contrastHits.length} cadres de contraste (« ${contrastHits.map((c) => norm(c.w)).slice(0, 3).join(" », « ")} ») : 2 par page au plus, dire le fait positif`, `${contrastHits.length} contrast frames ("${contrastHits.map((c) => norm(c.w)).slice(0, 3).join('", "')}"): 2 a page at most, state the positive fact`));
  // Année périmée dans le pied de page
  const foot = isMd ? "" : (raw.match(/<footer\b[\s\S]*?<\/footer>/i) || [""])[0];
  const yr = foot.match(/(?:©|&copy;|copyright)\D{0,12}(\d{4})(?:\s?[-–]\s?(\d{4}))?/i);
  if (yr && +(yr[2] || yr[1]) < new Date().getFullYear()) add("warning", file, lineAt(raw, raw.indexOf(yr[0])), "annee-perimee", T(`Année ${yr[2] || yr[1]} dans le pied de page : la calculer en direct`, `Year ${yr[2] || yr[1]} in the footer: compute it live`));
  // Budget de mots (Persuader) : approximation par section, sans navigateur
  if (inModes("persuade") && !isMd) {
    const body = visible.replace(/\s+/g, " ");
    const total = words(body).length - words(decode(foot.replace(/<[^>]+>/g, " "))).length;
    const sections = Math.max(1, (raw.match(/<section\b/gi) || []).length, headings.filter((h) => h.level === 2).length);
    if (total > 900) add("warning", file, 0, "budget-mots", T(`${total} mots hors pied de page : environ 900 au plus, le reste en sous-pages`, `${total} words outside the footer: about 900 at most, the rest on sub-pages`));
    else if (total / sections > 80) add("warning", file, 0, "budget-mots", T(`${Math.round(total / sections)} mots par section en moyenne : 35 à 50 par écran, 60 à 80 pour un produit technique`, `${Math.round(total / sections)} words per section on average: 35 to 50 a screen, 60 to 80 for a technical product`));
  }
  if (negStarts.length > 1 && inModes("persuade", "experience")) add("warning", file, negStarts[0], "negations-en-serie", T(`Série de phrases courtes qui commencent par une négation (${negStarts.length} séries) : une par page au plus, dire le fait positif`, `Run of short sentences starting with a negation (${negStarts.length} runs): one a page at most, state the positive fact`));
  const virtueInHeadings = virtueHits.filter((v) => headings.some((h) => h.line === v.line));
  if (virtueHits.length >= 3) add("warning", file, virtueHits[2].line, "mots-creux", T(`${virtueHits.length} mots creux (${[...new Set(virtueHits.map((v) => v.w.toLowerCase()))].join(", ")}) : remplacer par le fait qui le prouve`, `${virtueHits.length} empty virtue words (${[...new Set(virtueHits.map((v) => v.w.toLowerCase()))].join(", ")}): replace with the fact that proves it`));
  else for (const v of virtueInHeadings) add("warning", file, v.line, "mots-creux", T(`Mot creux dans un titre : « ${v.w} »`, `Empty virtue word in a heading: "${v.w}"`));
  if (dashes > 3) add("warning", file, 0, "tirets-cadratins", T(`${dashes} tirets cadratins : une virgule, deux points ou une phrase de plus`, `${dashes} em dashes: use a comma, a colon or another sentence`));
  if (exclam > 2) add("warning", file, 0, "exclamation", T(`${exclam} points d'exclamation dans la page`, `${exclam} exclamation marks on the page`));
}

process.exitCode = issues.some((i) => i.level === "error") ? 1 : 0;
if (json) console.log(JSON.stringify(issues, null, 2));
else {
  const byRule = {};
  for (const i of issues) byRule[i.rule] = (byRule[i.rule] || 0) + 1;
  for (const i of issues) console.log(`${i.level === "error" ? "✗" : "!"} ${i.file}${i.line ? ":" + i.line : ""}  [${i.rule}]  ${i.msg}`);
  console.log(T(`\n${files.length} fichier(s) contrôlé(s)`, `\n${files.length} file(s) checked`));
  console.log(Object.keys(byRule).length ? T("Résumé : ", "Summary: ") + Object.entries(byRule).map(([k, v]) => `${k} ${v}`).join(" · ") : T("Aucun signalement.", "Nothing flagged."));
}
