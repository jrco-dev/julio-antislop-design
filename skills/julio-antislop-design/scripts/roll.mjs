#!/usr/bin/env node
// roll.mjs — julio-antislop-design
// Tire une direction hors de la moyenne : archétype, cartes de contrainte, stratégie de couleur,
// ligne de polices, leviers de risque. Évite ce que les 3 dernières lignes du journal ont utilisé.
// Usage : node scripts/roll.mjs --mode persuader|operer|lire|experience --brief "..." [--log direction-log.md] [--reroll] [--out .julio/roll.json] [--json]
import { createHash, randomBytes } from "node:crypto";
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname } from "node:path";

const A = (k) => { const i = process.argv.indexOf(k); return i > -1 ? process.argv[i + 1] : undefined; };
const has = (k) => process.argv.includes(k);
const modeIn = (A("--mode") || "persuader").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
const M = { persuader: "P", persuade: "P", operer: "O", operate: "O", lire: "L", read: "L", experience: "E" }[modeIn];
if (!M) { console.error("--mode : persuader, operer, lire ou experience"); process.exit(2); }
const brief = A("--brief") || "";
const logPath = A("--log") || "direction-log.md";
const out = A("--out") || ".julio/roll.json";

const ARCH = [
  ["C1", "L'objet-page", "PE"], ["C2", "L'instrument", "PO"], ["C3", "L'échelle unique", "PE"], ["C4", "La séquence", "PEL"],
  ["C5", "L'index", "POL"], ["C6", "L'affiche", "PE"], ["C7", "Le split permanent", "PE"], ["C8", "La carte", "PEL"],
  ["C9", "La frise", "PLE"], ["C10", "Le collage", "EP"], ["C11", "La conversation", "P"], ["C12", "Le document technique", "PL"],
  ["C13", "L'almanach", "PL"], ["C14", "La vitrine", "P"], ["C15", "La typographie seule", "PE"], ["C16", "Le flux", "PO"],
  ["C17", "Le comparatif", "PO"], ["C18", "Le plateau", "PE"], ["C19", "L'imprimé artisanal", "E"], ["C20", "La scène", "PE"],
  ["C21", "Le spécimen", "PEL"], ["C22", "Le plan de travail", "EP"], ["C23", "L'archive", "LE"], ["C24", "La salle de contrôle", "OP"],
];
const CARDS = [
  "Une seule couleur et le noir (ou le blanc)", "Aucun rectangle arrondi, aucune carte", "Une seule taille de texte en dehors du titre principal",
  "Le contenu principal en bas du premier écran", "La navigation est dans le contenu (N18)", "Rien n'est centré",
  "La couleur de fond change à chaque section", "Les chiffres du sujet sont la typographie d'affichage", "Une seule image, recadrée de plusieurs façons",
  "Une texture tirée de la matière réelle du sujet", "Deux polices de structure opposée", "Une grille asymétrique (5 ou 7 colonnes)",
  "Le titre principal fait plus de la moitié de la largeur de l'écran", "L'interaction est le premier écran",
  "Emprunter le vocabulaire visuel d'un autre métier : ", "Le texte se lit sur deux axes, pour un seul moment de la page",
];
const TRADES = ["signalétique ferroviaire", "pharmacie", "cartographie", "partition musicale", "notice de montage", "programme de théâtre", "bulletin météo", "ticket de caisse", "carte à jouer", "étiquette de laboratoire"];
const COLORS = { P: [["Engagée : une couleur porte 30 à 60 % de la surface", 3], ["Aplats francs, une couleur par section", 3], ["Saturée : la page est la couleur", 2], ["Palette complète : 3 ou 4 rôles nommés", 2], ["Retenue : neutres et un accent", 1]],
  O: [["Retenue : neutres et un accent", 4], ["Engagée sur une zone (navigation ou en-tête)", 2], ["Palette de données : 4 à 6 couleurs de séries", 2]],
  L: [["Retenue : neutres et un accent", 3], ["Engagée : une couleur porte titres et liens", 2], ["Aplats par chapitre", 1]],
  E: [["Saturée : la page est la couleur", 3], ["Aplats francs, une couleur par section", 2], ["Monochrome extrême", 2], ["Palette de l'œuvre", 3]] };
const FONTLINES = { A: "Marquage", B: "Technique", C: "Humain", D: "Lecture", E: "Robuste", F: "Construit", G: "Énergie", H: "Écrit" };
const LEVERS = ["Échelle extrême", "Couleur qui porte la page", "La matière du sujet comme structure", "La grille cassée exprès", "La typographie comme image", "L'interaction comme argument", "Un rythme inattendu", "Une image originale"];

// Ce que le journal a déjà utilisé (3 dernières lignes de données)
let recent = "";
if (existsSync(logPath)) {
  const rows = readFileSync(logPath, "utf8").split("\n").filter((l) => /^\|/.test(l) && !/^\|\s*-/.test(l) && !/Date\s*\|/.test(l) && l.replace(/[|\s]/g, ""));
  recent = rows.slice(0, 3).join(" ").toLowerCase();
}
const usedArch = new Set(ARCH.filter(([id, name]) => recent.includes(id.toLowerCase() + " ") || recent.includes(name.toLowerCase())).map(([id]) => id));

// Graine : le brief et un sel aléatoire (un tirage par run), enregistrée pour être rejouée
const prev = existsSync(out) ? JSON.parse(readFileSync(out, "utf8")) : null;
const salt = A("--seed") || (has("--reroll") && prev ? prev.salt + "+" : randomBytes(6).toString("hex"));
const seed = createHash("sha256").update(brief + "|" + M + "|" + salt).digest();
let k = 0;
const rnd = () => { const v = seed.readUInt32BE((k * 4) % 28) ^ (k * 2654435761); k++; return ((v >>> 0) % 1e6) / 1e6; };
const pick = (arr) => arr[Math.floor(rnd() * arr.length)];
const pickW = (arr) => { const t = arr.reduce((s, [, w]) => s + w, 0); let r = rnd() * t; for (const [v, w] of arr) { if ((r -= w) < 0) return v; } return arr[0][0]; };
const draw = (arr, n) => { const a = [...arr], res = []; while (res.length < n && a.length) res.push(a.splice(Math.floor(rnd() * a.length), 1)[0]); return res; };

const pool = ARCH.filter(([id, , m]) => m.includes(M) && !usedArch.has(id) && !(prev && has("--reroll") && prev.archetype.startsWith(id + " ")));
const [aid, aname] = pick(pool.length ? pool : ARCH.filter(([, , m]) => m.includes(M)));
const cards = draw(CARDS, 3).map((c) => (c.endsWith(": ") ? c + pick(TRADES) : c));
const color = pickW(COLORS[M]);
const fontPool = Object.entries(FONTLINES).filter(([, n]) => !recent.includes(n.toLowerCase()));
const [fl, fname] = pick(fontPool.length ? fontPool : Object.entries(FONTLINES));
const levers = draw(LEVERS, 2);

const result = { date: new Date().toISOString().slice(0, 10), mode: M, salt, archetype: `${aid} ${aname}`, cards, color, fontLine: `${fl}. ${fname}`, levers, rerolled: has("--reroll"), excludedFromLog: [...usedArch] };
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(result, null, 2));
if (has("--json")) console.log(JSON.stringify(result, null, 2));
else console.log(`TIRAGE (${result.date}, mode ${M}, graine ${salt}${result.rerolled ? ", re-tirage" : ""})
Archétype : ${result.archetype}   → originality.md §3
Cartes (en garder au moins une) :
  - ${cards.join("\n  - ")}
Couleur : ${color}
Polices : ligne ${result.fontLine} de font-catalog.md
Leviers de risque : ${levers.join(" ; ")}
${usedArch.size ? "Exclus car récents dans le journal : " + [...usedArch].join(", ") + "\n" : ""}Construire la direction AVEC ce tirage. Re-tirer (--reroll) seulement pour une raison factuelle, notée dans le rapport.
Écrit dans ${out}`);
