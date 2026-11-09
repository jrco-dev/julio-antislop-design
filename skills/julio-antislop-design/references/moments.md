# Moments

Un moment est l'endroit d'une page dont le visiteur se souvient, en dehors du contenu. Une page a l'entrée du hero une fois au chargement, un moment tiré du catalogue ci-dessous (deux sur une page longue), et les retours au survol et à la pression de `references/motion-and-video.md` §1. Rien d'autre ne bouge. La structure de ces trois couches, plusieurs seuils et le catalogue viennent de Taste Skill 2.5.1 (Leonxlnx, MIT), réécrits ici et crédités là où un chiffre vient d'eux. « Une méthode, pas un style » : le catalogue dit ce que fait un moment, jamais à quoi la page doit ressembler.

## 1. Qui reçoit quoi, par mode

| Mode | Entrée du hero | Moments | Effet (shader, WebGL, grande scène) |
| --- | --- | --- | --- |
| Persuader | Oui | 1, ou 2 sur une page longue (8 sections ou plus) | Sujets techniques seulement, 1 au plus (§6) |
| Expérience | Oui, sauf si l'œuvre s'ouvre d'elle-même | 1 ou 2, au service de l'œuvre, jamais par-dessus | Sujets techniques ou œuvre qui l'appelle, budget dans `references/performance.md` |
| Lire | Non | Aucun : on vient lire | Aucun |
| Opérer | Une entrée au chargement (`references/operate.md`) | Aucun ; seulement des micro-interactions : retours, changements d'état, un nombre qui se met à jour | Aucun |

Le moment tiré compte comme le **mouvement signature** (`references/motion-and-video.md` §1) ; une page longue peut en ajouter un second dans une autre section, jamais 3.

## 2. L'entrée du hero

Une fois au chargement ; ensuite le hero reste immobile pour toute la visite.

- Le titre monte ligne par ligne hors de masques, environ 700 ms par ligne, lignes à 80 ms d'écart ; le chapeau et les boutons suivent en montant d'environ 12 px ; l'image du hero se pose de l'échelle 1,05 à 1. Le tout dure environ 1,1 s, une seule courbe de décélération, sans dépassement (chiffres de Taste Skill).
- Seulement `transform` et `opacity`. L'image n'est jamais cachée et n'apparaît jamais en fondu depuis le vide.
- **Rien ne reste caché** : le texte est dans le HTML à sa place finale ; sans script, si le script arrive en retard (minuterie de secours d'environ 0,7 s) ou en mouvement réduit, le hero s'affiche tel qu'écrit.
- Jamais d'écran de chargement, de porte d'entrée, de seconde entrée, ni d'entrée rejouée au défilement.

## 3. Le catalogue

Les identifiants de Taste sont indiqués pour ouvrir ses démos. La colonne « Convient » utilise nos modes (P = Persuader, E = Expérience) et le type d'activité. « Local » : un lieu, une marque de produit, un cabinet ou une agence. « Technique » : logiciel, IA, fintech, matériel, jeu vidéo.

| Moment (id Taste) | Ce qui se passe | Convient | Il faut | En mouvement réduit | Coût |
| --- | --- | --- | --- | --- | --- |
| **La phrase s'allume** (`word-highlight`) | Une grande phrase commence à demi-encre, encore lisible à environ 4:1 ; chaque mot passe à l'encre pleine en croisant le milieu de l'écran, un mot clé prend l'accent ; elle s'inverse quand on remonte | P, E · local et technique | Une phrase vraie de 12 à 40 mots, dans sa propre section | La phrase entière à l'encre | Couleur par mot, aucun calcul de mise en page ; tourne sur mobile |
| **Chapitres en photos** (`photo-chapters`) | Une photo pleine largeur par chapitre ; chaque nouvelle photo monte du bas par-dessus la précédente, un court texte de chapitre sur un panneau ; environ deux tiers d'écran de défilement par chapitre | P, E · local | 3 à 5 chapitres, chacun avec un titre, deux lignes et une vraie photo utilisée nulle part ailleurs sur la page | Les chapitres côte à côte, chaque photo au-dessus de son texte | Découpe et transformation ; section haute de 3 à 4 écrans ; tourne sur mobile tenu droit |
| **Étapes épinglées** (`pinned-chapters`) | Une liste d'étapes défile à côté d'un cadre qui reste en place et montre l'image ou l'écran de l'étape en cours | P · produit, service, technique | 2 à 4 vraies étapes (une commande, une réservation, une installation), une image ou un écran chacune | Des rangées simples, chaque étape avec son image | `position: sticky`, une lecture du défilement par image ; deux écrans de haut |
| **La photo se révèle** (`picture-develops`, aspect film) | Une grande photo apparaît une fois, à son entrée, depuis un tirage gris pâle : les noirs d'abord, puis la couleur ; environ 1,6 à 1,8 s | P, E · local | Une photo forte, au moins la moitié du conteneur en largeur, qui est le sujet de la section | La photo telle quelle | Filtre sur une image, une fois ; tourne sur mobile |
| **Les chiffres défilent** (`counter-rolls`) | 2 à 4 chiffres de preuve défilent jusqu'à leur valeur une fois, dans leur propre rangée | P · technique | De vrais chiffres du brief (prix, quantité, durée), jamais un résultat inventé | Les chiffres finaux | Transformation sur les chiffres ; largeur réservée, donc aucun décalage de mise en page |
| **Les lettres s'assemblent** (`letters-assemble`) | Une phrase très courte, en très grand ; ses lettres arrivent de positions éparses dans la ligne au fil du défilement, et la ligne est complète avant que la section atteigne le haut | P, E · technique | 2 à 5 mots, environ 28 lettres au plus | La phrase telle qu'écrite | Transformation par lettre |
| **Une ligne vers un nouveau fond** (`line-carries-colour`) | Une section sur un nouveau fond : un panneau en retrait, dans l'ancien fond, est effacé par une ligne qui monte de son bord inférieur ; chaque bloc apparaît entier une fois la ligne passée | P · technique | Une section sur un autre fond que la précédente | La section sur son fond | Découpe (`clip-path`) sur un panneau |
| **Un iris vers un nouveau fond** (`iris-opens`) | Même mise en place, mais un disque à fin anneau d'accent s'ouvre dans le panneau | P · technique | Idem | Idem | Découpe sur un panneau |
| **Rangée de mots** (`marquee-row`) | Une rangée de vrais mots (métiers, villes, formats) glisse lentement, avec un bouton pause | P · technique | 6 à 14 vrais mots, jamais de logos, jamais de clients inventés | Une rangée fixe, renvoyée à la ligne | Transformation sur une rangée |
| **Lumière au pointeur** (`cursor-spotlight`) | Dans le cadre du hero, une lumière douce suit le pointeur | P · technique, hero seulement | Un cadre de hero qui contient le produit | La lumière reste fixe | Souris seulement, rien au tactile |
| **Titre liquide** (`liquid-type`) | Un titre court ondule comme de l'eau sous le pointeur, par un filtre SVG | P, E · technique | 2 à 6 mots, en grand | Le titre tel qu'écrit | Un filtre SVG, actif seulement pendant une onde |
| **Photo liquide** (`liquid-hover`) | Une photo détaillée ondule sous le pointeur | P, E · technique | Une photo aux bords nets et détaillée (un ciel uni ne montre rien) | La photo seule, sans canvas | 1 contexte WebGL, monté seulement près de l'écran |

Écartés exprès : les moments retirés par Taste, et `giant-type-pass`, parce qu'une photo qui glisse dans des lettres est une parallaxe.

**Activités locales** (café, boutique, maison d'hôtes, cabinet, clinique) : seulement La phrase s'allume, Chapitres en photos, Étapes épinglées (produit et service seulement) et La photo se révèle. Ils s'appuient sur les photos ou les mots du client, ne bougent que dans leur section et ne demandent pas de WebGL (Taste Skill). Chapitres en photos et Étapes épinglées ne partagent jamais une page.

## 4. Comment choisir

Le goût ne décide jamais ; le tirage décide.

1. **Lister les candidats** : les moments dont la colonne « Convient » correspond au mode et au type d'activité, et dont le brief remplit vraiment la colonne « Il faut ». Un moment qui n'a rien de vrai à porter n'est pas candidat.
2. **Retirer les récents** : tout moment inscrit dans les 3 dernières lignes de `direction-log.md`, colonne Signature (`references/originality.md`).
3. **Tirer** : numéroter les candidats et tirer au hasard, par exemple avec la graine du tirage ou `node -e "console.log(1+Math.floor(Math.random()*N))"`. Sur une page longue, tirer un second moment d'une autre famille (pas deux moments de texte au défilement, pas deux qui demandent un pointeur) et le placer dans une section éloignée du premier.
4. **L'écrire** : l'identifiant du moment, sa section et son but en quelques mots dans le plan (« chapitres en photos dans Chambres : trois chambres dans la place d'une »), et l'identifiant dans la colonne Signature du journal. Un mouvement sans but est supprimé.

On ne retire que pour une raison factuelle, par exemple un besoin non rempli, écrite dans le rapport. Facultatif : le kit de moments de Taste (`moments.mjs pick`, démos, `check`) tire et vérifie de la même façon ; c'est un outil, jamais une obligation.

## 5. Règles pour tout moment

- **Il vit dans sa propre section.** Un moment au défilement suit la barre de défilement (il s'inverse quand on remonte) et montre un état fini à ses deux bouts. Il peut épingler son propre contenu avec `position: sticky` ; il ne retient ni ne pilote jamais le défilement de la page.
- **Le contenu est complet sans lui** : les mots sont du HTML vivant à leur place finale, contraste de 4,5:1 ou plus à chaque étape ; sans script, l'état fini s'affiche.
- **Mouvement réduit** : tout se pose à l'état fini et rien ne reste caché (plancher A1). Vérifier avec une capture sous `prefers-reduced-motion: reduce`.
- **Pause** : tout ce qui bouge encore plus de 5 s après être apparu a un bouton pause visible (WCAG 2.2.2, Pause, arrêt, masquage). Un moment lié au défilement n'en a pas besoin : il s'arrête quand le défilement s'arrête.
- **Jamais dans une carte, un bloc de prix, une FAQ, une citation ou le pied de page** (Taste Skill).
- **Rythme** : décélération, sans rebond ni dépassement ; 600 à 1 000 ms pour une révélation, comme dans Taste Skill.
- **Un seul effet au pointeur par page**, au plus.

## 6. Shaders, WebGL et grandes scènes

- **Seulement pour les sujets techniques** : logiciel, IA, fintech, matériel, jeu vidéo. Jamais pour un café, une boutique locale, une maison d'hôtes ou un cabinet ; eux ont des photos (Taste Skill, et `references/motion-and-video.md` §3 : l'effet sort du sujet).
- **Un effet par page Persuader** : un fond vivant, ou une pièce WebGL, ou un objet 3D, ou une grande scène au défilement. Une grande scène est cet effet, pas un ajout.
- **4 contextes WebGL vivants au plus** en même temps, en comptant l'effet et chaque moment avec un canvas (Taste Skill).
- **Repli fixe obligatoire** : WebGL absent, appareil lent, mobile, mouvement réduit. L'effet se met en pause hors écran. Pas de texte sur des pixels en mouvement sans voile et contraste mesuré.
- Un effet ne prend jamais la place du produit, de l'appareil ou du monde du jeu ; il se met derrière ou après.

## 7. Jamais

- Une apparition en fondu, une montée ou un décalage sur chaque section, carte, rangée ou tuile au défilement. Ceci restreint les entrées de section de `references/motion-and-video.md` §1 : hors du hero et du moment tiré, rien n'entre au défilement.
- Un texte qui bouge à une autre vitesse que la page (parallaxe sur le texte).
- Le détournement du défilement, l'aimantation de défilement (`scroll-snap`) sur toute la page, une bibliothèque de défilement lissé.
- Une carte qui s'incline, se retourne, suit le pointeur ou s'illumine sous le curseur ; un bouton magnétique.
- Un carrousel, un diaporama qui avance seul, des onglets minutés, une annonce qui tourne, un défilé de logos.
- Un clignotement au hasard : points scintillants, paillettes, papillotement, couleurs qui tournent, texte brouillé. Chaque changement montre un état, une étape ou une donnée réelle.
- Un moment sur une page Lire ou Opérer ; un shader sur la page d'une activité locale.

## 8. Contrôle

| Contrôle | Seuil |
| --- | --- |
| Moments comptés sur la page | 1, ou 2 quand la page a 8 sections ou plus |
| Captures au début, au milieu et à la fin de chaque moment, à 1 440 et 390 px | L'état final est la section finie, sans cadre vide |
| Capture en mouvement réduit et sans JavaScript | Chaque mot et chaque photo visibles |
| Ce qui bouge encore après 5 s | A un bouton pause |
| Contextes WebGL | 4 ou moins |
| Performance (`references/performance.md`) | LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1 ; sinon l'effet devient une image fixe |
