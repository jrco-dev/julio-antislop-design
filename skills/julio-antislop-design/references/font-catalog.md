# Catalogue de polices, par trait du sujet

Ce catalogue sert quand l'utilisateur ne fournit pas de police : l'agent y puise des **propositions**, il ne choisit pas à la place de l'utilisateur sans le dire. Chaque nom a été vérifié sur Google Fonts (par son miroir Fontsource) le 3 novembre 2026, sous licence OFL ou Apache, donc utilisable sur le web. Re-vérifier un nom avant de l'utiliser (A3).

Un catalogue fixe devient vite le prochain réflexe. Trois garde-fous :

- **Ne jamais prendre la première police d'une ligne par habitude**, et ne pas reprendre une police d'affichage utilisée dans les 3 dernières directions du journal.
- **Le catalogue est un point de départ** : si le monde du sujet appelle autre chose, chercher au-delà (Google Fonts filtré par catégorie, Fontshare, fonderies libres) avec la méthode de `typography.md` §2.
- **Une police entre dans `typography.md` §1 (réflexes)** dès qu'elle apparaît dans deux projets générés sans lien : la retirer alors d'ici.

## Lire le sujet

Avant de choisir une ligne, relever dans l'inventaire les écritures réelles du monde du client et en tirer un trait dominant. Exemples :

| Ce que le sujet montre | Trait | Lignes à regarder |
| --- | --- | --- |
| Caisses, sacs, plaques, panneaux, outils de mesure | Marquage, signalétique | A |
| Instruments, données, code, plans, laboratoire | Technique, précision | B |
| Soin, enfance, association, service public, santé | Humain, lisible, accessible | C |
| Livres, presse, recherche, juridique, lecture longue | Lecture, texte | D |
| Atelier, alimentaire, agriculture, bâtiment, objets robustes | Robuste, fabriqué | E |
| Architecture, mode, design, objets épurés | Construit, géométrique | F |
| Musique, festival, sport, culture jeune, événement | Énergie, affiche | G |
| Carnets, fiches, tampons, archives, documents administratifs | Écrit à la main, tapé | H |

## Les lignes

| Ligne | Affichage | Texte associé | Ce qu'elle porte bien | Attention |
| --- | --- | --- | --- | --- |
| A. Marquage | Big Shoulders Display, Big Shoulders Stencil, Saira Extra Condensed, Sofia Sans Extra Condensed, Antonio, Mohave | Chivo, Public Sans, Libre Franklin | Chiffres, mesures, lots, horaires ; titres courts et denses | Pochoir et extra-condensé seulement en affichage ; jamais en texte courant |
| B. Technique | Red Hat Display, Schibsted Grotesk, Tomorrow, Host Grotesk | Onest, Golos Text, Reddit Sans ; mono : Martian Mono, Azeret Mono, Chivo Mono, Spline Sans Mono, Red Hat Mono | Produits techniques, outils, données | La mono reste pour le code et les valeurs (`defaults-by-mode.md`), jamais pour « faire tech » |
| C. Humain | Rethink Sans, Commissioner, Funnel Display | Atkinson Hyperlegible Next, Alegreya Sans, Asap, Funnel Sans | Santé, services, publics larges, mode Opérer | Atkinson Hyperlegible Next est conçue pour la lisibilité basse vision : bon défaut pour les interfaces publiques |
| D. Lecture | Young Serif, Gloock, Besley, Petrona | Literata, Source Serif 4, Spectral, Alegreya, Gelasio, Vollkorn | Lecture longue, docs, éditorial réel | Une serif n'est pas un raccourci vers « premium » (vague 3) : la choisir pour un vrai texte à lire |
| E. Robuste | Zilla Slab, Rokkitt, Podkova, Arvo | Bitter, Aleo | Mécanes : atelier, alimentaire, terrain, emballage | Éviter le cosplay « rétro » : pas de texture vieillie ajoutée |
| F. Construit | Jost, Urbanist, Familjen Grotesk, Afacad | Lexend, Work Sans, Karla | Architecture, design, objets | Les géométriques fatiguent en texte long : texte associé plus ouvert |
| G. Énergie | Dela Gothic One, Gasoek One, Climate Crisis, Bungee, Anybody, Darker Grotesque, Shrikhand, Bagel Fat One | Rubik, Wix Madefor Display, Libre Franklin | Affiches, festivals, sport, culture | Une seule voix forte ; Climate Crisis et Anybody ont des axes : un seul réglage par page, sauf moment signature |
| H. Écrit | Courier Prime, Cutive Mono, Kalam, Gochi Hand | Une police de texte des lignes C ou D | Fiches, tampons, notes, archives | En accent seulement (un champ, une annotation), jamais en titre principal ni en texte courant |

## Selon le mode

- **Persuader, Expérience** : une voix d'affichage avec un point de vue, tirée du sujet, et une police de texte sobre. Proposer des paires de lignes différentes pour que l'utilisateur ait un vrai choix.
- **Opérer** : une police de travail lisible et stable compte plus qu'une voix ; une seule famille suffit souvent (lignes B ou C, ou la pile système). La liste réflexe de `typography.md` §1 ne vise ici que la voix d'affichage et la marque, pas le texte d'interface.
- **Lire** : la police de texte d'abord (ligne D, ou C pour l'écran), l'affichage ensuite.
