# Operate mode: apps, dashboards, forms

Here the visitor works on the screen for hours. Singularity shows in precision and one or two rich moments; the rest of the interface stays calm. Known conventions have their place.

## Spacing

- 4 px grid; an odd value only to center exactly.
- Same elements, same sizes: every row in a list has the same height and the same gap, every card in a row the same padding.
- Less space inside a group than between groups.
- Icons in a column, labels on one line, numbers right-aligned in a column.
- Padding by density: about 16 px for dense panels and sidebars, 20 to 24 for cards, 24 to 32 for page edges.
- Navigation: rows of 32 to 36 px spaced 2 to 4 px apart; a section label closer to its items than to the section above (for example 24 above, 8 below).
- App: sidebar of 240 to 280 px, fluid content capped around 1440-1600 px; never an app shrunk into a narrow centered column.

## Color

- One neutral ramp, slightly tinted toward the product's world; backgrounds, surfaces, borders and text come from it.
- Three text roles: primary, secondary, muted.
- A rare accent in the interface: primary action, selection, the number that matters. Accent carrying text at 4.5:1.
- Semantic colors reserved for meaning (green for an increase, red for an error), softened to fit the palette.
- On a dark background, depth comes from surface steps and hairlines, not shadows; the primary button can be an off-white from the ramp with dark text.

## Charts and numbers

- One main chart clearly larger than the rest; the other data is smaller and of a different kind (ranked list with thin bars, short table).
- One accent per chart, on the thing that matters; the rest in neutral tones. Several hues only to distinguish real series.
- Chart type by data: trend as a line, comparison as bars, share as a single stacked bar or a bar list, goal as a progress bar.
- Muted grid and labels; no rainbow bars within a series, no glowing bars, no days in capitals.
- Stat card: a label, a large number, a change with its reference. No decorative sparkline added to fill space.
- Plausible, consistent sample data: never "123,456" or "[X]", and the totals add up.
- Varied widths: 3 or 4 compact stats above a large chart, or a wide chart next to a narrow list.

## Quiet panels

After Taste Skill: the interface stays 90 to 95% neutral; color comes from the content (photos, real tool logos, data).

- Two levels of boxes at most: a panel and what it holds; inside, groups separate by space or a rule.
- One panel recipe for the whole app; importance comes from size and position, not a second style.
- Accent once per panel (the row worked on, the selection); statuses, tags and dates in ink tints.
- No pattern (grid paper, dots) behind a list, a table or a window.

## Forms and feedback

- A visible label on every field, never the placeholder alone; persistent help text under complex fields.
- Error under the field concerned, linked by `aria-describedby`, stating the cause and how to fix it. After a failed submit, focus on the error summary or the first invalid field.
- Validation on blur, not on every keystroke.
- `email`, `tel`, `number` types and `autocomplete` for the right keyboard and autofill; accept varied formats and store a single format.
- Button disabled with an indicator during a submit; brief success state; undo possible after a destructive action; confirmation before a deletion.
- Toasts of 3 to 5 s, `aria-live="polite"`, without stealing focus.
- Useful empty states: a message and an action.

## Icons and details

- One icon set, 16 or 18 px, 1.5 stroke, color of the text role; icon box of the same width in every row, fixed gap of 8 or 10 px to the label.
- Nested radii (see `defaults-by-mode.md`); keyboard shortcuts as keycaps; counters and metadata in muted text rather than glowing badges.
- Active state: a small surface step and a hairline, not a glowing gradient.
- Motion: one entrance on load; hover = color or surface change; press = slight scale-down; a changing number animates. Remove `animate-pulse` on anything that is not live, bouncy springs, `hover:scale` on cards.

## Moments

An app screen almost always needs zero generated images. Its moments come from the product: a polished chart, well-set numbers, real content (product photos, avatars), a status that feels alive, a real object the product handles (a bank card in a finance app).
