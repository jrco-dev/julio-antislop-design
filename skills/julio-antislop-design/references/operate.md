# Mode Opérer : apps, dashboards, formulaires

Ici le visiteur travaille des heures sur l'écran. La singularité se voit dans la précision et un ou deux moments riches ; le reste de l'interface reste calme. Les conventions connues ont leur place.

## Espacement

- Grille de 4 px ; une valeur impaire seulement pour centrer exactement.
- Mêmes éléments, mêmes tailles : toutes les lignes d'une liste ont la même hauteur et le même écart, toutes les cartes d'une rangée le même padding.
- Moins d'espace à l'intérieur d'un groupe qu'entre les groupes.
- Icônes dans une colonne, labels sur une ligne, nombres alignés à droite dans une colonne.
- Padding selon la densité : environ 16 px pour les panneaux denses et barres latérales, 20 à 24 pour les cartes, 24 à 32 pour les bords de page.
- Navigation : lignes de 32 à 36 px espacées de 2 à 4 px ; un label de section plus proche de ses éléments que de la section au-dessus (par exemple 24 au-dessus, 8 en dessous).
- App : barre latérale de 240 à 280 px, contenu fluide plafonné vers 1440-1600 px ; jamais une app réduite dans une colonne centrée étroite.

## Couleur

- Une rampe de neutres, légèrement teintée vers le monde du produit ; fonds, surfaces, bordures et texte en viennent.
- Trois rôles de texte : principal, secondaire, atténué.
- Un accent rare dans l'interface : action principale, sélection, le chiffre qui compte. Accent portant du texte à 4,5:1.
- Couleurs sémantiques réservées au sens (vert pour une hausse, rouge pour une erreur), adoucies pour tenir dans la palette.
- Sur fond sombre, la profondeur vient des écarts de surface et des filets, pas des ombres ; le bouton principal peut être un blanc cassé de la rampe avec texte sombre.

## Graphiques et chiffres

- Un graphique principal nettement plus grand que le reste ; les autres données sont plus petites et d'un autre genre (liste classée avec barres fines, court tableau).
- Un accent par graphique, sur la chose qui compte ; le reste en tons neutres. Plusieurs teintes seulement pour distinguer de vraies séries.
- Type de graphique selon la donnée : tendance en ligne, comparaison en barres, part en barre empilée unique ou liste à barres, objectif en barre de progression.
- Grille et labels atténués ; pas de barres arc-en-ciel dans une série, pas de barres lumineuses, pas de jours en capitales.
- Carte de stat : un label, un grand chiffre, une variation avec sa référence. Pas de sparkline décorative ajoutée pour remplir.
- Données d'exemple plausibles et cohérentes : jamais « 123 456 » ni « [X] », et les totaux tombent juste.
- Largeurs variées : 3 ou 4 stats compactes au-dessus d'un grand graphique, ou un graphique large à côté d'une liste étroite.

## Panneaux calmes

D'après Taste Skill : l'interface reste neutre à 90-95 % ; la couleur vient du contenu (photos, vrais logos d'outils, données).

- Deux niveaux de boîtes au plus : un panneau et ce qu'il contient ; à l'intérieur, les groupes se séparent par l'espace ou un filet.
- Une recette de panneau pour toute l'app ; l'importance vient de la taille et de la position, pas d'un second style.
- Accent une fois par panneau (la ligne travaillée, la sélection) ; statuts, étiquettes et dates en teintes de l'encre.
- Aucun motif (papier quadrillé, points) derrière une liste, un tableau ou une fenêtre.

## Formulaires et feedback

- Label visible sur chaque champ, jamais le placeholder seul ; texte d'aide persistant sous les champs complexes.
- Erreur sous le champ concerné, reliée par `aria-describedby`, qui dit la cause et comment corriger. Après un envoi raté, focus sur le résumé des erreurs ou le premier champ invalide.
- Validation à la perte de focus, pas à chaque frappe.
- Types `email`, `tel`, `number` et `autocomplete` pour le bon clavier et le remplissage automatique ; accepter les formats variés et stocker un format unique.
- Bouton désactivé avec indicateur pendant un envoi ; état de succès bref ; annulation possible après une action destructrice ; confirmation avant une suppression.
- Toasts de 3 à 5 s, `aria-live="polite"`, sans voler le focus.
- États vides utiles : un message et une action.

## Icônes et détails

- Un jeu d'icônes, 16 ou 18 px, trait 1,5, couleur du rôle de texte ; boîte d'icône de même largeur dans chaque ligne, écart fixe de 8 ou 10 px avec le label.
- Rayons imbriqués (voir `defaults-by-mode.md`) ; raccourcis clavier en keycaps ; compteurs et métadonnées en texte atténué plutôt qu'en pastilles lumineuses.
- État actif : un petit écart de surface et un filet, pas un dégradé lumineux.
- Mouvement : une entrée au chargement ; survol = changement de couleur ou de surface ; pression = légère réduction d'échelle ; un nombre qui change s'anime. Supprimer `animate-pulse` sur ce qui n'est pas en direct, les ressorts à rebond, `hover:scale` sur les cartes.

## Moments

Un écran d'app a presque toujours besoin de zéro image générée. Ses moments viennent du produit : un graphique soigné, des chiffres bien composés, de vrais contenus (photos produit, avatars), un statut qui semble vivant, un objet réel que le produit manipule (une carte bancaire dans une app de finance).
