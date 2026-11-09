# Espacer avec un système

Un espacement généré se reconnaît de deux façons : tout est à la même distance (`gap-4`, `p-6`, `2rem` partout), ou chaque bloc a sa valeur posée au jugé (0,35 rem, 0,6 rem 0,55 rem, 3 rem 5 rem). Dans les deux cas, l'œil ne peut plus lire ce qui va ensemble. L'espace est la première structure d'une page : il dit, avant le texte, ce qui appartient à quoi (loi de proximité, voir `ux-principles.md`).

## 1. Une échelle déclarée

- Base de 4 px. Une échelle de crans nommés, déclarée une fois dans `:root` :

```css
:root {
  --space-3xs: 0.25rem; /* 4 */
  --space-2xs: 0.5rem;  /* 8 */
  --space-xs:  0.75rem; /* 12 */
  --space-s:   1rem;    /* 16 */
  --space-m:   1.5rem;  /* 24 */
  --space-l:   2rem;    /* 32 */
  --space-xl:  3rem;    /* 48 */
  --space-2xl: 4rem;    /* 64 */
  --space-3xl: clamp(4rem, 2.67rem + 5.93vw, 8rem);   /* 64 → 128, entre blocs d'une section */
  --space-section: clamp(6rem, 4rem + 8.89vw, 12rem); /* 96 → 192, entre sections */
}
```

- Les grands crans sont fluides (`clamp()` entre 360 et 1440 px, calculé comme l'échelle typographique, par exemple avec Utopia) ; les petits restent fixes, car un écart de 8 px n'a pas à grandir.
- **Aucune longueur hors des tokens** dans `margin`, `padding`, `gap`, `row-gap`, `column-gap` et `inset`. `0` et `auto` sont permis. Un ajustement optique (aligner un glyphe sur un bord) se fait avec un token nommé et commenté, jamais avec un nombre isolé.

## 2. Trois niveaux, qui ne se touchent jamais

L'espacement porte la hiérarchie s'il y a trois niveaux nettement séparés, chacun au moins le double du précédent :

| Niveau | Où | Crans |
| --- | --- | --- |
| Intérieur | Dans un composant : icône et libellé, libellé et champ, padding d'un bouton ou d'une puce | `3xs` à `s` (4 à 16 px) |
| Groupe | Entre les éléments d'un bloc : titre, phrase d'appui, action ; entre deux cartes d'une même grille | `s` à `xl` (16 à 48 px) |
| Section | Entre deux blocs d'une section, puis entre deux sections | `3xl` puis `section` (64 à 192 px) |

Les traduire en tokens de rôle, que les composants utilisent à la place des crans bruts : `--gap-inner`, `--gap-stack`, `--gap-group`, `--gap-section`. Le choix se fait une fois, au niveau du système, pas composant par composant.

## 3. Règles de rythme

- **Un titre appartient à ce qui le suit** : l'espace au-dessus d'un titre est au moins le double de l'espace en dessous.
- **La phrase d'appui colle au titre** (un cran `m` à `l`), l'action vient un cran plus loin.
- **Un seul écart entre sections**, le même partout (`--space-section`) : vérifier sur la capture pleine page qu'aucun vide entre deux sections n'est nettement plus grand que les autres (un bloc trop haut ou un `min-height` oublié en est souvent la cause).
- **L'écart entre sections est nettement plus grand que tout écart interne** : 120 à 240 px sur desktop en Persuader (voir `persuade.md`), 64 à 96 px sur mobile.
- **Varier par niveau, pas par bloc** : la variété vient du passage d'un niveau à l'autre et du changement de composition entre sections, jamais d'une valeur inventée pour un bloc.
- **Boutons et champs** : hauteur 44 px visée sur mobile ; padding vertical et horizontal tirés de l'échelle, l'horizontal environ 1,5 à 2 fois le vertical ; le même padding sur tous les boutons d'un même rang.
- **Avec le rythme d'écran** (`persuade.md` §2) : la hauteur vient des écrans ; ce qui reste constant, c'est l'espace au-dessus de chaque titre (`--space-section`), le reste tombe en bas. L'écart entre contenus varie alors, jamais sous 192 px sur desktop, 144 sur mobile (Taste Skill) ; un avertissement `rythme-sections` se justifie par « rythme d'écran ».
- **Marges extérieures égales** à gauche et à droite, en un seul token de gouttière (`--gutter`), et un conteneur plafonné en un seul token (`--measure-page`).
- **Mode Opérer** : échelle plus serrée (la section descend à `xl`, 48 px), mais les trois niveaux restent distincts ; la densité vient de crans plus petits, pas de valeurs arbitraires.

## 4. Vérifier

`node scripts/check-tokens.mjs <fichier ou dossier>` signale chaque `margin`, `padding`, `gap` ou `inset` écrit en valeur brute. Zéro signalement avant livraison.
