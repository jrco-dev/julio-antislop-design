# Building a palette

A palette is built from the subject, tuned in OKLCH and checked for WCAG contrast. Never start from a framework's default palette.

## 1. Start from the subject

- Anchor color: the brand's if it exists and is not slop; otherwise a color taken from the subject's world (its material, the paint on its street, the landscape outside its windows).
- Proportions: a background, an ink, an accent, possibly section fills. The accent covers little surface; if it appears more than about 4 times per screen, it no longer points to anything.

## 2. Tune in OKLCH

OKLCH separates lightness (L), chroma (C) and hue (H), which allows steps that look even to the eye. CSS accepts it directly: `oklch(62% 0.12 45)`.

- **Neutral ramp**: 10 to 12 evenly spaced lightness steps, with a very low chroma pulled toward the anchor hue (on the order of 0.005 to 0.02). Zero-chroma grays on a page that has an anchor look dead.
- **Never pure black or white**: tint toward the anchor. Possible exception for paper white in Operate mode.
- **Accent**: same hue as the anchor or a hue chosen for the idea, higher chroma. Plan a darker version for the accent used as text on a light background.
- **Semantic colors** (success, warning, error) softened to fit the palette, and never the sole carriers of meaning: always an icon or a word.

## 3. Name by role

Components use only semantic tokens:

```css
:root {
  --bg: …;          /* page background */
  --surface-1: …;   /* raised surfaces, one tone step each */
  --surface-2: …;
  --ink: …;         /* primary text */
  --ink-2: …;       /* secondary text */
  --ink-3: …;       /* muted text */
  --line: …;        /* hairlines, mostly in Operate mode */
  --accent: …;
  --accent-ink: …;  /* text set on the accent */
  --success: …; --warning: …; --danger: …;
  --focus: …;
}
```

## 4. Check

- Every ink/background pair in use: 4.5:1 for body text, 3:1 for large text, meaningful icons and control borders (WCAG 2.2 AA). Contrast is computed on the rendered sRGB values, not on OKLCH lightness.
- Text on the accent: 4.5:1, otherwise darken the accent or switch to dark text.
- APCA can serve as a complement, never as a replacement: WCAG 3 has no settled contrast algorithm.

## 5. Dark mode

- Design it alongside light mode, don't get it by inversion.
- Surfaces: the more raised, the lighter; depth comes from surface steps and hairlines, not shadows.
- Accent chroma reduced, lightness increased; all contrasts rechecked separately.
- Choose light or dark from the usage scene (who, where, under what light), never from the category ("tech = dark").
