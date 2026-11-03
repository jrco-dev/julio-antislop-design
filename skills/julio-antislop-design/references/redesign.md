# Refonte d'un existant

La refonte corrige le métier et garde le produit : ses fonctionnalités, ses contenus et l'ordre de ses sections restent. Elle remplace les étapes 3 à 9 du processus ; les étapes 10 à 12 restent identiques.

## 1. Regarder l'écran

Trouver les fichiers qui le rendent. Si possible, lancer l'app ou ouvrir la page et prendre une capture : on juge ce que les gens voient, pas seulement le code. Avec seulement une URL, extraire le système du vrai site (couleurs, polices, espacements) plutôt que le deviner. Avec seulement une capture, reconstruire l'écran en un fichier HTML statique fidèle et le traiter comme l'original.

## 2. Audit écrit

Parcourir `tells.md` et lister chaque signe trouvé, une ligne chacun, avec l'endroit où il se trouve. Auditer aussi **le contenu** : marquer chaque bloc creux de l'existant (grille d'adjectifs sans preuve, liste d'étapes sans contenu, promesse non chiffrée, bouton qui ne dit pas ce qui se passe) et dresser la liste des preuves qui manquent (chiffres, clients, cas, visages, identité cohérente). Ces blocs ne sont ni gardés tels quels ni réécrits avec des faits inventés : proposer au propriétaire une reformulation vérifiable ou la suppression, et lui demander les preuves au cadrage (tour 3) avant de construire. Tenir compte du mode : en Opérer, des filets discrets ou une monospace sur les compteurs sont permis par `defaults-by-mode.md` et ne sont pas des signes.

## 3. Diagnostic

- **Slop lourd** (signes partout : couleur, typo, icônes, texte) : processus complet.
- **Slop léger** (écran surtout bien conçu) : corriger seulement ce que l'audit a trouvé ; garder la marque, la palette, la typo, la mise en page et les visuels. Les grandes idées vont dans le rapport comme propositions.
- **Pas de slop** : le dire, proposer 2 ou 3 retouches chiffrées au plus, n'appliquer qu'avec accord. Ne jamais changer un bon écran pour le plaisir.

## 4. Direction en 5 lignes, validée avant toute modification

Montrer l'audit et la direction à l'utilisateur et attendre sa réponse : changer de direction plus tard oblige à tout refaire.

- **Produit** : ce qu'il fait et pour qui, en une phrase.
- **Caractère** : 2 ou 3 mots concrets (« calme, exact, un peu chaud »). « Clean », « modern », « sleek », « minimal » et « premium » sont interdits : ils décrivent tous les gabarits.
- **Monde** : le lieu ou la matière auquel le produit appartient naturellement ; il teinte les neutres, l'accent et le visuel.
- **Moments** : 1 ou 2 endroits riches en couleur, en matière et en détail, choisis dans ce que le produit montre.
- **Signature** : un seul petit détail propre au produit, utilisé partout où il a sa place et nulle part ailleurs.

Une vraie marque (logo, couleur, police qui n'est pas du slop) se garde. Un dégradé violet-bleu, des étincelles ou une lueur dans un logo ne comptent pas comme marque sauf si l'utilisateur le dit. Ne jamais renommer le produit.

## 5. Neuf passes, dans cet ordre

Finir chaque passe sur tout l'écran avant la suivante ; l'espacement d'abord, car tout se lit autrement une fois le rythme juste.

1. **Espacement** : grille de 4 px, mêmes éléments mêmes tailles, groupes plus serrés que l'espace entre groupes, alignements en colonnes, suppression des valeurs isolées (`mt-[13px]`).
2. **Couleur** : une rampe de neutres teintée vers le monde, trois rôles de texte, un accent rare et contrasté ; suppression des dégradés de teinte, lueurs, ombres colorées, halos et bordures néon ; bordures selon le mode (filet à 6-10 % en Opérer, aucun filet décoratif en Persuader).
3. **Icônes** : chaque emoji devient une icône d'un seul jeu, une taille, un trait, couleur du texte ; suppression des icônes qui n'apportent rien.
4. **Texte** : titres qui disent ce que fait le produit et pour qui ; pas de point d'exclamation ; pas de titre « Bienvenue, Prénom ! 👋 » ; labels courts ; variations avec leur référence ; pas de point final sur les éléments courts ; promesses invérifiables supprimées ou confirmées par l'utilisateur ; données d'exemple plausibles ; badges « PRO », « New ✨ » retirés sauf nécessité.
5. **Typo** : police choisie pour le caractère ; graisses 400-500, 600 au plus ; casse de phrase partout ; pas d'interlettrage négatif sur le petit texte ; un format de chiffres en `tabular-nums` ; pas d'italique d'emphase.
6. **Mise en page** : sections et ordre conservés ; proportions d'app réelles ; hero en scène ou en split asymétrique ; une action principale et une secondaire.
7. **Détails** : rayons imbriqués ; keycaps ; un graphique principal ; cartes de stats = label, chiffre, variation ; largeurs variées ; logo = nom du produit dans la police principale plus une marque simple.
8. **Visuels** : suppression des blobs, orbes, nébuleuses, robots et cerveaux lumineux ; un hero montre quelque chose de vrai (scène du monde ou aperçu du produit en code avec un moment).
9. **Mouvement** : suppression des boucles sans raison, de `transition-all`, de `hover:scale` sur les cartes, des ressorts à rebond, de la parallaxe ; une courbe d'easing, peu de durées ; une entrée au chargement.

Après les passes : consulter des références si la direction l'exige, et ajouter la direction au journal pour que les projets suivants s'en écartent.

Test final : en remplaçant le nom du produit par celui d'un autre, l'écran fonctionne-t-il encore ? Si oui, pousser la direction dans le texte, le visuel et la signature.

Méfiance envers le « look gabarit » qui guette un écran nettoyé : fond gris #161616, Inter, texte blanc et l'ancienne couleur de marque sur un seul bouton. Ce n'est pas du slop, mais c'est l'absence de décision.

Crédit : passes et direction adaptées d'unslop, par Damir Sokolovsky (@heydamir), licence CC BY 4.0.
