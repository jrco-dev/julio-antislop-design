# Budget de performance

Sur un réseau mobile lent, une page qui ne s'affiche pas n'a aucun design. Le seuil est le même dans tous les modes ; ce qui change, c'est ce qu'on a le droit de dépenser pour l'atteindre.

## Seuil (plancher A5)

Seuils Core Web Vitals :

- LCP (affichage du plus grand élément) ≤ 2,5 s
- INP (réactivité) ≤ 200 ms
- CLS (stabilité de la mise en page) ≤ 0,1

Comment mesurer : en laboratoire (Lighthouse ou équivalent, mobile, réseau lent simulé), on mesure LCP et CLS ; l'INP ne se mesure qu'avec de vraies interactions, donc on suit le TBT comme indicateur. Sur données réelles d'usage, les seuils s'entendent au 75e centile.

Si le budget saute : l'effet, la vidéo ou la 3D deviennent une image fixe.

## Ce que chaque mode peut dépenser

| Dépense | Persuader | Opérer | Lire | Expérience |
| --- | --- | --- | --- | --- |
| Effet GPU, shader, WebGL | 1 au plus, comme moment signature | Aucun | Aucun | Plusieurs si le seuil tient |
| Vidéo | 1 boucle muette avec image d'affiche, ou une démo produit qui compte comme moment signature | Aucune hors contenu | Intégrée au contenu, sans lecture automatique | Libre si le seuil tient |
| 3D | Seulement comme moment signature | Aucune | Aucune | Libre si le seuil tient |
| Bibliothèques d'animation | Une seule | Une seule, légère | Aucune nécessaire | Selon l'œuvre |

## Règles communes

1. Images en WebP ou AVIF, `srcset` et `sizes`, dimensions ou `aspect-ratio` déclarés ; chargement différé (`loading="lazy"`) sous la ligne de flottaison ; l'image du hero n'est jamais différée.
2. Polices : seules les graisses utilisées, `font-display: swap`, préchargement de la police critique seulement.
3. Espace réservé pour tout contenu asynchrone, pour éviter les sauts.
4. Scripts tiers en `async` ou `defer`, et seulement s'ils servent.
5. Chaque effet a un repli fixe, se met en pause hors écran et respecte le mouvement réduit.
6. Listes de plus de 50 éléments virtualisées ; événements fréquents (défilement, saisie) limités.
7. Mesurer sur la version de production (après build), pas seulement sur le serveur de développement.

Un poids maximal de page par mode sera fixé à partir de mesures réelles sur les premiers projets, plutôt que sur un chiffre de principe.
