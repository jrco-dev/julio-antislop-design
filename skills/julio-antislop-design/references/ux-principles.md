# Les lois de l'UX, appliquées

Les 30 principes du catalogue [Laws of UX](https://lawsofux.com) de Jon Yablonski, réécrits ici à partir des travaux d'origine, chacun avec une règle applicable, un seuil quand il existe, les modes où il pèse le plus et la façon de le vérifier. Ce sont des principes de conception issus de la recherche, pas des lois physiques : deux nuances récentes sont signalées.

**Garde-fou** : ces principes servent le visiteur, jamais contre lui. Aucune fausse rareté, aucun compte à rebours inventé, aucune option piège, aucun bouton qui culpabilise (« Non merci, je n'aime pas économiser ») : ce sont des manipulations, interdites par A2.

Modes : P Persuader, O Opérer, L Lire, E Expérience.

## 1. Perception : ce que l'œil regroupe et retient

| Loi | Origine | Règle | Seuil ou test | Modes |
| --- | --- | --- | --- | --- |
| **Prägnanz** (forme simple) | Gestalt, Max Wertheimer, 1923 | L'œil lit la forme la plus simple possible : une composition doit se résumer en une forme (une colonne, un split, une grille) | Capture floutée : la structure se lit-elle encore ? | Tous |
| **Proximité** | Gestalt, Wertheimer, 1923 | Ce qui est proche va ensemble : l'espace dit ce qui appartient à quoi | Trois niveaux d'espacement, chacun au moins le double du précédent (`spacing.md`) | Tous |
| **Similarité** | Gestalt, Wertheimer, 1923 | Ce qui se ressemble a la même fonction : un style par rôle (tous les liens pareils, tous les boutons principaux pareils) | Aucun élément non cliquable qui ressemble à un bouton ou à un lien | Tous |
| **Région commune** | Stephen Palmer, 1992 | Un fond ou un cadre commun groupe plus fort que la proximité | Un cadre par groupe réel, jamais une carte dans une carte | O, P |
| **Connexion uniforme** | Stephen Palmer et Irvin Rock, 1994 | Des éléments reliés par une ligne ou une couleur se lisent comme un tout | Étapes d'un parcours reliées ; jamais de lien visuel entre des choses sans rapport | P, O |
| **Effet de Von Restorff** (isolement) | Hedwig von Restorff, 1933 | L'élément qui diffère est celui qu'on retient : une seule chose ressort par écran, l'action principale d'abord | Accent environ 4 fois au plus par écran ; jamais la couleur seule pour porter le sens (A1) | Tous |
| **Position dans la série** | Hermann Ebbinghaus, 1885 ; Bennet Murdock, 1962 | On retient le début et la fin d'une liste | Liens et arguments clés en premier et en dernier ; l'action principale en tête et en fin de page | P, O |
| **Attention sélective** | Colin Cherry, 1953 ; Daniel Simons et Christopher Chabris, 1999 | On ne voit que ce qui sert son but ; ce qui ressemble à une publicité est ignoré | Aucune information critique dans un bandeau, une bannière ou un encart de forme publicitaire | Tous |
| **Effet esthétique-utilisabilité** | Masaaki Kurosu et Kaori Kashimura, 1995 | Ce qui est soigné paraît plus facile à utiliser et fait pardonner les petits défauts | Le soin ne remplace pas le test : tester l'usage sur la page finie, pas sur l'impression | Tous |

## 2. Décision et mémoire : ce que le visiteur peut retenir et choisir

| Loi | Origine | Règle | Seuil ou test | Modes |
| --- | --- | --- | --- | --- |
| **Loi de Hick** | William Hick, 1952 ; Ray Hyman, 1953 | Le temps de décision croît avec le nombre d'options | Navigation de 3 à 5 liens en Persuader, 7 au plus ailleurs ; une seule action principale par écran ; options avancées repliées | Tous |
| **Trop de choix** | Sheena Iyengar et Mark Lepper, 2000 ; nuance : la méta-analyse de Benjamin Scheibehenne et al., 2010, trouve un effet moyen proche de zéro | Prudence : quand les options se ressemblent, en montrer moins et recommander | Offres : autant que de vraies offres, une recommandée seulement si c'est vrai | P |
| **Loi de Miller** | George Miller, 1956 ; nuance : Nelson Cowan, 2001, situe la limite autour de 4 éléments | La mémoire immédiate est petite : ne jamais faire retenir plus de 3 ou 4 éléments d'un écran à l'autre | Récapitulatif visible pendant un formulaire ; comparaison côte à côte plutôt que de mémoire | O, P |
| **Regroupement** (chunking) | George Miller, 1956 | On retient mieux par blocs nommés | Numéros, IBAN, codes affichés par groupes (4 4 4 4) ; longues listes coupées en groupes titrés | O, L |
| **Mémoire de travail** | Alan Baddeley et Graham Hitch, 1974 | L'information à manipuler doit rester à l'écran | Aucune consigne qui disparaît au moment où on en a besoin ; libellé toujours visible, jamais seulement en placeholder | O |
| **Charge cognitive** | John Sweller, 1988 | Tout effort mental qui ne sert pas la tâche est retiré | Un écran, une tâche ; vocabulaire de l'utilisateur ; pas de décor qui bouge pendant la lecture | Tous |
| **Modèle mental** | Kenneth Craik, 1943 ; Donald Norman, 1983 | Chacun se fait une idée simple du système : l'interface la suit | Nommer avec les mots du visiteur (relevés dans le brief ou les tickets), pas ceux de l'équipe | O, L |
| **Biais cognitifs** | Amos Tversky et Daniel Kahneman, 1974 | Le jugement dévie de façon prévisible, celui du concepteur aussi | Valider par l'usage ou la donnée ; ne jamais exploiter un biais contre le visiteur (garde-fou) | Tous |
| **Rasoir d'Ockham** | Guillaume d'Ockham, XIVe siècle | Entre deux solutions qui marchent, la plus simple | Pour chaque élément : que perd-on si on le retire ? Rien : on le retire | Tous |
| **Loi de Tesler** (complexité irréductible) | Larry Tesler, années 1980 | Une part de complexité ne disparaît pas : c'est le système qui doit la porter | Valeurs par défaut justes, autocomplétion, calculs faits pour le visiteur | O, P |

## 3. Action : ce que la main et l'attente permettent

| Loi | Origine | Règle | Seuil ou test | Modes |
| --- | --- | --- | --- | --- |
| **Loi de Fitts** | Paul Fitts, 1954 | Une cible grande et proche s'atteint plus vite | Cibles de 24 px au minimum, 44 visés au doigt (A1) ; action principale dans la zone du pouce sur mobile ; action destructrice éloignée de l'action courante | Tous |
| **Seuil de Doherty** | Walter J. Doherty et Arvind J. Thadani, IBM, 1982 | Sous 400 ms, l'échange reste fluide | Retour visuel en moins de 100 ms sur chaque action ; état de chargement au-delà de 400 ms ; indication de durée au-delà de 2 s | O, P |
| **Loi de Postel** (tolérance) | Jon Postel, RFC 761, 1980 | Tolérant en entrée, strict en sortie | Champs qui acceptent espaces, tirets, majuscules, formats de date courants ; un seul format affiché et stocké | O, P |
| **Paradoxe de l'utilisateur actif** | John Carroll et Mary Beth Rosson, 1987 | Personne ne lit le mode d'emploi : on agit tout de suite | Aide dans le contexte, états vides qui disent quoi faire, aucune visite guidée obligatoire | O |
| **Loi de Jakob** (conventions) | Jakob Nielsen, 2000 | Les visiteurs passent leur temps sur d'autres sites et attendent les mêmes conventions | Navigation, formulaires, panier, recherche et liens restent conventionnels ; la singularité va à l'idée, la composition et la matière, pas aux contrôles | Tous |

## 4. Motivation : ce qui fait avancer et ce qu'on retient de l'expérience

| Loi | Origine | Règle | Seuil ou test | Modes |
| --- | --- | --- | --- | --- |
| **Gradient du but** | Clark Hull, 1932 ; Ran Kivetz et al., 2006 | On accélère à l'approche du but | Progression visible et honnête (« étape 2 sur 3 ») ; la première étape la plus courte | O, P |
| **Effet Zeigarnik** | Bluma Zeigarnik, 1927 | Une tâche inachevée reste en tête | Brouillons sauvegardés ; reprise là où on s'est arrêté ; ce qui reste à faire est visible | O |
| **Règle du pic et de la fin** | Daniel Kahneman et al., 1993 | On juge une expérience sur son moment le plus fort et sur sa fin | Concevoir l'écran de succès, la confirmation et le pied de page autant que le premier écran ; un seul moment fort voulu (la chose vivante) | Tous |
| **Flow** | Mihaly Csikszentmihalyi, 1990 | L'absorption vient d'un défi à la mesure de la compétence, sans interruption | Aucune fenêtre surgissante, bandeau ou demande d'avis pendant une tâche ; difficulté progressive | O, E |
| **Loi de Parkinson** | Cyril Northcote Parkinson, 1955 | Une tâche s'étend au temps qu'on lui laisse | Raccourcir les parcours : autoremplissage, durée annoncée (« 2 minutes ») quand elle est vraie | O, P |
| **Principe de Pareto** | Vilfredo Pareto ; Joseph Juran | Une petite part des fonctions sert la plupart des usages | Les 3 tâches les plus fréquentes (cadrage, tour 1) sont au premier niveau ; le reste derrière | O, P |

## Contrôle UX avant livraison

Après les contrôles automatiques (`check-render.mjs` vérifie déjà les cibles, le nombre de liens de navigation et la longueur des formulaires), passer cette liste sur les captures :

1. **Hick et Von Restorff** : une seule action principale par écran, la plus visible ; 5 liens de navigation au plus en Persuader.
2. **Proximité et région commune** : chaque groupe se lit sans lire le texte ; aucune carte dans une carte.
3. **Similarité** : rien qui ressemble à un bouton sans en être un, et inversement.
4. **Miller et mémoire de travail** : rien à retenir d'un écran à l'autre ; libellés toujours visibles ; récapitulatif pendant la saisie.
5. **Fitts** : action principale atteignable au pouce sur mobile ; destructif éloigné.
6. **Doherty** : chaque action a un retour immédiat ; chaque attente a un état.
7. **Postel** : chaque champ accepte les saisies courantes.
8. **Jakob** : navigation, formulaires et liens conventionnels.
9. **Pic et fin** : l'écran de confirmation et le pied de page sont conçus.
10. **Garde-fou** : aucune manipulation (fausse rareté, option piège, culpabilisation).
