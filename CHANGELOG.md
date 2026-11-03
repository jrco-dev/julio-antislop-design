# Changelog

Toutes les versions, la plus récente en haut. Le détail des règles est dans le skill ; les scores sont dans `evals/README.md`.

## 0.25.0 — 3 novembre 2026

- `check-render.mjs` : contrôle de la page rendue (défilement, mots coupés, contraste, texte minuscule, cibles, alt, h1 et niveaux de titres, rythme des sections, marges, textes provisoires) dans la langue de la page, avec captures.
- `visuals.md` : registres de visuels sans photo classés d'après les notes obtenues, test du sujet sans texte, ancre visuelle dans les deux premiers écrans.
- `finish.md` : les défauts de finition relevés par les juges, chacun avec sa règle et son contrôle.
- Scripts bilingues (`--lang en`, anglais par défaut dans l'édition anglaise).
- Tests automatiques (`npm test`), intégration continue, `tools/package.py`, `CHANGELOG.md`, `VERSION`.

## 0.24 — 3 nov. 2026

- Plus léger : `SKILL.md` de 9 Ko avec un **chemin rapide** pour les petites demandes, le détail dans `process.md` ; **édition anglaise** complète ; **évaluation** sur 5 briefs (6,8/10) publiée dans `evals/` ; « l'originalité ne remplace jamais la preuve » ; `check-tokens` détecte les eyebrows ; modèles de tickets, guide de contribution, revue trimestrielle automatique ; page d'accueil du projet dans `docs/`, faite avec le skill

## 0.23 — 3 nov. 2026

- Originalité : `originality.md` (24 archétypes de composition, 16 cartes de contrainte, 8 leviers de risque, test du déjà-vu, vague 5 « clean anti-slop ») ; `roll.mjs` tire la direction au lieu de laisser l'agent prendre son premier choix ; `board.mjs` capture les sites de référence pour les voir ; `explore.mjs` compare trois premiers écrans avant de construire la page ; axe Originalité éliminatoire dans la critique ; audit du contenu creux en refonte

## 0.22 — 3 nov. 2026

- Cadrage en une fois : un tour Goût ajouté (caractère, lumière et couleur, polices, densité, formes, images, mouvement, références aimées et rejets) qui remplit `DESIGN.md` avant le code ; 12 questions au plus, puis plus d'aller-retour ; seule une délégation explicite (« carte blanche ») dispense de ce tour

## 0.21 — 3 nov. 2026

- `nav-footer.md` : 18 modèles de navigation et 15 modèles de pied de page relevés sur navbar.gallery, footer.design et unsection.com, avec le cas d'usage, les règles et un exemple réel ; choix noté dans le rapport

## 0.20 — 3 nov. 2026

- Leçons du test « style Apple » : produit physique sans photo (registre que le code sait faire, objet entier), règles du verre demandé par le brief (flouter du réel, jamais des blobs), une seule mention du contenu d'exemple, chose vivante qui change l'objet principal, écart entre sections constant

## 0.19 — 3 nov. 2026

- `site-models.md` : 110 sites modèles réels par mode, avec la qualité à emprunter ; l'étape « références » y puise, dont au moins un site hors du secteur du projet

## 0.18 — 3 nov. 2026

- Sans police fournie, l'agent propose 3 paires affichage + texte tirées du sujet et d'un catalogue de polices vérifiées (`font-catalog.md`) au lieu de choisir en silence

## 0.17 — 3 nov. 2026

- Liste datée des polices réflexes (dont Archivo, relevée au test à l'aveugle) ; échelle typographique modulaire par mode ; `spacing.md` ; script `check-tokens.mjs` ; plancher A6 étendu aux tailles et espacements

## 0.16 — 3 nov. 2026

- Règles de pied de page et de formulaire de commande, dates calculées en direct, nouveaux tics, issus du test à l'aveugle

## 0.15 — 2 nov. 2026

- Cadrage façon Claude Design : deux tours de questions, demande de matière, fiche brief validée
