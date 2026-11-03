# Choosing and scaling typography

Typography is the most visible lever, and it is where a generated page gets recognized first. Three signs give it away: a font that every model picks, sizes set by eye that are almost equal, spacing with no system. This file covers the first two; spacing is in `spacing.md`.

## 1. Reflex fonts (dated, November 2026)

A reflex font is a font a model picks without looking at the subject. It is not bad: it is **guessable**. These are never taken as a first choice; they are kept only with a written brand reason (the client's brand guidelines require it), noted as a lifted default.

| Reflex family | Fonts |
| --- | --- |
| Historical defaults | Inter, Roboto, Open Sans, Lato, Poppins, Montserrat, system font (in Operate mode, a working font or the system stack stays allowed for interface text: the list targets the display voice and the brand) |
| "Original" fallbacks when Inter is banned | Space Grotesk, DM Sans, Manrope, Plus Jakarta Sans, Outfit, Sora, Geist, Hanken Grotesk |
| "Expressive" variable grotesques | **Archivo** and its width axis (spotted on 3 of our own pages and on Impeccable's during the blind test of November 3, 2026); any headline stretched or compressed through the `wdth` axis with no reason from the subject |
| Fontshare reflexes | Satoshi, General Sans, Clash Display, Cabinet Grotesk |
| "Editorial" and "premium" shortcuts (wave 3) | Instrument Serif, Fraunces, Playfair Display, Cormorant, Libre Caslon (spotted at Hallmark during the same test); any high-contrast serif in italic to "look expensive" |

The list grows with each generation: when a font shows up in two unrelated generated projects, it goes in. Update this table together with `tells.md`.

## 2. Choosing a font from the subject

You don't pick a font from memory: you find it in the client's world, then look it up in a catalog.

1. **Record the subject's letters.** In the inventory (step 3), note the lettering that already exists in the client's world: sign, label, packaging, menu, receipt, engraved plate, stamp, stencil, technical manual, handwritten notebook, original interface. Draw three traits from it: a **structure** (humanist, grotesque, geometric, realist, didone, garalde, slab, monospace, script), an **era**, a **texture** (clean, inked, stamped, engraved, pixel).
2. **Search by category, never by popularity.** Google Fonts filtered by category and properties, never sorted by "Popular" or "Trending"; Fontshare; free foundries (Velvetyne, Collletttivo, the Use & Modify selection), checking the license of each font. The client's font always comes first.
3. **Five candidates, two discarded.** Write down 5 fonts that match the three traits, each with the probability that a model would pick it by default. Discard the 2 most likely, any font from table 1, and any display font used in the last 3 directions of the log (`direction-log.md`).
4. **Real specimen.** Set the real headline, a real paragraph, numbers and a button at real sizes with the remaining candidates. Keep the one that holds the headline in 2 lines, reads at 16 px and looks like the subject.
5. **Write the reason.** In `DESIGN.md`: "Display: [font] ([source], [license]), because [specific trait of the subject]". **Competitor test applied to the font**: if the same sentence justifies the font of the closest competitor, the reason belongs to the category, not to the subject; start over.

### 2 bis. When the user provides no font

Don't decide silently. During scoping (`intake.md`, round 2), ask for the brand font; if there is none, **propose**:

1. Read the subject's dominant trait and the mode, then open `font-catalog.md` at the matching line (two neighboring lines if needed).
2. Run the candidates through the method above (reflexes, log, competitor test).
3. Present **3 pairs** of display + text, each from a different line or spirit, with a sentence saying which trait of the subject it carries and one honest risk. The recommended pair first, never the most expected one. If the multiple-choice question tool exists, ask them as options; otherwise in the brief sheet, "Proposed fonts" line.
4. The user chooses or corrects. With no answer (unattended run, "go ahead"), take the recommended pair and write it down as an assumption in the brief sheet and the report.

The scale adapts to the need the same way: the mode sets the ratio and the text size (§3), the content adjusts them (a long headline drops one step, a reading page raises the text size), always by changing step or ratio, never with a local value.

Selection rules:

- One or two families; three only with a clear exceptional role. A third of the sites studied by Taste use only one.
- Pair by structural contrast (a marked display font and a sober text font), never two nearly identical fonts. The text font is a real reading font (good x-height, legible figures, true italic), not the display font in another weight.
- A variable font serves to load less, not to play with its axes: distorting a headline through the width or weight axis is an effect, to be justified like a signature moment.
- Check that the font exists under that exact name and that its license covers the web (A3): a model readily invents plausible names.

## 3. One scale, and nothing outside it

Sizes set by eye (38 px here, 1.25 rem there, five different `clamp()`s) give nearly equal sizes fighting over the hierarchy: this is the surest sign of a generated page.

- **A modular scale declared once**, as tokens named by step: `--step--1`, `--step-0` (the text), `--step-1`… `--step-6`. The ratio is chosen by mode:

| Mode | Text (`--step-0`) | Ratio mobile → desktop | Effect |
| --- | --- | --- | --- |
| Persuade | 17 → 19 px | 1.2 → 1.333 (up to 1.5 for a very assertive subject) | Large gaps, poster |
| Operate | 14 → 16 px | 1.125 → 1.2 | Tight scale, hierarchy also comes from color |
| Read | 18 → 20 px | 1.2 → 1.25 | Headings present without crushing the text |
| Experience | Free | Free, but a single scale | |

- **Fluid scale computed, not guessed**: each step is a `clamp()` interpolated between a size at 360 px and a size at 1440 px. The Utopia generator (utopia.fyi) does this calculation. Example for Persuade, text 17 → 19 px, ratio 1.2 → 1.333 (the smallest step stays at 14 px, legible for notes):

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

- **Five steps used at most on a page**, and they **skip steps**: in Persuade, at least 2 steps between the text and a section heading, and at least 2 steps between a section heading and the display (for example `-1`, `0`, `2`, `4`, `6`). Two sizes in use whose ratio is under 1.15 read as a mistake.
- **No size outside the tokens.** Every `font-size` in the code is a `var(--step-n)`. A "missing" size is solved by changing step or ratio, never with a local value. Only exceptions: the product illustration (fake UI), which has its own small scale declared once (`--ui-1`… `--ui-4`, 11 to 15 px, see `persuade.md`), and the text of an SVG drawing with a `viewBox`, measured in drawing units, also declared as tokens (`--svg-*`).
- **Each step carries its line height and tracking**, declared with it: text 1.5 to 1.65; headings 1.1 to 1.25; display 0.9 to 1.05 with -0.02 to -0.04 em.
- **Two or three weights**, declared as tokens (`--weight-text`, `--weight-strong`, `--weight-display`), never a different weight per component.
- Persuade mode: the display is frankly large; the median headline/text ratio of the sites studied by Taste is 4.3. Default ceiling around 6 rem, beyond that only for a very short headline that carries the idea. Statement: 36 px at most.
- Check at 320 px that the display headline fits in 2 lines; otherwise shorten the headline before lowering the step.

## 4. Tuning

- Body text: 16 px minimum; input fields too, because below 16 px iOS zooms automatically on focus. 45 to 75 characters per line (60 to 75 in Read mode), set with `max-width` in `ch`.
- Small text: never negative tracking; more legible = slightly larger or slightly more open.
- Headings: `text-wrap: balance`; `overflow-wrap: break-word; min-width: 0` on display headings. Paragraphs: `text-wrap: pretty`.
- Numbers: `font-variant-numeric: tabular-nums` in tables, prices and timers.
- Sentence case everywhere; no letter-spaced all-caps labels; no emphasis italic on one word of a heading.

## 5. Loading

- Only the weights in use; variable fonts when they exist, axes limited to the range in use.
- `font-display: swap`; preload the critical font only.
- A tuned fallback stack (`size-adjust`, `ascent-override`) to limit layout shift on load.

## 6. Checking

`node scripts/check-tokens.mjs <file or folder>` flags every `font-size` outside the tokens, every hard-coded `font-family`, the reflex fonts from table 1, more than 5 steps used and sizes that are too close. A reflex font kept for a brand reason is declared with `--allow-font "Name"` and noted as a lifted default. In Operate or Read mode, `--mode operate` or `--mode read` downgrades reflex fonts to a warning.
