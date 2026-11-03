# Mode Persuader : landing pages, hero, sections, illustration produit

## Sommaire

1. Le premier écran
2. Sections et structures par objectif
3. Composants
3 bis. Formulaires de commande et de contact
4. Illustration produit (faux UI)
5. Grilles bento

## 1. Le premier écran

- Il répond en grand à la première question du visiteur : pour un produit, ce que c'est et ce que ça coûte ou fait ; pour un événement, quoi, quand, où (les dates dans le titre ou au deuxième niveau) ; pour une personne, qui et ce qu'elle fait.
- Titre d'environ 5 mots, 32 caractères visés, 2 lignes au plus à toute largeur. Une phrase d'appui de 12 mots au plus, juste sous le titre (32 à 48 px plus bas), jamais retenue par une animation. Une action principale et une secondaire au plus.
- Titre, phrase et action visibles à 1280 × 800 sans défiler ; le hero n'a pas de bande morte sous son contenu.
- Composition : une scène pleine largeur avec le texte sur sa partie calme, ou un split asymétrique où le visuel prend au moins la moitié, ou le texte au-dessus d'une grande vue du produit. Tout empiler et centrer est le gabarit par défaut, à garder seulement pour un hero court sans visuel.
- Sur les meilleurs sites étudiés par Taste, le média du hero couvre au moins la moitié du premier écran dans 68 % des cas.

## 2. Sections et structures par objectif

Règles communes : un seul objectif et un seul CTA principal par page, le même, qui revient en haut, après la preuve et en bas, sans action concurrente au même niveau ; 3 à 5 bénéfices, jamais en tuiles identiques ; la preuve, réelle uniquement, juste avant le CTA qu'elle soutient ; tout carrousel, compte à rebours ou défilant peut être mis en pause et s'arrête au focus ou en mouvement réduit. Sections espacées de 120 à 240 px sur desktop ; l'écart entre sections est nettement plus grand que tout écart interne. Chaque section a un titre qui la nomme et une composition différente de sa voisine. Porter l'idée dans chaque section, tarifs, FAQ et footer compris : l'échec le plus fréquent est un premier écran singulier suivi de blocs standard.

| Objectif | Structure (ordre des sections) | Placement du CTA |
| --- | --- | --- |
| Présenter un produit | Hero → proposition de valeur → 3 à 5 bénéfices → CTA → footer | Hero (barre collante) + bas |
| Rassurer | Hero → problème → solution → témoignages réels → CTA | Hero + après les témoignages |
| Aller droit au but | Titre → courte description → 3 bénéfices au plus → CTA → footer | Centré, gros bouton |
| Vendre un abonnement | Hero → les vraies offres (autant de cartes qu'il y a d'offres, sans anneau réflexe sur celle du milieu) → comparatif → FAQ → CTA | Chaque carte + nav |
| Se comparer | Hero → problème → tableau vous contre concurrents → CTA | Sous le tableau |
| Capter des contacts | Titre orienté bénéfice → aperçu de la ressource → formulaire minimal | Bouton du formulaire |
| Liste d'attente | Hero → aperçu → formulaire email → nombre réel d'inscrits | Formulaire au-dessus de la ligne de flottaison |
| B2B | Mission → solutions par secteur et par rôle → clients réels → contact commercial | « Contacter les ventes » + connexion en secondaire |
| Portfolio | Voir le mode Expérience | |

Ces structures sont des points de départ ; l'argument décide. Ne jamais tordre le contenu pour remplir une structure (un comparatif de trois offres quand il n'y a qu'un prix).

## 3. Composants

- Boutons plats, une couleur, carrés ou en pastille, décidé une fois. Le rayon « doux » de 9 à 16 px partout est la marque mesurée des sites faibles. Beaucoup de heros forts n'ont qu'un bouton, voire aucun.
- Navigation : par défaut le nom, 3 à 5 liens, une action ; « Connexion » en simple lien. Pas de pastille flottante floutée. Choisir le modèle d'après le nombre de destinations et la tâche : 18 modèles dans `nav-footer.md`.
- Le footer est une fin conçue, pas un plan du site : il referme l'idée de la page (la dernière information utile, l'action une dernière fois, les coordonnées réelles). Le nom de la marque géant en pleine largeur est devenu un réflexe de génération : ne l'utiliser que si l'idée l'appelle, et l'écrire comme défaut levé dans le rapport. 15 modèles de pied de page dans `nav-footer.md`, deux combinables au plus.
- Statement : une phrase d'intro mise en grand reste un paragraphe (36 px au plus sur desktop, 24 sur mobile, environ 25 mots).
- Le contenu d'exemple (produit fictif, cotes, prix à valider) est listé dans le rapport et signalé par **une seule** mention discrète sur la page (pied de page) ; jamais d'étiquettes « à valider » ou « exemple » semées dans les sections, qui cassent la page.
- Tout texte qui dépend de la date ou de l'heure (« aujourd'hui », « mois en cours », compte à rebours) est calculé en direct au chargement, jamais écrit en dur : sinon il devient faux le lendemain.

## 3 bis. Formulaires de commande et de contact

Un formulaire long sans rythme fait chuter la conversion et casse la fin d'une page réussie.

- **Le minimum de champs** : seulement ce qu'il faut pour exécuter l'action ; tout le reste est optionnel ou demandé plus tard.
- **Grouper par sens** : les champs en blocs nommés (« Vous », « Livraison », « Paiement »), espacés plus entre les blocs qu'à l'intérieur ; au-delà de 6 à 8 champs, des étapes avec indicateur de progression et retour possible.
- **Le récapitulatif à côté** : ce qui est commandé, le prix total, le délai et le mode de livraison, visibles sans défiler pendant la saisie (à côté sur desktop, au-dessus du bouton sur mobile).
- **Une colonne** pour la saisie ; deux champs côte à côte seulement s'ils vont ensemble (code postal et ville).
- **Le bouton dit ce qui se passe et combien** : « Commander l'échantillon, 12 € », pas « Envoyer ».
- **La réassurance réelle près du bouton** : délai, transporteur, conditions de retour, seulement si elles sont fournies.
- **Ne jamais redemander** une information déjà saisie ailleurs sur la page.
- Règles de saisie, d'erreur et d'accessibilité : `operate.md`, section Formulaires et feedback.

## 3 ter. Verre (glassmorphism) demandé par le brief

Le verre est un défaut levé (A7) ; il a des règles propres, issues du test du 3 novembre 2026 :

- **Le verre floute quelque chose de réel** : le produit, une photo, le contenu qui défile dessous. Jamais des taches de couleur (« blobs ») posées exprès derrière pour que le flou se voie : c'est le tic, pas le style.
- **Trois surfaces de verre au plus** par écran, chacune avec une fonction (navigation, légende du produit, sélecteur), aucune en décor.
- **Lisibilité** : teinte de fond assez opaque pour tenir 4,5:1 sur le pire endroit du fond ; repli opaque avec `@supports not (backdrop-filter: blur(1px))` et `prefers-reduced-transparency`.
- **Performance** : flou limité aux petites surfaces fixes ; jamais de flou animé sur une grande surface.
- Un panneau de verre ne masque jamais la partie du produit qu'il décrit.

## 4. Illustration produit (faux UI)

Un faux UI est permis quand il simplifie un vrai produit ; il est interdit quand il fabrique un produit. Méthode issue de Stageshow :

- 3 à 7 vrais textes seulement (le titre, l'objet de l'action, ce qui est tapé, le résultat) ; le reste en barres de remplissage, placées sur les bords, jamais là où l'œil se pose. Largeurs de barres variées.
- Concevoir à la taille d'affichage, à l'échelle 1:1 : environ 720 × 340 px pour un hero à côté du texte, 900 à 1100 px de large en pleine largeur, 400 × 300 px pour une carte. Texte d'interface de 11 à 15 px.
- La fenêtre ou le téléphone occupe au moins les deux tiers de la scène et sort par un bord (fenêtres et écrans seulement : un objet physique se montre entier, voir `idea-and-direction.md` §7) ; jamais une fenêtre entière réduite dans une carte, jamais une fenêtre qui flotte avec de l'air sur quatre côtés.
- Fenêtres et appareils jamais dessinés à la main : un kit à géométrie réelle.
- Mots à 12 px des bords ; bouton à 8 px du champ au-dessus ; aucune quasi-tangente (deux bords à 1-3 px se lisent comme un accident).
- Icônes d'un jeu, jamais dessinées ; aucun logo inventé (étincelle, violet, lettre dans un carré coloré).
- Le titre d'une fausse app est un `div`, jamais un `h1` à `h6`.
- Démo animée : 3 à 5 temps et une conclusion, 10 à 16 s, aucun mouvement de curseur inexplicable, une image d'affiche qui raconte l'histoire seule, le contenu bouge au lieu d'être remplacé.

## 5. Grilles bento

Une grille bento est une image faite de tuiles, pas cinq démos côte à côte.

1. Un tiers à la moitié des tuiles montrent de l'interface ; les autres sont un chiffre, une phrase, un objet, un diagramme, une collection de logos réels ou une vraie photo.
2. Une tuile héros plus grande porte l'idée principale.
3. Une tuile d'interface montre un seul composant, à taille réelle ou plus grand ; le cadre de fenêtre apparaît au plus une fois dans la grille.
4. Les voisines contrastent en damier ; jamais deux captures de fenêtre côte à côte.
5. Tuile chiffre : un vrai nombre de 48 à 72 px, une courte amorce, un label, au plus un glyphe coloré ; le nombre et son unité ne se coupent jamais.
6. Texte court et hors de l'image : un titre de 1 à 4 mots, au plus une phrase d'appui.
7. Un cadre commun (rayon, gouttière, padding, position du texte) ; la variété est à l'intérieur.
8. Chaque chose est dite une fois : aucun texte, avatar ou couleur répété d'une tuile à l'autre.
9. Mouvement : une petite chose par tuile, jouée une fois à l'entrée, décalée de 80 à 120 ms entre tuiles.
10. Jamais de « photo » dessinée en code : sans vraie photo, un autre type de tuile.
11. Chaque largeur est son propre design ; en colonne étroite la grille se recompose, héros en premier.

Une grille de cinq tuiles demande en général une tuile héros d'interface, un ou deux composants, un chiffre ou une phrase, et un objet, un diagramme ou une collection.
