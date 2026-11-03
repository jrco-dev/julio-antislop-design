# Redesigning something that exists

A redesign fixes the craft and keeps the product: its features, its content and the order of its sections stay. It replaces steps 3 to 9 of the process; steps 10 to 12 stay the same.

## 1. Look at the screen

Find the files that render it. If possible, run the app or open the page and take a screenshot: you judge what people see, not just the code. With only a URL, extract the system from the real site (colors, fonts, spacing) rather than guessing it. With only a screenshot, rebuild the screen as a faithful static HTML file and treat it as the original.

## 2. Written audit

Go through `tells.md` and list each sign found, one line each, with where it is. Also audit **the content**: mark every hollow block of the existing thing (grid of adjectives without proof, list of steps without content, unquantified promise, button that does not say what happens) and draw up the list of missing proofs (figures, clients, cases, faces, consistent identity). These blocks are neither kept as they are nor rewritten with invented facts: propose to the owner a verifiable rewording or deletion, and ask them for the proofs during the intake (round 3) before building. Take the mode into account: in Operate, subtle rules or a monospace on counters are allowed by `defaults-by-mode.md` and are not signs.

## 3. Diagnosis

- **Heavy slop** (signs everywhere: color, type, icons, copy): full process.
- **Light slop** (screen mostly well designed): fix only what the audit found; keep the brand, the palette, the type, the layout and the visuals. Big ideas go into the report as proposals.
- **No slop**: say so, propose 2 or 3 quantified touch-ups at most, apply only with consent. Never change a good screen for the fun of it.

## 4. Direction in 5 lines, validated before any change

Show the audit and the direction to the user and wait for their answer: changing direction later means redoing everything.

- **Product**: what it does and for whom, in one sentence.
- **Character**: 2 or 3 concrete words ("calm, exact, a little warm"). "Clean", "modern", "sleek", "minimal" and "premium" are forbidden: they describe every template.
- **World**: the place or material the product naturally belongs to; it tints the neutrals, the accent and the visual.
- **Moments**: 1 or 2 places rich in color, material and detail, chosen from what the product shows.
- **Signature**: a single small detail specific to the product, used everywhere it belongs and nowhere else.

A real brand (logo, color, font that is not slop) is kept. A purple-blue gradient, sparkles or a glow in a logo do not count as brand unless the user says so. Never rename the product.

## 5. Nine passes, in this order

Finish each pass over the whole screen before the next; spacing first, because everything reads differently once the rhythm is right.

1. **Spacing**: 4 px grid, same elements same sizes, groups tighter than the space between groups, column alignments, removal of isolated values (`mt-[13px]`).
2. **Color**: a neutral ramp tinted toward the world, three text roles, a rare, high-contrast accent; removal of hue gradients, glows, colored shadows, halos and neon borders; borders according to the mode (rule at 6-10% in Operate, no decorative rule in Persuade).
3. **Icons**: every emoji becomes an icon from a single set, one size, one stroke, text color; removal of icons that add nothing.
4. **Copy**: headlines that say what the product does and for whom; no exclamation marks; no "Welcome, Firstname! 👋" headline; short labels; changes with their reference; no trailing period on short elements; unverifiable promises removed or confirmed by the user; plausible sample data; "PRO", "New ✨" badges removed unless necessary.
5. **Type**: font chosen for character; weights 400-500, 600 at most; sentence case everywhere; no negative letter-spacing on small text; one number format in `tabular-nums`; no italic for emphasis.
6. **Layout**: sections and order kept; real app proportions; hero as a scene or as an asymmetric split; one primary action and one secondary.
7. **Details**: nested radii; keycaps; one main chart; stat cards = label, figure, change; varied widths; logo = product name in the main font plus a simple mark.
8. **Visuals**: removal of blobs, orbs, nebulae, robots and glowing brains; a hero shows something real (a scene from the world or a code preview of the product with a moment).
9. **Motion**: removal of pointless loops, `transition-all`, `hover:scale` on cards, bouncy springs, parallax; one easing curve, few durations; one entrance on load.

After the passes: consult references if the direction calls for it, and add the direction to the log so that following projects move away from it.

Final test: if you replace the product's name with another's, does the screen still work? If so, push the direction further into the copy, the visual and the signature.

Beware of the "template look" lurking over a cleaned-up screen: #161616 gray background, Inter, white text and the old brand color on a single button. It is not slop, but it is the absence of a decision.

Credit: passes and direction adapted from unslop, by Damir Sokolovsky (@heydamir), CC BY 4.0 license.
