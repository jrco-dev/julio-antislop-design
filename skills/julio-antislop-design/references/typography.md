# Choisir et échelonner la typographie

La typographie est le levier le plus visible : c'est là qu'on dépense en premier le budget de qualité.

## 1. Choisir des polices réelles

- Sources : la police du client ; Google Fonts ; Fontshare (Indian Type Foundry, gratuite pour usage personnel et commercial, sous EULA ITF) ; une police achetée par le client. Vérifier que la police existe à ce nom exact et que sa licence couvre le web : un modèle invente volontiers des noms plausibles.
- Une ou deux familles ; trois seulement avec un rôle d'exception clair. Un tiers des sites étudiés par Taste n'en utilisent qu'une.
- Aucune police par défaut comme voix d'affichage sans raison de marque : Inter, Roboto, Open Sans, Poppins, Lato, police système, et Space Grotesk, le repli « original » vers lequel les modèles glissent quand on leur interdit Inter.
- Choisir pour le caractère du projet (ses 2 ou 3 mots de caractère, son monde), pas pour un genre : une serif contrastée n'est pas un raccourci vers « premium ».
- Associer par contraste de structure (une police d'affichage marquée et une police de texte sobre), jamais deux polices presque semblables.

## 2. Échelonner

- Deux ou trois tailles font le travail visible : une très grande, une petite, peu entre les deux. Cinq tailles au plus sur une page.
- Mode Persuader : le titre d'affichage doit être franchement grand. Le rapport titre/texte médian des sites étudiés est de 4,3. Plafond par défaut d'environ 6rem ; au-delà seulement pour un titre très court qui porte l'idée.
- Mode Opérer : échelle serrée de 5 tailles au plus (par exemple 12, 14, 16, 20, 28 px), la hiérarchie vient de la taille et de la couleur ; graisses 400-500.
- Échelle fluide avec `clamp()` plutôt que des sauts par breakpoint :

```css
:root {
  --text-body: clamp(1rem, 0.95rem + 0.25vw, 1.125rem);
  --text-title: clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);
  --text-display: clamp(2.25rem, 1.25rem + 6vw, 6rem);
}
```

Vérifier à 320 px que le titre d'affichage tient sur 2 lignes ; sinon raccourcir le titre avant de baisser le minimum.

## 3. Régler

- Texte courant : 16 px minimum ; les champs de saisie aussi, car sous 16 px iOS zoome automatiquement au focus. Interligne de 1,5 à 1,65, 45 à 75 caractères par ligne (60 à 75 en mode Lire).
- Affichage : interligne de 0,9 à 1,05 ; tracking de -0,02 à -0,04em, jamais au-delà ; un titre en capitales qui peut passer à la ligne garde au moins 1,0 d'interligne.
- Petit texte : jamais de tracking négatif ; plus lisible = un peu plus grand ou un peu plus ouvert.
- Titres : `text-wrap: balance` ; `overflow-wrap: break-word; min-width: 0` sur les titres d'affichage.
- Chiffres : `font-variant-numeric: tabular-nums` dans les tableaux, prix et minuteurs.
- Casse de phrase partout ; aucun label en capitales espacées ; pas d'italique d'emphase sur un mot d'un titre.

## 4. Charger

- Seules les graisses utilisées ; polices variables quand elles existent.
- `font-display: swap` ; préchargement de la police critique uniquement.
- Une pile de repli réglée (`size-adjust`, `ascent-override`) pour limiter le décalage de mise en page au chargement.
