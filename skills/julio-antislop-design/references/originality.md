# Originalité : sortir du déjà-vu

Retirer les tics ne rend pas une page originale. Les quatre pages faites avec ce skill entre le 2 et le 3 novembre 2026 étaient propres, et deux juges les ont trouvées « déjà vues » : elles convergeaient vers un même style, que ce fichier appelle **le clean anti-slop**. Ce fichier donne des méthodes qui **produisent** de la différence au lieu d'interdire.

## 1. Notre propre convergence (vague 5)

Signature relevée sur nos propres sorties : fond papier clair ; titre en grotesque condensée, aligné à gauche, avec la phrase d'appui à droite ; filets fins et tableaux ; un seul accent (jaune, vert ou bleu) ; sections aérées empilées les unes sous les autres ; listes numérotées. Chaque élément est défendable ; l'ensemble est devinable. Une page qui coche quatre de ces six traits sans que l'archétype tiré l'exige a échoué au test du déjà-vu (§7).

## 2. Le tirage (étape 6, obligatoire)

Le premier choix d'un modèle est celui de tous les modèles. Le tirage le lui retire :

```bash
node scripts/roll.mjs --mode persuader --brief "<le brief en une phrase>" --log direction-log.md
```

Il attribue un **archétype de composition** (§3), **trois cartes de contrainte** (§4, en garder au moins une), une **stratégie de couleur**, une **ligne de polices** de `font-catalog.md` et **deux leviers de risque** (§5), en évitant ce que les 3 dernières lignes du journal ont déjà utilisé. Il écrit le tout dans `.julio/roll.json`.

- La direction se construit **avec** ce qui est tiré : l'archétype porte l'élément de l'inventaire choisi à l'étape 7.
- Re-tirer (`--reroll`) seulement pour une raison factuelle : l'archétype ne peut pas porter le contenu réel (un plateau de jeu sans aucune étape, une carte sans lieu). Le goût n'est jamais une raison. Noter le re-tirage et sa raison dans le rapport.
- Une demande explicite de la personne (un style, une structure) prime sur le tirage (A7) : tirer alors seulement les cartes et les leviers.

## 3. Vingt-quatre archétypes de composition

Un archétype est une **structure**, pas un style : il dit comment la page est bâtie, la direction décide de son apparence.

| # | Archétype | La page est bâtie comme… | Il lui faut | Modes |
| --- | --- | --- | --- | --- |
| C1 | L'objet-page | un objet du monde du sujet (étiquette, ticket, carnet, fiche, emballage, plan) dont chaque partie fonctionne : liens, actions, textes lisibles | un objet imprimé réel du sujet | P, E |
| C2 | L'instrument | un outil qui occupe le premier écran (configurateur, simulateur, calculateur) ; le texte vient après | une donnée ou un réglage réel | P, O |
| C3 | L'échelle unique | un seul élément énorme (chiffre, mot, détail, objet) qui structure toute la page | un élément qui le mérite | P, E |
| C4 | La séquence | une suite d'écrans au défilement, une étape par écran (rituel, fabrication, process) | une vraie suite d'étapes | P, E, L |
| C5 | L'index | une liste ou un tableau riche qui est la page (menu, horaires, catalogue, programme) | un contenu énumérable | P, O, L |
| C6 | L'affiche | une suite d'affiches plein écran, chacune son aplat de couleur et sa composition | peu de texte par section | P, E |
| C7 | Le split permanent | un écran partagé : un côté fixe (image, objet, carte), l'autre défile | une image ou un objet qui tient longtemps | P, E |
| C8 | La carte | une carte, un plan ou une coupe qu'on parcourt | des lieux ou des parties réelles | P, E, L |
| C9 | La frise | une chronologie horizontale (avec repli vertical accessible) | des dates réelles | P, L, E |
| C10 | Le collage | images et textes superposés, découpés, légèrement tournés | de vraies images ou matières | E, P |
| C11 | La conversation | un dialogue : les questions du visiteur et les réponses, dans l'ordre où il les pose | des objections réelles | P |
| C12 | Le document technique | une notice ou fiche technique : cotes, renvois, annexes, légendes | des mesures réelles | P, L |
| C13 | L'almanach | un calendrier ou des saisons comme structure | un rythme réel dans l'année | P, L |
| C14 | La vitrine | le produit seul, en très grand, sur un aplat ; la page tourne autour de lui | une vraie image du produit | P |
| C15 | La typographie seule | aucune image : la typographie fait l'image (taille, coupe, superposition, rythme) | des mots forts | P, E |
| C16 | Le flux | un fil vivant (journal, état, dernières entrées) qui montre que la chose existe | des données réelles mises à jour | P, O |
| C17 | Le comparatif | un avant/après ou un curseur qui sépare deux états | deux états réels | P, O |
| C18 | Le plateau | un parcours de jeu : cases, niveaux, progression | une progression réelle | P, E |
| C19 | L'imprimé artisanal | un zine, une photocopie, des colonnes irrégulières | un sujet qui vient de cette culture | E |
| C20 | La scène | une seule image plein cadre qui dure, le texte posé sur ses parties calmes | une très bonne image | P, E |
| C21 | Le spécimen | une série de fiches de même grille (mesures, origine, état) | des pièces comparables | P, E, L |
| C22 | Le plan de travail | un bureau vu de dessus, des objets disposés (vraies images) | des objets photographiés | E, P |
| C23 | L'archive | dossiers, cotes, tampons, classement | une histoire ou un fonds réel | L, E |
| C24 | La salle de contrôle | des panneaux d'état et de réglage, même en Persuader, si le produit est un système | un produit qui pilote quelque chose | O, P |

Une page peut emprunter un second archétype pour une section, jamais plus.

## 4. Cartes de contrainte

Le tirage en donne trois ; on en garde au moins une, écrite dans le rapport.

1. Une seule couleur et le noir (ou le blanc).
2. Aucun rectangle arrondi, aucune carte.
3. Une seule taille de texte en dehors du titre principal.
4. Le contenu principal en bas du premier écran, pas en haut.
5. La navigation est dans le contenu (`nav-footer.md`, N18).
6. Rien n'est centré.
7. La couleur de fond change à chaque section.
8. Les chiffres du sujet sont la typographie d'affichage.
9. Une seule image, recadrée de plusieurs façons dans toute la page.
10. Une texture tirée de la matière réelle du sujet (papier, tissu, métal, terre), photographiée ou scannée.
11. Deux polices de structure opposée (une très dessinée, une très neutre).
12. Une grille asymétrique (5 ou 7 colonnes) où rien ne s'aligne au centre.
13. Le titre principal fait plus de la moitié de la largeur de l'écran.
14. L'interaction est le premier écran.
15. Emprunter le vocabulaire visuel d'un autre métier (le tirage le choisit : signalétique ferroviaire, pharmacie, cartographie, partition, notice de montage, programme de théâtre, bulletin météo, ticket de caisse, carte à jouer, étiquette de laboratoire).
16. Le texte se lit de bas en haut ou se répartit sur deux axes, pour un seul moment de la page.

## 5. Leviers de risque

Une page originale prend au moins **deux** risques visibles ; le tirage en propose deux, la direction peut les remplacer par deux autres de cette liste :

- **Échelle extrême** : un élément à plus de 40 % de la hauteur d'écran, ou un contraste de tailles de plus de 10 pour 1.
- **Couleur qui porte la page** : un aplat sur 30 à 100 % de la surface, pas un accent.
- **La matière du sujet comme structure** : la page est construite avec elle, pas décorée avec elle.
- **La grille cassée exprès** : un élément qui chevauche, déborde ou sort de l'alignement, une fois, pour une raison.
- **La typographie comme image** : un mot ou un chiffre traité comme une illustration.
- **L'interaction comme argument** : comprendre le produit en l'utilisant.
- **Un rythme inattendu** : une section très courte et très forte entre deux longues, un changement brusque de fond ou de densité.
- **Une image originale** : photo prise pour le projet, scan, illustration commandée.

Le plancher reste entier : contraste, clavier, mouvement réduit, performance.

## 6. Voir les références (étape 5)

On ne s'inspire pas d'un site qu'on a seulement lu. Quand le réseau le permet :

```bash
node scripts/board.mjs https://site-1 https://site-2 https://site-3 --out .julio/board
```

Il capture chaque site en desktop et en mobile, puis compose une planche `board.png`. La regarder avec l'outil de lecture d'image avant d'écrire les directions, et noter pour chaque site la qualité empruntée telle qu'on la **voit**. Si un site ne charge pas, le dire et en prendre un autre dans `site-models.md`.

## 7. Trois heroes avant la page (après l'étape 7)

Avant de construire toute la page, construire **trois premiers écrans** très différents : celui de la direction tirée, et deux autres issus de deux nouveaux tirages (`--reroll`). Chacun dans `.julio/explore/a.html`, `b.html`, `c.html`, avec le vrai texte.

```bash
node scripts/explore.mjs .julio/explore
```

Le script capture les trois à 1440 et 390 px et compose `explore/index.html` (les trois côte à côte) et `explore/board.png`.

- **Personne présente** : lui montrer la page de comparaison ; elle choisit, ou mélange (« la couleur de B sur la structure de A »).
- **Personne absente** : un sous-agent en contexte neuf choisit sur les captures, avec un seul critère : lequel n'a-t-il jamais vu ? Sans sous-agent, garder celui qui partage le moins de traits avec §1 et avec le journal.

Puis construire la page entière depuis le hero choisi.

## 8. Test du déjà-vu (étape 11)

Montrer la capture du premier écran à un regard neuf et lui demander de décrire la page en 12 mots, puis : « À quel style connu ressemble-t-elle ? » Si la réponse nomme un style connu (SaaS sombre néon, éditorial crème et serif, clean anti-slop de §1, bento pastel, brutalisme jaune et noir, verre sur fond pastel, clone Apple, portfolio noir à curseur), changer d'abord le levier de risque le plus visible, puis réinspecter. La critique ajoute l'axe **Originalité** (`critique.md`) : sous 4 sur 5, la page n'est pas livrée.
