# Spacing with a system

Generated spacing is recognizable in two ways: everything is at the same distance (`gap-4`, `p-6`, `2rem` everywhere), or each block has its own value set by eye (0.35 rem, 0.6 rem 0.55 rem, 3 rem 5 rem). In both cases, the eye can no longer read what belongs together. Space is the first structure of a page: before the text does, it says what belongs to what (law of proximity, see `ux-principles.md`).

## 1. A declared scale

- 4 px base. A scale of named steps, declared once in `:root`:

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
  --space-3xl: clamp(4rem, 2.67rem + 5.93vw, 8rem);   /* 64 → 128, between blocks of a section */
  --space-section: clamp(6rem, 4rem + 8.89vw, 12rem); /* 96 → 192, between sections */
}
```

- The large steps are fluid (`clamp()` between 360 and 1440 px, computed like the type scale, for example with Utopia); the small ones stay fixed, because an 8 px gap has no need to grow.
- **No length outside the tokens** in `margin`, `padding`, `gap`, `row-gap`, `column-gap` and `inset`. `0` and `auto` are allowed. An optical adjustment (aligning a glyph with an edge) is done with a named, commented token, never with a stray number.

## 2. Three levels that never touch

Spacing carries the hierarchy if there are three clearly separated levels, each at least double the previous one:

| Level | Where | Steps |
| --- | --- | --- |
| Inner | Inside a component: icon and label, label and field, padding of a button or a chip | `3xs` to `s` (4 to 16 px) |
| Group | Between the elements of a block: headline, supporting sentence, action; between two cards of the same grid | `s` to `xl` (16 to 48 px) |
| Section | Between two blocks of a section, then between two sections | `3xl` then `section` (64 to 192 px) |

Translate them into role tokens, which components use instead of the raw steps: `--gap-inner`, `--gap-stack`, `--gap-group`, `--gap-section`. The choice is made once, at the system level, not component by component.

## 3. Rhythm rules

- **A heading belongs to what follows it**: the space above a heading is at least double the space below it.
- **The supporting sentence hugs the headline** (an `m` to `l` step), the action comes one step further.
- **A single gap between sections**, the same everywhere (`--space-section`): check on the full-page screenshot that no gap between two sections is clearly larger than the others (an overly tall block or a forgotten `min-height` is often the cause).
- **The gap between sections is clearly larger than any internal gap**: 120 to 240 px on desktop in Persuade (see `persuade.md`), 64 to 96 px on mobile.
- **Vary by level, not by block**: variety comes from moving from one level to another and from the change of composition between sections, never from a value invented for one block.
- **Buttons and fields**: 44 px height targeted on mobile; vertical and horizontal padding drawn from the scale, horizontal about 1.5 to 2 times the vertical; the same padding on all buttons in the same row.
- **Equal outer margins** left and right, as a single gutter token (`--gutter`), and a container capped by a single token (`--measure-page`).
- **Operate mode**: tighter scale (section drops to `xl`, 48 px), but the three levels stay distinct; density comes from smaller steps, not from arbitrary values.

## 4. Checking

`node scripts/check-tokens.mjs <file or folder>` flags every `margin`, `padding`, `gap` or `inset` written as a raw value. Zero flags before delivery.
