# Tics de pages générées, datés

Un tic est un procédé qui trahit une page générée. Il le devient parce qu'il est produit par défaut, partout, sans raison. Chaque correctif publié finit par devenir le tic suivant : cette liste est donc datée, et elle ne propose jamais une police ou une couleur de remplacement, seulement une méthode (dériver du sujet, consulter des références réelles).

## Vague 1 — 2023-2024

| Tic | À la place |
| --- | --- |
| Dégradés violet, indigo, violet-rose ou cyan sur sombre ; texte en dégradé | Aplats ; encre pleine |
| Bouton « Get started » lumineux ou en dégradé | Bouton plat nommé par son action |
| Verre dépoli (backdrop blur) décoratif | Surfaces opaques, un écart de ton |
| Ombre grise douce sous chaque carte | Écart de ton, ou pas de boîte |
| Trois cartes identiques, icône dans un carré arrondi | Composition propre à la section |
| Emojis comme icônes ou puces | Mots, icônes d'un jeu, ou vraie image |
| Hero centré : titre, sous-titre, deux boutons, capture en dessous | Hero tiré de l'idée |

## Vague 2 — 2025

| Tic | À la place |
| --- | --- |
| Eyebrow : petit label en capitales espacées au-dessus de chaque titre | Intégrer au titre ou supprimer |
| Badge en pastille au-dessus du titre (« New », « Beta », « Introducing ») | Le dire dans la phrase d'appui |
| Un mot du titre en italique, en couleur ou souligné | Une police, une couleur |
| Bento de tuiles arrondies comme section de features | Grille composée selon `persuade.md`, ou autre chose |
| Fond quasi noir, un accent néon et une lueur | Palette sombre construite, sans lueur |
| Navigation en pastille flottante floutée | Barre simple |
| Faux dashboard de barres grises et donuts | Vrai fragment d'interface, ou pas d'image |
| Pastille de statut qui pulse (« Available for work ») | Supprimer |
| Fondu montant sur chaque section | Un mouvement signature |

## Vague 3 — 2025-2026 : le correctif devenu cliché

Le remède publié contre les deux premières vagues était « réchauffer et faire éditorial ». Les modèles l'ont adopté en bloc.

| Tic | À la place |
| --- | --- |
| Fond crème + accent terracotta, rouille ou argile | Chaleur par une pierre peu saturée, une encre profonde, une photo ou un aplat chaud |
| Serif contrastée comme raccourci vers « premium » ; grand titre serif italique | Police choisie pour le caractère du projet |
| Cosplay de journal : filets partout, angle zéro, colonnes denses | Structure par l'espace et le ton |
| Labels performatifs (« Field notes », « Quietly trusted by ») | Noms de section simples |

## Mode des galeries, refusée ici

Fréquents sur des sites primés, mais ce sont les premières choses qu'un générateur copie, et ils ne portent aucune information : micro-labels en monospace, numérotation 01/02/03 (sauf vraie séquence), filets fins et grilles visibles (sauf en mode Opérer, voir `defaults-by-mode.md`), artefacts d'outil de design (repères, marques de coupe), méta d'agence (heure locale, coordonnées, « ©2026 — Scroll », chaînes reliées par des points médians). Les petites capitales espacées sont aussi condamnées par la mesure : 16 % des sites forts contre 57 % des faibles. Certains skills « anti-slop » les recommandent encore pour « faire cher » : c'est précisément le correctif d'une source devenu le cliché d'une autre.

## Vague 4 — 2026 : défauts de framework

Space Grotesk comme repli « original », puis ses remplaçants (DM Sans, Manrope, Plus Jakarta Sans, Satoshi, Geist) ; **Archivo et son axe de largeur**, nouvelle convergence relevée sur trois de nos pages et sur celle d'Impeccable lors du test à l'aveugle du 3 novembre 2026 ; tailles posées au jugé hors de toute échelle (38 px, 1,25 rem, plusieurs `clamp()` presque égaux) ; espacements bruts différents dans chaque bloc (0,35 rem, 0,6 rem 0,55 rem, 3 rem 5 rem) ; shadcn `zinc` ou `slate` non retouché ; bouton `blue-600` de Tailwind ; `rounded-2xl shadow-lg` partout ; icônes Lucide réflexes (Sparkles, ArrowRight, Zap) ; avatars DiceBear ; placeholders en dégradé ; `gap-4` et `p-6` uniformes ; footer à 4 colonnes ; trois offres tarifaires avec un anneau sur celle du milieu ; nom de la marque géant en pleine largeur dans le footer, par réflexe (relevé par un juge à l'aveugle lors du test du 3 novembre 2026) ; taches de couleur floues (« blobs ») posées derrière un panneau de verre pour que le flou se voie ; étiquettes « à valider » ou « exemple » semées dans la page ; objet physique dessiné en quelques formes plates, méconnaissable ; papier écru, serif d'affichage classique et une seule couleur sombre, variante « atelier » de la vague 3.

À la place : police trouvée dans le monde du sujet (`typography.md` §2), échelle typographique modulaire et échelle d'espacement à trois niveaux, sans valeur hors tokens (`spacing.md`), tokens composés pour le projet, icônes du produit ou d'un jeu choisi, vrais avatars ou initiales, footer et tarifs construits d'après le contenu réel.

## Vague 5 — novembre 2026 : le clean anti-slop

Le style vers lequel convergent les agents qui évitent tous les tics, ce skill compris (relevé sur nos quatre pages du 2 et 3 novembre 2026) : fond papier clair, titre en grotesque condensée aligné à gauche avec la phrase d'appui à droite, filets fins et tableaux, un seul accent, sections aérées empilées, listes numérotées ; et, en refonte, des blocs génériques de l'existant (grille d'adjectifs « Sur mesure / Souplesse / Expertise ») gardés tels quels. À la place : le tirage, un archétype et deux leviers de risque (`originality.md`).

## Vague 6 — novembre 2026 : relevés par Taste Skill 2.5.1 (44 sites générés testés)

| Tic | À la place |
| --- | --- |
| Cartes qui s'inclinent avec le pointeur ; carrousels ; onglets qui changent sur minuterie | Survol = couleur ou levée de 2 px ; tout visible ; onglets au clic |
| Légende sous chaque image (« Image d'illustration ») | Une meilleure image ; crédits dans le pied de page |
| Photo de banque d'images présentée comme celle du client | Une image de remplacement listée dans le rapport (`references/photos.md`) |
| Logiciel seulement en petits fragments sur panneaux colorés ; la même vue du produit à chaque section | `persuade.md` §4 et §4 bis |
| Logo d'un vrai outil redessiné ou grisé | Le vrai logo, dans ses couleurs |
| Accent ou fond violet ou lavande, même en aplat | Une couleur tirée du sujet |
| Shader, grain ou hero sombre sur un café, une boutique ou un service | `persuade.md` §1 bis |
| Popup, bulle de chat, carré « retour en haut » flottant sur la page | Rien de fixe hors la navigation |

## Autres tics fréquents

- **Structure** : titre-phrase de 3 ou 4 lignes ; ordre hero, logos, features, témoignage, tarifs, CTA ; même mise en page pour toutes les sections ; tout centré ; même rayon moyen partout ; neuf tailles de police presque égales ; fausse preuve sociale (« 10 000+ équipes », rangées d'étoiles sans source).
- **Surfaces** : bordure colorée épaisse sur un côté des cartes et alertes ; ombre décalée sans flou (`4px 4px 0`) hors d'un vrai monde néobrutaliste ; « carte fantôme » (bordure de 1 px sous une large ombre douce) ; masque géométrique qui imite le contour d'un sujet photographié ; template « métrique de hero » (gros chiffre, petit label, stats annexes) ; rayures et grilles de fond sans vrai plan derrière.
- **Texte** : cadence de négations répétées (« Pas un script. », « Pas l'inverse. », « Pas une agence. ») ; points finaux sur tous les titres ; unlock, supercharge, seamless, elevate, effortless, cutting-edge, all-in-one ; « pas seulement X, c'est Y » ; titres en trois temps ; « Get started » et « Learn more » ; tirets cadratins en série ; titre « Bienvenue, Prénom ! 👋 » ; points d'exclamation.
- **Mouvement** : même fondu partout ; survol qui soulève chaque carte ; easing à rebond ; boucles sans sens ; révélation qui échoue et laisse une bande vide.

## Esthétique d'évitement

Une page débarrassée de tous ces tics sans rien à la place est une page vide bien élevée, et c'est aussi un tic : n'importe qui la devinerait à partir de la catégorie et de la liste des interdits. Les tics comblaient l'absence d'idée. On comble ce vide avec l'idée, l'échelle, le contenu complet et de vraies images.

Mettre à jour cette liste chaque trimestre : un procédé devenu courant dans les générations entre ; un tic oublié peut sortir.
