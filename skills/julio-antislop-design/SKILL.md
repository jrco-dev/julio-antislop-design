---
name: julio-antislop-design
license: MIT
description: "Conçoit, construit, refond ou relit des landing pages, sites, interfaces d'app, dashboards, docs et portfolios qui ont l'air conçus et non générés : une idée tirée du sujet, des références réelles, un tirage contre la convergence, un plancher d'accessibilité, d'honnêteté et de performance, et aucun tic visuel d'IA. Utiliser ce skill dès qu'une tâche change l'apparence, la mise en page, la typographie, la couleur, le mouvement ou le ressenti d'une interface web, même si l'utilisateur ne dit pas « design » : créer ou refaire une page, rendre un écran moins générique, « plus pro », « premium », « moins IA », relire un design, choisir une police ou une palette, ajouter des animations, faire une vidéo produit en code. Also use for English requests such as build a landing page, redesign this screen, make it look less AI-generated, or review this UI."
---

# julio-antislop-design

Une page générée ressemble à la moyenne de toutes les pages vues : rien n'y est faux, rien n'y a été décidé. Ce skill remplace les défauts par des décisions : **l'idée vient du sujet**, **la direction vient de références réelles et d'un tirage hors de la moyenne**, **un plancher protège** l'accessibilité, l'honnêteté et la performance, et **on regarde** ce qu'on a fait avant de livrer. Retirer les tics ne suffit pas : une page vide et propre est aussi un tic (`references/originality.md`).

## 1. Choisir le chemin

| Demande | Chemin |
| --- | --- |
| Petite demande : un composant, une section, un réglage, une correction, ou « fais vite » | **Rapide** (§3) |
| Nouvelle page, nouveau site, nouvel écran, nouveau système | **Complet** (§4) |
| Refaire un existant | **Complet**, variante refonte (`references/redesign.md`) |
| Relire un design | Grille de `references/critique.md` et liste de `references/tells.md`, sans construire |

## 2. Choisir le mode

Toute règle dépend de ce que le visiteur doit réussir sur cette surface, pas du produit.

| Mode | Le visiteur réussit quand… | Surfaces |
| --- | --- | --- |
| Persuader | il décide et agit | Landing, marketing, tarifs |
| Opérer | il termine une tâche | App, dashboard, admin, réglages |
| Lire | il comprend | Docs, articles, guides, aide |
| Expérience | il est dans l'œuvre | Portfolio, galerie, vitrine |

Deux surfaces dans une demande : chacune dans son mode, palette et typographie partagées.

## Avancer avec la personne

Ne jamais la faire attendre en silence : demander tôt, suggérer à chaque question, montrer dès que quelque chose tient. Quatre rendez-vous sur le chemin complet (fiche brief, trois premiers écrans, première version, livraison), chacun avec une proposition recommandée ; entre deux, jamais plus d'une dizaine d'actions sans rien montrer. Détail : `references/intake.md`, « Rythme ».

## 3. Chemin rapide

1. Lire `DESIGN.md` et `PRODUCT.md` s'ils existent et les respecter. Une question au plus, seulement si un fait bloque.
2. Appliquer le plancher (§5) et les défauts du mode (`references/defaults-by-mode.md`) ; tout passe par les tokens existants, ou une petite échelle déclarée s'il n'y en a pas.
3. `node scripts/check-tokens.mjs <fichier>` et `node scripts/check-render.mjs <fichier>` à zéro erreur ; les captures regardées à 390 et 1440 px.
4. Rapport en 3 lignes : ce qui a changé, contrôles passés, ce qui n'a pas pu tourner.

Pas de cadrage complet, pas de tirage, pas de trois heroes. Si la demande grandit (une page entière), passer au chemin complet.

## 4. Chemin complet, en 12 étapes

Détail de chaque étape : `references/process.md`. Les étapes 1 à 8 se font avant le code.

1. **Lire le projet**, le mode, les images réellement disponibles.
2. **Cadrer en une fois** : projet, goût (tout ce qui remplit `DESIGN.md`), matière ; 12 questions au plus, puis une fiche brief validée une fois. Seule une délégation explicite (« carte blanche ») ou l'absence de personne dispense du goût. `references/intake.md`.
3. **Inventorier le sujet** : 8 à 12 éléments propres au client ; réel, montrable, absent. `PRODUCT.md`.
4. **Écrire l'argument** : une affirmation et sa preuve par section.
5. **Voir des références réelles** : 3 sites de `references/site-models.md`, dont un hors du secteur ; `scripts/board.mjs` pour les capturer.
6. **Tirer la direction** : `node scripts/roll.mjs --mode <mode> --brief "…" --log direction-log.md` (archétype, cartes, couleur, polices, risques), puis 5 directions, les 2 plus probables écartées. `references/originality.md`.
7. **Formuler l'idée** (« [une chose du sujet] devient [un procédé] », test du concurrent), la chose vivante, `DESIGN.md` ; **trois premiers écrans** comparés avec `scripts/explore.mjs`, un seul choisi.
8. **Écrire tous les textes** avant le code ; titres de 2 lignes au plus à 320 px.
9. **Construire sans mouvement** : tokens d'abord (couleurs, polices, échelle typographique, échelle d'espacement), puis hero, sections, visuels (sans photo : `references/visuals.md`, une ancre visuelle du sujet dans les deux premiers écrans), chose vivante.
10. **Contrôler** : `check-tokens.mjs` (le code), `check-render.mjs --shots` (la page rendue), `npx impeccable detect`, performance ; puis la finition (`references/finish.md`) et le contrôle UX des 30 lois (`references/ux-principles.md`).
11. **Faire juger par un regard neuf** : grille de `references/critique.md`, axe Originalité et test du déjà-vu ; corriger, trois tours au plus.
12. **Ajouter le mouvement**, réinspecter, livrer avec le rapport.

## 5. Plancher absolu

Il ne se lève jamais : ni par goût, ni par le brief, ni par une ressource externe.

- **A1 Accessibilité** : WCAG 2.2 AA (contraste 4,5:1, 3:1 grand texte et contrôles), focus visible, clavier, cibles de 24 px (44 visés sur mobile), titres sans saut, textes alternatifs, mouvement réduit, contenu sans JavaScript hors Opérer.
- **A2 Honnêteté** : ni chiffre, ni citation, ni avis, ni logo, ni client, ni fonctionnalité inventés ; le contenu d'exemple est listé dans le rapport et signalé une seule fois sur la page.
- **A3 Traçabilité** : chaque police, composant, image et référence a une source réelle vérifiée et une licence qui couvre l'usage.
- **A4 Confidentialité** : aucune donnée, maquette ou capture d'un client vers un service tiers sans accord écrit.
- **A5 Performance** : LCP ≤ 2,5 s, INP ≤ 200 ms (TBT en laboratoire), CLS ≤ 0,1 ; sinon l'effet devient une image fixe. `references/performance.md`.
- **A6 Technique** : couleurs, polices, tailles et espacements uniquement en tokens ; jamais `transition: all` ni animation de `width`, `height`, `top`, `left` ; aucun défilement horizontal de 320 à 1920 px ; hero en `dvh` ou `svh` ; conteneur plafonné.
- **A7 Brief** : une consigne explicite l'emporte sur les défauts levables, jamais sur A1 à A6.

## 6. Défauts levables, l'essentiel

Chacun se lève avec une raison écrite liée à l'idée ou au brief. Tableau complet : `references/defaults-by-mode.md` ; tics datés : `references/tells.md`.

- Ni eyebrow, ni capitales espacées, ni numérotation 01/02/03 sans vraie séquence.
- Ni dégradé violet, ni texte en dégradé, ni lueur, ni verre décoratif, ni rangée de cartes identiques icône-titre-texte, ni emoji comme icône.
- Aucune police réflexe sans raison de marque (`references/typography.md`) ; sans police fournie, proposer 3 paires (`references/font-catalog.md`).
- Une échelle typographique modulaire et une échelle d'espacement à trois niveaux, rien en dehors (`references/spacing.md`).
- Un fond, une encre, un accent, l'accent environ 4 fois au plus par écran.
- Ni le correctif devenu cliché (crème, serif, terracotta) ni notre propre convergence « clean anti-slop » (`references/originality.md` §1).

## 7. Quand lire quoi

| Situation | Fichier |
| --- | --- |
| Détail des 12 étapes, liste de livraison, format du rapport | `references/process.md` |
| Cadrage : questions, goût, matière, fiche brief | `references/intake.md` |
| Règles par mode | `references/defaults-by-mode.md` |
| Inventaire, idée, images, produit sans photo | `references/idea-and-direction.md` |
| Visuels sans photo, classés par note obtenue ; test du sujet sans texte | `references/visuals.md` |
| Finition : défauts relevés par les juges et leurs contrôles | `references/finish.md` |
| Tirage, archétypes, contraintes, risques, trois heroes, déjà-vu | `references/originality.md` |
| Landing, hero, formulaires, verre, illustration produit, bento | `references/persuade.md` |
| Navigation et pied de page (18 + 15 modèles) | `references/nav-footer.md` |
| App, dashboard, graphiques, formulaires | `references/operate.md` |
| Docs, articles, portfolio, galerie | `references/read-and-experience.md` |
| Refonte | `references/redesign.md` |
| Palette | `references/color.md` |
| Police et échelle typographique ; polices à proposer | `references/typography.md`, `references/font-catalog.md` |
| Espacement et rythme | `references/spacing.md` |
| Mouvement, effets, vidéo en code | `references/motion-and-video.md` |
| Performance par mode | `references/performance.md` |
| Tics d'IA datés | `references/tells.md` |
| Les 30 lois de l'UX, appliquées, et le contrôle UX | `references/ux-principles.md` |
| Sites modèles réels ; galeries, bibliothèques, licences | `references/site-models.md`, `references/resources.md` |
| Critique par un regard neuf | `references/critique.md` |

Ne charger que ce dont la tâche a besoin.

## 8. Livrer

Ne pas livrer tant que le plancher, `check-tokens.mjs`, `check-render.mjs`, le détecteur, les captures, la critique (Originalité 4 sur 5 au moins, aucun style connu au test du déjà-vu) et le journal des directions ne sont pas passés. Liste complète et format du rapport : `references/process.md`. Ne jamais déclarer un contrôle qui n'a pas tourné.
