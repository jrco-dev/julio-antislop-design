# Visuels quand il n'y a pas de photo

Les visuels sont le point le plus faible mesuré (5,4 sur 10 sur les 5 briefs d'évaluation du 3 novembre 2026). Sans photo fournie, l'agent dessine trop peu, ou mal, ou remplace le produit par une métaphore. Ce fichier classe les registres d'après les notes obtenues, du meilleur au pire, et donne un test simple.

## Le test du sujet sans texte

Masquer tout le texte du premier écran (ou le flouter) et regarder la capture : peut-on nommer le sujet (un vélo, de la vanille, une trésorerie, un compost) ? Si non, le premier écran n'a pas d'ancre visuelle. Relevé sur l'atelier vélo : ni le mot « vélo » ni aucun vélo au premier écran, lu comme un garage auto.

Chaque page a **une ancre visuelle propre au sujet dans les deux premiers écrans**.

## Les registres, du mieux noté au moins bien noté

| Rang | Registre | Note obtenue | Quand | Comment |
| --- | --- | --- | --- | --- |
| 1 | **Le vrai produit rendu en code** : un fragment réel d'interface, de fichier, de document ou de résultat, avec de vraies valeurs | 9 (refonte JRCO v1 : le fichier de tri qui devient une slide) | Tout produit qui produit quelque chose d'affichable : logiciel, service de données, document, calcul | Le construire en HTML et CSS à l'échelle 1:1, avec les vraies étiquettes ; l'animer seulement s'il démontre (`persuade.md` §4) |
| 2 | **Les vraies données du sujet mises en image** | 7 (grille des 52 cotisations, calendrier de récolte) | Tout sujet qui a des nombres, des dates, des quantités | Une grille d'unités, un calendrier, une frise, une carte ; chaque marque est une donnée réelle |
| 3 | **Dessin technique** : coupe cotée, plan, vue éclatée en traits, avec légendes et mesures | 6 (gousse sur la règle) | Objet physique sans photo | Traits d'une seule épaisseur, légendes en texte réel, mesures du brief ; jamais de matière simulée (`idea-and-direction.md` §7) |
| 4 | **La typographie comme image** : les chiffres ou les mots du sujet en très grand | 6 à 7 | Prix, mesure, durée, nom fort | Un seul moment par page ; le chiffre dit quelque chose de vrai |
| 5 | **Motif tiré de la matière du sujet** : un motif SVG construit depuis une forme du sujet (rayons d'une roue, nervures d'une feuille, trame d'un tissu) | non encore mesuré | En fond de section ou en séparation, jamais comme seul visuel | Construit en code depuis la forme réelle, couleur de la palette, discret derrière le texte (contraste A1) |
| 6 | **Emplacements honnêtes** aux bons formats, étiquetés | 5 (portfolio) | Le travail est fait de photos qui viendront | Ratio et taille exacts, étiquette sobre ; fond neutre autour, pour ne pas concurrencer les futures photos |
| 7 | **Objet dessiné en formes plates** | 4 (enceinte lue comme un thermomètre, composteur absent) | À éviter | Passer au rang 3 |
| 8 | **Métaphore à la place du produit** | 2 (refonte JRCO v2) | Jamais seule | L'archétype organise autour du produit, il ne le remplace pas (`originality.md` §1 bis) |

## Chercher de vraies images avant de dessiner

1. Les demander au cadrage (tour 3) : c'est ce qui fait le plus monter la note.
2. Avec réseau : images libres de droits du monde du sujet (Openverse, Wikimedia Commons, collections de musées), sous licence commerciale, téléchargées et créditées (`resources.md`). Elles montrent le monde autour du client, jamais son produit, sa salle ou son équipe.
3. Avec un outil de génération d'image : générer le monde ou la matière, signalé comme tel, jamais le produit du client comme s'il était réel.
4. Sinon, les rangs 1 à 5 ci-dessus.

## Règles communes

- Un visuel dominant par écran vaut mieux que plusieurs petits.
- En mode Expérience avec des photos à venir : fond neutre, l'image d'abord ; les aplats saturés vont dans les intercalaires, pas derrière les photos.
- Chaque visuel a un texte alternatif qui dit ce qu'il montre, ou `alt=""` s'il est décoratif.
