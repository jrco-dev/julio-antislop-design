# Construire une palette

Une palette se construit à partir du sujet, se règle en OKLCH et se vérifie en contraste WCAG. Ne jamais partir d'une palette par défaut de framework.

## 1. Partir du sujet

- Couleur d'ancrage : celle de la marque si elle existe et n'est pas du slop ; sinon une couleur prise dans le monde du sujet (sa matière, la peinture de sa rue, le paysage de ses fenêtres).
- Proportions : un fond, une encre, un accent, éventuellement des aplats de section. L'accent couvre peu de surface ; s'il apparaît plus de 4 fois environ par écran, il ne désigne plus rien.

## 2. Régler en OKLCH

OKLCH sépare la clarté (L), la saturation (C) et la teinte (H), ce qui permet des pas réguliers à l'œil. CSS l'accepte directement : `oklch(62% 0.12 45)`.

- **Rampe de neutres** : 10 à 12 pas de clarté régulièrement espacés, avec une très faible saturation tirée vers la teinte d'ancrage (de l'ordre de 0,005 à 0,02). Des gris à saturation zéro sur une page qui a un ancrage paraissent morts.
- **Jamais de noir ni de blanc purs** : teinter vers l'ancrage. Exception possible pour le blanc de papier en mode Opérer.
- **Accent** : même teinte que l'ancrage ou une teinte choisie pour l'idée, saturation plus forte. Prévoir une version plus sombre pour l'accent utilisé comme texte sur fond clair.
- **Couleurs sémantiques** (succès, alerte, erreur) adoucies pour tenir dans la palette, et jamais seules porteuses du sens : toujours une icône ou un mot.

## 3. Nommer par rôle

Les composants n'utilisent que des tokens sémantiques :

```css
:root {
  --bg: …;          /* fond de page */
  --surface-1: …;   /* surfaces surélevées, un pas de ton chacune */
  --surface-2: …;
  --ink: …;         /* texte principal */
  --ink-2: …;       /* texte secondaire */
  --ink-3: …;       /* texte atténué */
  --line: …;        /* filets, en mode Opérer surtout */
  --accent: …;
  --accent-ink: …;  /* texte posé sur l'accent */
  --success: …; --warning: …; --danger: …;
  --focus: …;
}
```

## 4. Vérifier

- Chaque paire encre/fond utilisée : 4,5:1 pour le texte courant, 3:1 pour le grand texte, les icônes porteuses de sens et les bordures de contrôles (WCAG 2.2 AA). Le contraste se calcule sur les valeurs sRGB rendues, pas sur la clarté OKLCH.
- Texte sur l'accent : 4,5:1, sinon assombrir l'accent ou passer à un texte sombre.
- APCA peut servir de complément, jamais de remplacement : WCAG 3 n'a pas d'algorithme de contraste arrêté.

## 5. Mode sombre

- Le concevoir avec le mode clair, pas l'obtenir par inversion.
- Surfaces : plus elles sont surélevées, plus elles sont claires ; la profondeur vient des écarts de surface et des filets, pas des ombres.
- Saturation de l'accent réduite, clarté augmentée ; tous les contrastes revérifiés séparément.
- Choisir clair ou sombre selon la scène d'usage (qui, où, sous quelle lumière), jamais selon la catégorie (« tech = sombre »).
