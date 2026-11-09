# Finition : ce que les juges voient et que l'agent oublie

La finition est notée 6,0 sur 10 sur les 5 briefs d'évaluation du 3 novembre 2026, l'espacement 6,2. Les défauts relevés reviennent d'une page à l'autre ; chacun a ici sa règle et, quand c'est possible, son contrôle automatique.

| Défaut relevé par les juges | Règle | Contrôle |
| --- | --- | --- |
| Textes provisoires visibles (« numéro du lot », « [à fournir] ») | Un champ vide se dessine comme un état vide (filet pointillé, libellé sobre) et se liste dans le rapport ; le contenu d'exemple n'est signalé qu'une fois sur la page | `check-render.mjs` : textes provisoires |
| Mot coupé au milieu en fin de ligne, e-mail coupé | Raccourcir le titre ou descendre d'un cran avant de couper ; `overflow-wrap: anywhere` seulement sur les adresses e-mail et URL ; `hyphens: auto` dans le texte courant si `lang` est juste, jamais dans les titres | `check-render.mjs` : mots coupés |
| Date au format américain dans une page en français | `lang` juste sur `<html>` ; les dates affichées sont formatées par `Intl.DateTimeFormat` dans la langue de la page ; un champ de date indique le format attendu | `check-render.mjs` lance le navigateur dans la langue de la page |
| Contrôles natifs non stylés (`select`, date, fichier) qui « font non fini » | Chaque contrôle de formulaire passe par les tokens (police, taille, bordure, rayon, focus) ; `appearance: none` avec une flèche dessinée pour `select` | Revue de la capture |
| Marges gauches qui changent d'une section à l'autre ; un bloc qui déborde d'un seul côté | Une gouttière, un conteneur : bords gauche et droit égaux jusqu'en bas, chaque bloc sur les lignes du conteneur ou les colonnes de la grille (d'après Taste Skill) ; pleine largeur seulement pour un calque derrière toute une section. Un décalage voulu s'écrit dans `DESIGN.md` | `check-render.mjs` : bords gauches ; bords droits par capture |
| Vides irréguliers, grand blanc sous le hero | Un seul écart de section ; pas de `min-height` en `vh` sur un bloc à peu de contenu | `check-render.mjs` : rythme des sections et vides |
| Moitié de colonne vide sur desktop | Une grille à deux colonnes a du contenu des deux côtés à chaque rangée, sinon passer à une colonne pour cette section | Revue de la capture |
| Même gabarit répété (petit titre, grand titre, paragraphe) dans chaque section | Chaque section a sa composition (`persuade.md`) ; trois blocs de métadonnées identiques à la suite se fondent en un tableau | Revue de la capture |
| Petits titres au-dessus des titres (eyebrows) | Défaut le plus fort : intégrer au titre ou supprimer | `check-tokens.mjs` : eyebrow |
| Ordre de lecture qui change d'une unité à l'autre sur mobile | Les unités répétées (séries, offres, étapes) gardent le même ordre interne à toutes les largeurs | Revue de la capture mobile |
| Code couleur incohérent (fermé et ouvert de la même couleur) | Une couleur, un sens, une légende ; vérifier chaque état | Revue de la capture |
| Négations en série, points finaux partout | `tells.md`, texte | Relecture du texte |
| Cibles trop petites, contraste insuffisant | Plancher A1 | `check-render.mjs` : cibles, contraste |
| Deux styles de bouton pour un rôle, trois niveaux de boîtes ; légende sous une image (Persuader) ; téléphone, numéro de rue, SIRET, RCS ou TVA réalistes sur une page d'exemple | `defaults-by-mode.md` (un seul système, A2) ; `persuade.md` §3 | Revue de la capture, relecture |
| Sur mobile, une section sur la suivante, un texte sous une barre fixe | `persuade.md` §2 | Captures à 390 et 320 |

## Avant de livrer

```bash
node scripts/check-tokens.mjs index.html
node scripts/check-render.mjs index.html --widths 390,768,1440,1920 --shots .julio/shots
```

Puis regarder les captures produites, de haut en bas, à 390 et 1440 px, avec ce tableau sous les yeux.

**La barrière, une règle pour tous les contrôles** (scripts, détecteur, ce tableau) : corriger et relancer jusqu'à ce que rien n'échoue, trois tours au plus. Un signalement jugé faux, ou un défaut levé exprès, est levé par écrit : contrôle, endroit, raison en une ligne, dans le rapport (et marqué ignoré dans l'outil s'il le permet). Ne jamais modifier la page juste pour tromper un contrôle. Sous A1 à A6, ne lever qu'une mesure montrée fausse, preuve à l'appui. Au-delà de cinq levées : corriger plutôt. Le rapport s'ouvre sur le résultat, les signalements ouverts et les levées (d'après Taste Skill).
