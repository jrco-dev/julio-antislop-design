# Défauts levables, par mode

Ces règles s'appliquent par défaut. Chacune peut se lever avec une raison écrite liée à l'idée du projet ou au brief, notée dans le rapport. Au-delà de 3 levées sur un projet, écrire le style maison dans `DESIGN.md`.

Pourquoi par mode : un même procédé est un tic sur une landing et une convention utile dans un dashboard. Une page marketing se lit et se fait défiler ; une app se travaille des heures.

| Sujet | Persuader | Opérer | Lire | Expérience |
| --- | --- | --- | --- | --- |
| Dégradés, lueurs, verre | Aucun, sauf le moment signature s'il sort de la matière du sujet, avec repli fixe | Aucun | Aucun | Permis s'ils font partie de l'œuvre, avec repli |
| Ombres | Seulement sur ce qui flotte (menu, dialogue). Une ombre a un décalage et un flou ; un halo coloré sans décalage est une décoration. Élévation déclarée une fois : bordure ou ombre, pas les deux | Idem | Idem | Idem |
| Filets et bordures | Aucun filet décoratif ; séparer par l'espace et un écart de ton | Filets discrets, couleur du texte à 6-10 % d'opacité | Filets pour tableaux et notes | Comme Persuader |
| Rayons | Carré ou pastille, décidé une fois ; médias à angles droits | Rayons imbriqués : contrôles 8-10 px, cartes 12-16 px, panneaux 14-20 px ; rayon intérieur = rayon extérieur − padding, jamais sous 4 px | Comme Opérer, sobre | Comme Persuader |
| Monospace | Code uniquement | Code, compteurs, métadonnées, axes de graphiques, en couleur atténuée | Code et identifiants | Code, sauf si la mono est la matière de l'œuvre |
| Eyebrow, capitales espacées, numérotation 01/02 | Non. Défaut le plus fort : ne se lève que si le brief l'exige ; la numérotation seulement pour une vraie séquence | Idem | Idem | Idem |
| Polices | 1 ou 2 familles tirées du sujet, aucune police réflexe (`typography.md` §1) sans raison de marque | Idem ; graisses 400-500, 600 rare | Une vraie police de lecture longue | Idem Persuader |
| Échelle de texte | Modulaire, texte 17 → 19 px, ratio 1,2 → 1,333 ; 5 crans utilisés au plus, qui sautent des crans | Ratio 1,125 → 1,2, texte 14 → 16 px ; la hiérarchie vient aussi de la couleur | Ratio 1,2 → 1,25, texte 18 → 20 px | Libre, une seule échelle |
| Espacement | Échelle de base 4 px, trois niveaux (intérieur 4-16, groupe 16-48, section 96-192 px desktop) ; aucune valeur brute | Même échelle, section ramenée à 48 px ; densité par crans plus petits | Rythme de lecture : titre plus près de ce qui suit | Comme Persuader |
| Couleur | Un fond, une encre, un accent ; accent environ 4 fois au plus par écran ; aplats de couleur entiers permis par section | Fonds et surfaces neutres ; la couleur va dans l'accent, les graphiques et les moments | Neutre ; accent pour les liens et l'état | Libre, au service de l'œuvre |
| Cartes et grilles | Jamais de rangée de cartes identiques ni de tuile icône-titre-texte ; bento seulement selon `persuade.md` | Cartes et panneaux répétés normaux ; un graphique principal nettement plus grand | Rarement utiles | Grille de l'œuvre, une pièce en focus |
| Composition | Aligné à gauche, un seul moment centré ; chaque section diffère de sa voisine ; ordre dicté par l'argument | Dictée par la tâche ; densité élevée permise ; sections et ordre conservés en refonte | Une colonne de lecture | L'œuvre au premier écran |
| Quantité de texte | Prose courte (environ 80 mots par écran) ; l'information attendue (menu, tarifs, programme) est complète, en contenu structuré | Libellés courts | Prose longue permise | Minimale |
| Mouvement | Un mouvement signature ; entrées décalées de 60 à 90 ms, montées de 16 à 32 px, déclenchées une fois, jamais sur chaque section ; feedback sur chaque contrôle | Une entrée au chargement ; feedback de 150 à 300 ms | Presque aucun | Libre dans le budget |
| Propriétés animées | `transform` et `opacity` ; `clip-path` et masque seulement pour le moment signature, s'il tient 60 images/s sur mobile moyen | `transform` et `opacity` | Idem | Comme Persuader ; jamais de flou animé sur grande surface |
| Mots | Aucun mot creux (unlock, seamless, supercharge, elevate, effortless, all-in-one…), ni « Get started » ou « Learn more », ni point d'exclamation dans l'interface | Idem ; une variation dit à quoi elle se compare (« +12 % vs le mois dernier ») ; pas de point final sur titres, labels et boutons | Idem | Idem |
| Clair ou sombre | Selon la scène d'usage (qui, où, sous quelle lumière), jamais selon la catégorie ; les deux variantes conçues ensemble si les deux existent | Idem | Idem | Idem |
| Genre d'activité | Fixe ce qui mène et si les effets sont permis (`persuade.md` §1 bis) | Non | Non | Même tableau, genre d'œuvre |
| Rythme d'écran | Hero seul au premier écran ; sections de 1 ou 2 écrans (`persuade.md` §2) | Non | Non | Comme Persuader |
| Légendes sous les images | Aucune ; crédits dans le pied de page | Légendes de graphiques seulement | Oui : figures, photos | Oui pour les œuvres |

## Règles communes à tous les modes

- Aucun emoji comme icône : un seul jeu d'icônes (celui du produit d'abord, sinon un jeu choisi exprès, jamais Lucide par réflexe), une taille, une épaisseur de trait.
- Aucun hex en dur dans les composants ; aucune palette par défaut de framework (`indigo-500`, `violet-600`, `slate-900`, shadcn `zinc` non retouché).
- Pas d'italique ni de couleur sur un seul mot d'un titre.
- Chiffres en `tabular-nums` et un seul format sur l'écran.
- Pas de tracking négatif sur le petit texte ; tracking des titres d'affichage entre -0,02 et -0,04em, jamais au-delà.
- Surfaces du navigateur thématisées : sélection de texte, curseur de saisie, barres de défilement, anneaux de focus, décalage du soulignement.
- **Un seul système** (d'après Taste Skill) : une paire de boutons, un style de carte, une échelle de rayons, un aspect de lien, une échelle de titres ; deux niveaux de boîtes au plus.
- Aucun accent, fond, teinte ou dégradé violet ou lavande, sauf vraie couleur de marque du client ; les logos tiers gardent les leurs.
- Pages d'exemple : coordonnées en `.example`, aucun téléphone au format réel, numéro de rue, code postal, SIRET, RCS ou TVA (A2 : un faux réaliste se lit comme un vrai).

## Les interdits ne sont pas un style

Additionnés, ces défauts dessinent un look prévisible : plat, carré, sans filet ni ombre, grande typo alignée à gauche. Une direction qui se contente de les respecter est une « esthétique d'évitement » et elle est rejetée. Les défauts disent ce qu'on ne fait pas par habitude ; l'idée dit ce qu'on fait.
