# julio-antislop-design

**Un skill pour agents de code qui fait des interfaces conçues, pas générées.**
*An agent skill that makes interfaces look designed, not generated. [English summary below](#english).*

Une page faite par un modèle ressemble à la moyenne de toutes les pages qu'il a vues : titre centré, petit label au-dessus, trois cartes à icône, un dégradé violet, Inter. Rien n'y est faux, et rien n'y a été décidé. Les études récentes le confirment : les modèles remplissent le brief, mais deux briefs différents donnent deux pages presque identiques, et un meilleur prompt ne suffit pas à corriger ça.

`julio-antislop-design` remplace ces défauts par un **processus** : l'idée vient du sujet, la direction vient de références réelles, un plancher non négociable protège l'accessibilité, l'honnêteté et la performance, et l'agent regarde ce qu'il a fait avant de le livrer.

Il fonctionne avec Claude Code, Claude.ai, Codex, Cursor et tout hôte compatible [Agent Skills](https://agentskills.io).

---

## Sommaire

- [Ce que fait le skill](#ce-que-fait-le-skill)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Comment il travaille](#comment-il-travaille)
- [Ce que vous recevez](#ce-que-vous-recevez)
- [Outils recommandés](#outils-recommandés)
- [Contenu du dépôt](#contenu-du-dépôt)
- [Limites connues](#limites-connues)
- [FAQ](#faq)
- [Contribuer](#contribuer)
- [Crédits](#crédits)
- [Licence](#licence)
- [English](#english)

---

## Ce que fait le skill

- **Crée** des landing pages, sites, écrans d'app, dashboards, docs et portfolios.
- **Refond** un écran existant qui « fait IA », sans changer ce que fait le produit.
- **Relit** un design et dit ce qui trahit une page générée, avec les corrections.
- **Choisit** une palette, une typographie, des animations, en partant de sources réelles.
- **Produit** des vidéos produit et du motion design en code, avec un workflow éprouvé.

Ce qui le distingue :

| Principe | Concrètement |
| --- | --- |
| L'idée vient du sujet | Inventaire de 8 à 12 éléments propres au client, phrase d'idée, test du concurrent |
| Rien d'inventé | Aucune police, aucun composant, aucun chiffre, aucune citation imaginaires ; chaque décision a une source notée |
| Sortir de la moyenne | 5 directions avec leur probabilité ; les 2 plus probables sont écartées ; journal pour ne pas se répéter |
| Règles selon le contexte | 4 modes (Persuader, Opérer, Lire, Expérience) : un filet discret est normal dans un dashboard et un tic sur une landing |
| Vérifier, pas promettre | Détecteur automatique, captures à 4 largeurs, Core Web Vitals, critique par un regard neuf |

## Installation

**Avec le CLI `skills` (Claude Code, Codex, Cursor et autres agents détectés) :**

```bash
npx skills add jrco-dev/julio-antislop-design --skill julio-antislop-design
```

Ajoutez `-g` pour l'installer pour tous vos projets.

**À la main pour Claude Code :**

```bash
git clone https://github.com/jrco-dev/julio-antislop-design
cp -r julio-antislop-design/skills/julio-antislop-design ~/.claude/skills/        # tous les projets
# ou : cp -r … .claude/skills/   dans un seul projet
```

**Sur Claude.ai :** téléchargez [`dist/julio-antislop-design.skill`](dist/julio-antislop-design.skill) et ajoutez-le dans vos paramètres de skills.

Redémarrez votre agent après l'installation.

## Utilisation

Le skill se déclenche seul dès qu'une tâche touche l'apparence d'une interface. Vous pouvez aussi le nommer. Exemples :

```text
Fais la landing page de notre agence de voyages à Nosy Be. Public : couples européens, 35-55 ans.
Action : réserver un appel. Photos dans ./assets/photos.

Refonds ce dashboard, il fait trop IA : src/app/dashboard/page.tsx

Relis cette page et dis-moi ce qui trahit une page générée : http://localhost:3000

Choisis une palette et une typo pour une marque de café artisanal de la région de Fianarantsoa.

Fais une vidéo de 20 secondes qui présente notre app, à partir de captures réelles.
```

```text
Build a landing page for a ceramic studio in Lisbon. Use julio-antislop-design.
```

Avant de créer, l'agent cadre le projet avec vous : un tour de questions sur le projet (surface, audience, action visée, ton), un tour sur la matière (marque, images, preuves avec leur source, textes, références, contraintes), puis une fiche brief qui commence par « Je lis ce projet comme : … ». Il attend votre validation avant de construire. Répondez « vas-y » pour qu'il décide lui-même en annonçant ses hypothèses.

## Comment il travaille

### 1. Il choisit le mode

| Mode | Le visiteur réussit quand… | Exemples |
| --- | --- | --- |
| Persuader | il décide et agit | Landing, marketing, tarifs |
| Opérer | il termine une tâche | App, dashboard, admin |
| Lire | il comprend | Docs, articles, guides |
| Expérience | il est dans l'œuvre | Portfolio, galerie |

La **refonte** est une action, pas un mode : audit écrit, diagnostic, direction en 5 lignes que vous validez, puis 9 passes dans un ordre fixe.

### 2. Il suit un processus en 12 étapes

Lire le projet → cadrage (questions, matière, fiche brief validée) → inventaire du sujet → argument page par page → références réelles → directions hors de la moyenne → idée et test du concurrent → tous les textes avant le code → construire sans mouvement → contrôles automatiques → critique par un regard neuf → mouvement et livraison.

### 3. Il respecte un plancher absolu

Sept règles qui ne se lèvent jamais :

| | Règle |
| --- | --- |
| A1 | Accessibilité WCAG 2.2 AA : contrastes, focus, clavier, cibles, mouvement réduit |
| A2 | Honnêteté : aucune preuve, aucun chiffre, aucune fonctionnalité inventés |
| A3 | Traçabilité : chaque police, composant, image et référence a une source réelle |
| A4 | Confidentialité : aucune donnée client envoyée à un service tiers sans accord écrit |
| A5 | Performance : seuils Core Web Vitals (LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1) |
| A6 | Technique : tokens, pas de `transition: all`, pas de défilement horizontal… |
| A7 | Le brief du client l'emporte sur les défauts, jamais sur A1 à A6 |

### 4. Il applique des défauts anti-slop selon le mode

Pas d'eyebrow ni de label en capitales espacées, pas de dégradé violet, pas de verre décoratif, pas de rangée de cartes identiques, pas de police par défaut sans raison, pas le « correctif » crème + terracotta devenu cliché… Chaque défaut peut être levé avec une raison écrite liée au projet. Une page qui se contente de respecter les interdits sans rien affirmer est rejetée : **les interdits ne sont pas un style.**

## Ce que vous recevez

- Le code de la page ou de l'écran, dans votre stack.
- `DESIGN.md` (système visuel) et `PRODUCT.md` (contexte produit) à la racine du projet, pour que les prochaines demandes restent cohérentes.
- Une ligne dans `direction-log.md`, pour que le projet suivant ne ressemble pas à celui-ci.
- Un rapport court : direction choisie et directions écartées, références consultées, défauts levés et leur raison, résultats des contrôles, crédits et licences, contenu d'exemple à valider, et les contrôles qui n'ont pas pu tourner, nommés comme tels.

## Outils recommandés

Le skill fonctionne seul, mais ses contrôles sont meilleurs avec :

| Outil | Rôle | Installation |
| --- | --- | --- |
| `scripts/check-tokens.mjs` (inclus) | Tailles, espacements et polices hors tokens, polices réflexes, échelle trop chargée ; Node seul, sans dépendance | `node scripts/check-tokens.mjs <fichier ou dossier>` |
| [Impeccable](https://github.com/pbakaus/impeccable) | Détecteur de tics et de défauts, sans LLM | `npx impeccable detect <fichier ou URL>` |
| Chrome ou Chromium + Node.js | Captures à 390, 768, 1440 et 1920 px | Déjà présents sur la plupart des postes |
| Lighthouse | Performance en laboratoire | Intégré à Chrome DevTools |

Sans ces outils, l'agent le dit dans son rapport au lieu de prétendre avoir vérifié.

## Contenu du dépôt

```
skills/julio-antislop-design/
├── SKILL.md                     processus, plancher, défauts essentiels, livraison
├── references/                  chargés seulement quand la tâche en a besoin
│   ├── intake.md                cadrage : questions, matière, fiche brief
│   ├── defaults-by-mode.md      règles anti-slop par mode
│   ├── idea-and-direction.md    inventaire, argument, directions, images
│   ├── persuade.md              landing pages, hero, illustration produit, bento
│   ├── operate.md               apps, dashboards, formulaires, graphiques
│   ├── read-and-experience.md   docs, articles, portfolios
│   ├── redesign.md              refonte en 9 passes
│   ├── color.md                 construire une palette en OKLCH
│   ├── typography.md            polices réflexes, choisir depuis le sujet, échelle modulaire
│   ├── spacing.md               échelle d'espacement à trois niveaux
│   ├── motion-and-video.md      mouvement, effets GPU, vidéo en code
│   ├── performance.md           budget par mode
│   ├── tells.md                 tics de pages générées, datés par vague
│   ├── ux-principles.md         principes de l'UX et leurs sources d'origine
│   ├── resources.md             références, bibliothèques, outils, licences
│   └── critique.md              grille de critique sur 6 axes
├── scripts/check-tokens.mjs     contrôle : tailles, espacements, polices hors tokens, polices réflexes
├── templates/                   DESIGN.md, PRODUCT.md, journal des directions
├── CREDITS.md
└── LICENSE
```

## Limites connues

- **Peu mesuré.** Un seul test à l'aveugle (une landing, contre Hallmark et Impeccable, 3 novembre 2026) : classé premier par l'auteur et par un juge indépendant, mais il a révélé une police réflexe (Archivo) et des tailles et espacements hors échelle, corrigés depuis par `typography.md`, `spacing.md` et `check-tokens.mjs`. Un jeu de 5 briefs reste à faire.
- **Rédigé en français.** Les agents le suivent très bien quelle que soit la langue de la demande, et la description déclenche aussi sur des demandes en anglais.
- **Les ressources externes vieillissent.** Sites, bibliothèques et licences cités ont été vérifiés le 3 novembre 2026 ; revérifiez une licence avant un usage commercial.
- **Il ne remplace pas un designer.** Il évite les défauts et force les décisions ; la qualité finale dépend toujours de la matière réelle que vous fournissez (photos, textes, données).

## FAQ

**Pourquoi mon agent me pose-t-il des questions avant de coder ?**
Un modèle qui manque d'information comble les trous avec la moyenne, et c'est ce qui produit des pages génériques. Il pose deux tours de questions au plus, ne demande jamais ce que votre projet dit déjà, et vous montre une fiche brief à valider. Répondez « vas-y » et il décide en annonçant ses hypothèses.

**Je veux un style précis, même s'il figure parmi les « tics ».**
Dites-le : une consigne explicite l'emporte sur tous les défauts anti-slop. Elle ne l'emporte jamais sur l'accessibilité, l'honnêteté ou la performance.

**J'ai déjà un design system.**
Mettez-le dans un `DESIGN.md` à la racine du projet : il prime sur les défauts du skill.

**Mes clients sont sous NDA.**
Le plancher A4 interdit d'envoyer leurs données à un service tiers sans accord écrit. Les outils hébergés (générateurs de maquettes en ligne, serveurs MCP distants) ne sont utilisés que sur projet interne ou avec cet accord.

**Ça marche avec Tailwind, Next.js, Vue, Svelte… ?**
Oui. Le skill dit quoi décider ; le code suit votre stack.

## Contribuer

Les suggestions sont bienvenues, en particulier :

- un nouveau tic de page générée, avec des exemples ;
- une ressource (site de référence, bibliothèque, outil) avec sa licence vérifiée ;
- un cas où le skill a produit un mauvais résultat, avec le brief.

Toute règle ajoutée suit une hiérarchie : normes et accessibilité, puis honnêteté, puis contexte du mode, puis données mesurées, puis consensus entre sources, puis récence, puis goût. Ouvrez une issue avant une grosse modification.

## Crédits

Ce skill est une synthèse de plusieurs projets ouverts et de travaux de recherche, détaillés dans [`CREDITS.md`](skills/julio-antislop-design/CREDITS.md) : Hallmark, Taste Skill, Impeccable, UI/UX Pro Max, Stageshow, Design Taste, avoid-ai-design, et unslop de Damir Sokolovsky ([@heydamir](https://x.com/heydamir)), dont la variante refonte est adaptée. Aucun code de ces projets n'est inclus.

## Licence

[MIT](LICENSE) © 2026 Jimmy Julio.

Exception : `references/redesign.md` est adapté d'unslop et reste sous licence [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), avec crédit obligatoire à Damir Sokolovsky.

---

## English

**julio-antislop-design** is an agent skill (Claude Code, Claude.ai, Codex, Cursor and any Agent Skills host) for building, redesigning and reviewing landing pages, app screens, dashboards, docs and portfolios that look designed rather than generated.

- **The idea comes from the subject**: an inventory of what belongs only to this client, an idea sentence, and a competitor test.
- **Nothing is invented**: no made-up fonts, components, numbers, quotes or features; every decision has a recorded real source.
- **Out of the average**: the agent writes 5 directions with their default probability, drops the 2 most likely, and keeps a log so projects don't repeat each other.
- **Rules depend on the mode**: Persuade, Operate, Read, Experience, plus a redesign variant in 9 ordered passes.
- **An absolute floor**: WCAG 2.2 AA accessibility, honesty, traceability, client confidentiality, Core Web Vitals, technical hygiene.
- **Checked, not promised**: token checker (no raw sizes, spacing or fonts; reflex fonts flagged), automatic detector, screenshots at 4 widths, fresh-eyes critique, and a report that names any check that did not run.

Install:

```bash
npx skills add jrco-dev/julio-antislop-design --skill julio-antislop-design
```

The skill content is written in French; agents follow it regardless of the language of your request, and it triggers on English requests too. Licensed MIT © 2026 Jimmy Julio, except `references/redesign.md`, adapted from unslop by Damir Sokolovsky under CC BY 4.0.
