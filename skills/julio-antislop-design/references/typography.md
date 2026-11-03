# Choisir et échelonner la typographie

La typographie est le levier le plus visible, et c'est là qu'une page générée se reconnaît en premier. Trois signes la trahissent : une police que tous les modèles choisissent, des tailles posées au jugé et presque égales, un espacement sans système. Ce fichier traite les deux premiers ; l'espacement est dans `spacing.md`.

## 1. Les polices réflexes (datées, novembre 2026)

Une police réflexe est une police qu'un modèle choisit sans regarder le sujet. Elle n'est pas mauvaise : elle est **devinable**. Celles-ci ne se prennent jamais comme premier choix ; elles ne se gardent qu'avec une raison de marque écrite (la charte du client l'impose), notée comme défaut levé.

| Famille de réflexe | Polices |
| --- | --- |
| Défauts historiques | Inter, Roboto, Open Sans, Lato, Poppins, Montserrat, police système |
| Replis « originaux » quand Inter est interdit | Space Grotesk, DM Sans, Manrope, Plus Jakarta Sans, Outfit, Sora, Geist, Hanken Grotesk |
| Grotesques variables « expressives » | **Archivo** et son axe de largeur (relevée sur 3 de nos propres pages et sur celle d'Impeccable lors du test à l'aveugle du 3 novembre 2026) ; tout titre étiré ou compressé par l'axe `wdth` sans raison du sujet |
| Réflexes Fontshare | Satoshi, General Sans, Clash Display, Cabinet Grotesk |
| Raccourcis « éditorial » et « premium » (vague 3) | Instrument Serif, Fraunces, Playfair Display, Cormorant, Libre Caslon (relevée chez Hallmark lors du même test) ; toute serif contrastée en italique pour « faire cher » |

La liste s'allonge à chaque génération : quand une police apparaît dans deux projets générés sans lien entre eux, elle y entre. Mettre à jour ce tableau avec `tells.md`.

## 2. Choisir une police depuis le sujet

On ne choisit pas une police dans sa mémoire : on la trouve dans le monde du client, puis on la cherche dans un catalogue.

1. **Relever les lettres du sujet.** Dans l'inventaire (étape 3), noter les écritures qui existent déjà dans le monde du client : enseigne, étiquette, emballage, menu, ticket, plaque gravée, tampon, pochoir, manuel technique, carnet manuscrit, interface d'origine. En tirer trois traits : une **structure** (humaniste, grotesque, géométrique, réale, didone, garalde, mécane, monospace, script), une **époque**, une **texture** (nette, encrée, tamponnée, gravée, pixel).
2. **Chercher par catégorie, jamais par popularité.** Google Fonts filtré par catégorie et propriétés, jamais trié par « Popular » ou « Trending » ; Fontshare ; fonderies libres (Velvetyne, Collletttivo, la sélection Use & Modify) en vérifiant la licence de chaque police. La police du client prime toujours.
3. **Cinq candidates, deux écartées.** Écrire 5 polices qui correspondent aux trois traits, chacune avec la probabilité qu'un modèle la choisisse par défaut. Écarter les 2 plus probables, toute police du tableau 1, et toute police d'affichage utilisée dans les 3 dernières directions du journal (`direction-log.md`).
4. **Spécimen réel.** Composer le vrai titre, un vrai paragraphe, des chiffres et un bouton aux vraies tailles avec les candidates restantes. Garder celle qui tient le titre en 2 lignes, se lit à 16 px et ressemble au sujet.
5. **Écrire la raison.** Dans `DESIGN.md` : « Affichage : [police] ([source], [licence]), parce que [trait précis du sujet] ». **Test du concurrent appliqué à la police** : si la même phrase justifie la police du concurrent le plus proche, la raison appartient à la catégorie, pas au sujet ; on recommence.

Règles de choix :

- Une ou deux familles ; trois seulement avec un rôle d'exception clair. Un tiers des sites étudiés par Taste n'en utilisent qu'une.
- Associer par contraste de structure (une police d'affichage marquée et une police de texte sobre), jamais deux polices presque semblables. La police de texte est une vraie police de lecture (bonne hauteur d'x, chiffres lisibles, italique réelle), pas la police d'affichage dans une autre graisse.
- Une police variable sert à charger moins, pas à jouer avec ses axes : déformer un titre par l'axe de largeur ou de graisse est un effet, à justifier comme un moment signature.
- Vérifier que la police existe à ce nom exact et que sa licence couvre le web (A3) : un modèle invente volontiers des noms plausibles.

## 3. Une échelle, et rien en dehors

Les tailles posées au jugé (38 px ici, 1,25 rem là, cinq `clamp()` différents) donnent des tailles presque égales qui se disputent la hiérarchie : c'est le signe le plus sûr d'une page générée.

- **Une échelle modulaire déclarée une fois**, en tokens nommés par cran : `--step--1`, `--step-0` (le texte), `--step-1`… `--step-6`. Le rapport (ratio) se choisit selon le mode :

| Mode | Texte (`--step-0`) | Ratio mobile → desktop | Effet |
| --- | --- | --- | --- |
| Persuader | 17 → 19 px | 1,2 → 1,333 (jusqu'à 1,5 pour un sujet très affirmé) | Grands écarts, affiche |
| Opérer | 14 → 16 px | 1,125 → 1,2 | Échelle serrée, la hiérarchie vient aussi de la couleur |
| Lire | 18 → 20 px | 1,2 → 1,25 | Titres présents sans écraser le texte |
| Expérience | Libre | Libre, mais une seule échelle | |

- **Échelle fluide calculée, pas devinée** : chaque cran est un `clamp()` interpolé entre une taille à 360 px et une taille à 1440 px. Le générateur Utopia (utopia.fyi) fait ce calcul. Exemple pour Persuader, texte 17 → 19 px, ratio 1,2 → 1,333 (le plus petit cran reste à 14 px, lisible pour les notes) :

```css
:root {
  --step--1: clamp(0.8854rem, 0.8836rem + 0.008vw, 0.8908rem);  /* 14 → 14 px */
  --step-0:  clamp(1.0625rem, 1.0208rem + 0.1852vw, 1.1875rem); /* 17 → 19 px */
  --step-1:  clamp(1.275rem, 1.1724rem + 0.4562vw, 1.5829rem);  /* 20 → 25 px */
  --step-2:  clamp(1.53rem, 1.3366rem + 0.8593vw, 2.1101rem);   /* 24 → 34 px */
  --step-3:  clamp(1.836rem, 1.5104rem + 1.447vw, 2.8127rem);   /* 29 → 45 px */
  --step-4:  clamp(2.2032rem, 1.6878rem + 2.2906vw, 3.7493rem); /* 35 → 60 px */
  --step-5:  clamp(2.6438rem, 1.8592rem + 3.4874vw, 4.9979rem); /* 42 → 80 px */
  --step-6:  clamp(3.1726rem, 2.0094rem + 5.1697vw, 6.6622rem); /* 51 → 107 px */
}
```

- **Cinq crans utilisés au plus sur une page**, et ils **sautent des crans** : en Persuader, au moins 2 crans entre le texte et un titre de section, et au moins 2 crans entre un titre de section et l'affichage (par exemple `-1`, `0`, `2`, `4`, `6`). Deux tailles utilisées dont le rapport est sous 1,15 se lisent comme une erreur.
- **Aucune taille hors des tokens.** Chaque `font-size` du code est un `var(--step-n)`. Une taille qui « manque » se règle en changeant de cran ou de ratio, jamais par une valeur locale. Seules exceptions : l'illustration produit (faux UI), qui a sa propre petite échelle déclarée une fois (`--ui-1`… `--ui-4`, 11 à 15 px, voir `persuade.md`), et le texte d'un dessin SVG à `viewBox`, mesuré en unités du dessin, déclaré lui aussi en tokens (`--svg-*`).
- **Chaque cran porte son interligne et son tracking**, déclarés avec lui : texte 1,5 à 1,65 ; titres 1,1 à 1,25 ; affichage 0,9 à 1,05 avec -0,02 à -0,04 em.
- **Deux ou trois graisses**, déclarées en tokens (`--weight-text`, `--weight-strong`, `--weight-display`), jamais une graisse différente par composant.
- Mode Persuader : l'affichage est franchement grand ; le rapport titre/texte médian des sites étudiés par Taste est de 4,3. Plafond par défaut vers 6 rem, au-delà seulement pour un titre très court qui porte l'idée. Statement : 36 px au plus.
- Vérifier à 320 px que le titre d'affichage tient sur 2 lignes ; sinon raccourcir le titre avant de baisser le cran.

## 4. Régler

- Texte courant : 16 px minimum ; les champs de saisie aussi, car sous 16 px iOS zoome automatiquement au focus. 45 à 75 caractères par ligne (60 à 75 en mode Lire), réglé par `max-width` en `ch`.
- Petit texte : jamais de tracking négatif ; plus lisible = un peu plus grand ou un peu plus ouvert.
- Titres : `text-wrap: balance` ; `overflow-wrap: break-word; min-width: 0` sur les titres d'affichage. Paragraphes : `text-wrap: pretty`.
- Chiffres : `font-variant-numeric: tabular-nums` dans les tableaux, prix et minuteurs.
- Casse de phrase partout ; aucun label en capitales espacées ; pas d'italique d'emphase sur un mot d'un titre.

## 5. Charger

- Seules les graisses utilisées ; polices variables quand elles existent, axes limités à la plage utilisée.
- `font-display: swap` ; préchargement de la police critique uniquement.
- Une pile de repli réglée (`size-adjust`, `ascent-override`) pour limiter le décalage de mise en page au chargement.

## 6. Vérifier

`node scripts/check-tokens.mjs <fichier ou dossier>` signale chaque `font-size` hors tokens, chaque `font-family` en dur, les polices réflexes du tableau 1, plus de 5 crans utilisés et les tailles trop proches. Une police réflexe gardée pour raison de marque se déclare avec `--allow-font "Nom"` et se note comme défaut levé.
