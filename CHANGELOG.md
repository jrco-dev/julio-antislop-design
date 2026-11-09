# Changelog

Toutes les versions, la plus récente en haut. Le détail des règles est dans le skill ; les scores sont dans `evals/README.md`.

## 0.27.0 — 9 novembre 2026

Leçons de Taste Skill 2.5.1 (Leonxlnx, MIT), réécrites dans nos propres règles ; aucun code repris, conflits tranchés par la hiérarchie des sources (`CONTRIBUTING.md`).

- `copy.md` : fiche des faits avant la première phrase, carte de voix (registre choisi avec sa raison, jamais la voix par défaut du modèle), premier écran qui nomme la catégorie avec un fait dur, intertitres qui nomment une chose, boutons verbe + objet, budgets de mots et de procédés, un fait une formulation, ce qui change par mode.
- `copy-lint.mjs` : contrôle du texte sans navigateur, sur la page HTML comme sur le brouillon Markdown, en français et en anglais (titre vague ou en question, intertitres interchangeables, boutons vagues ou sans nom, plus de deux actions dans le hero, formules toutes faites, mots creux, « pas seulement X, c'est Y », cadences en fragments, négations en série, cadres de contraste, chiffres de preuve sans source, restes de conversation ou de brouillon, textes provisoires, année périmée, budget de mots) ; `--mode`, `--allow` pour les mots du client.
- `photos.md` : la vraie photographie d'abord ; photos de remplacement sous licence ouverte vérifiée quand le client n'en a pas, créditées en une ligne et listées dans le rapport, jamais présentées comme le produit, l'équipe ou le lieu du client ; produit sans photo : registres de `visuals.md`.
- `moments.md` : le hero entre une fois, un ou deux moments tirés par page, jamais de fondu sur chaque section ; shaders et grandes scènes réservés aux sujets techniques ; tout se pose en mouvement réduit.
- Type d'activité (logiciel, jeu, matériel, produit, service, lieu) qui fixe le budget visuel en Persuader ; rythme par écran, bords égaux, un seul système ; nouveaux tics datés.
- README entièrement en anglais.

## 0.26.0 — 3 novembre 2026

- `ux-principles.md` : les 30 lois du catalogue Laws of UX (Jon Yablonski), réécrites depuis leurs sources d'origine, chacune avec règle, seuil, modes et vérification ; garde-fou contre les manipulations ; contrôle UX en 10 points avant livraison.
- `check-render.mjs` : loi de Hick (plus de 7 liens de navigation), loi de Miller (formulaire de plus de 8 champs sans groupes), effet de Von Restorff (plusieurs couleurs de boutons pleins au premier écran).
- Rythme avec la personne (`intake.md`) : questions toujours accompagnées d'une réponse recommandée, premier message rapide, quatre rendez-vous courts, point d'étape au-delà d'une dizaine d'actions, l'option recommandée prise si personne ne répond.

## 0.25.0 — 3 novembre 2026

- `check-render.mjs` : contrôle de la page rendue (défilement, mots coupés, contraste, texte minuscule, cibles, alt, h1 et niveaux de titres, rythme des sections, marges, textes provisoires) dans la langue de la page, avec captures.
- `visuals.md` : registres de visuels sans photo classés d'après les notes obtenues, test du sujet sans texte, ancre visuelle dans les deux premiers écrans.
- `finish.md` : les défauts de finition relevés par les juges, chacun avec sa règle et son contrôle.
- Scripts bilingues (`--lang en`, anglais par défaut dans l'édition anglaise).
- Tests automatiques (`npm test`), intégration continue, `tools/package.py`, `CHANGELOG.md`, `VERSION`.
- Évaluation : 7,0 sur 10 (6,8 en 0.24) ; visuels 5,4 → 6,2, premier écran 7,2 → 7,8 ; espacement inchangé à 6,2.

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
