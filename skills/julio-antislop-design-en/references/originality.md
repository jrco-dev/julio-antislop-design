# Originality: getting out of déjà-vu

Removing the tells does not make a page original. The four pages made with this skill between 2 and 3 November 2026 were clean, and two judges found them "already seen": they converged on one style, which this file calls **clean anti-slop**. This file gives methods that **produce** difference instead of prohibiting.

## 1. Our own convergence (wave 5)

Signature found in our own outputs: light paper background; headline in a condensed grotesque, left-aligned, with the supporting sentence on the right; thin rules and tables; a single accent (yellow, green or blue); airy sections stacked one below the other; numbered lists. Each element is defensible; the whole is guessable. A page that ticks four of these six traits without the rolled archetype requiring it has failed the déjà-vu test (§7).

## 1a. Originality never replaces proof

Measured on 3 November 2026 on the JRCO redesign: the rolled version (archetype "The map") gained distinctiveness but lost the product (product visual 2/10 against 9/10 for the previous version), and with it credibility. Rules:

- **The product stays visible**: if the product can be shown (an interface, a file, an object, a result), the first screen or the next section shows it for real, whatever the archetype. The archetype organizes the page around the product; it never replaces it with a metaphor.
- **A good living thing is kept**: if a previous version had an interaction that demonstrated the product (the file that becomes a slide), the new direction takes it over in its own form, even if the déjà-vu test penalizes it a little.
- **One metaphor, once**: the archetype never repeats the same information in three forms (three timelines of the same steps); each section brings new content.

## 2. The roll (step 6, mandatory)

A model's first choice is every model's choice. The roll takes it away:

```bash
node scripts/roll.mjs --mode persuader --brief "<the brief in one sentence>" --log direction-log.md
```

It assigns a **composition archetype** (§3), **three constraint cards** (§4, keep at least one), a **color strategy**, a **font line** from `font-catalog.md` and **two risk levers** (§5), avoiding what the last 3 lines of the log already used. It writes everything to `.julio/roll.json`.

- The direction is built **with** what was rolled: the archetype carries the inventory element chosen in step 7.
- Re-roll (`--reroll`) only for a factual reason: the archetype cannot carry the real content (a game board with no steps at all, a map with no place). Taste is never a reason. Note the re-roll and its reason in the report.
- An explicit request from the person (a style, a structure) takes precedence over the roll (A7): then roll only the cards and the levers.

## 3. Twenty-four composition archetypes

An archetype is a **structure**, not a style: it says how the page is built; the direction decides how it looks.

| # | Archetype | The page is built like… | It needs | Modes |
| --- | --- | --- | --- | --- |
| C1 | The object-page | an object from the subject's world (label, ticket, notebook, record card, packaging, plan) whose every part works: links, actions, readable text | a real printed object of the subject | P, E |
| C2 | The instrument | a tool that fills the first screen (configurator, simulator, calculator); the text comes after | a real data point or setting | P, O |
| C3 | The single scale | a single huge element (figure, word, detail, object) that structures the whole page | an element that deserves it | P, E |
| C4 | The sequence | a series of screens on scroll, one step per screen (ritual, making, process) | a real series of steps | P, E, L |
| C5 | The index | a rich list or table that is the page (menu, hours, catalog, program) | enumerable content | P, O, L |
| C6 | The poster | a series of full-screen posters, each with its own flat color and composition | little text per section | P, E |
| C7 | The permanent split | a split screen: one side fixed (image, object, map), the other scrolls | an image or object that holds for a long time | P, E |
| C8 | The map | a map, plan or cross-section you travel through | real places or parts | P, E, L |
| C9 | The timeline | a horizontal chronology (with an accessible vertical fallback) | real dates | P, L, E |
| C10 | The collage | images and text overlapping, cut out, slightly rotated | real images or materials | E, P |
| C11 | The conversation | a dialogue: the visitor's questions and the answers, in the order they ask them | real objections | P |
| C12 | The technical document | a manual or spec sheet: dimensions, callouts, appendices, captions | real measurements | P, L |
| C13 | The almanac | a calendar or the seasons as structure | a real rhythm across the year | P, L |
| C14 | The showcase | the product alone, very large, on a flat color; the page revolves around it | a real image of the product | P |
| C15 | Typography only | no images: typography makes the image (size, cut, overlap, rhythm) | strong words | P, E |
| C16 | The feed | a live stream (log, status, latest entries) that shows the thing exists | real updated data | P, O |
| C17 | The comparison | a before/after or a slider separating two states | two real states | P, O |
| C18 | The board | a game path: squares, levels, progression | a real progression | P, E |
| C19 | The handmade print | a zine, a photocopy, irregular columns | a subject that comes from that culture | E |
| C20 | The scene | a single full-frame image that lasts, the text placed on its calm areas | a very good image | P, E |
| C21 | The specimen | a series of cards on the same grid (measurements, origin, condition) | comparable pieces | P, E, L |
| C22 | The workbench | a desk seen from above, objects laid out (real images) | photographed objects | E, P |
| C23 | The archive | folders, shelf marks, stamps, filing | a real history or collection | L, E |
| C24 | The control room | status and control panels, even in Persuade, if the product is a system | a product that controls something | O, P |

A page may borrow a second archetype for one section, never more.

## 4. Constraint cards

The roll gives three; keep at least one, written in the report.

1. A single color and black (or white).
2. No rounded rectangle, no card.
3. A single text size apart from the main headline.
4. The main content at the bottom of the first screen, not at the top.
5. The navigation is inside the content (`nav-footer.md`, N18).
6. Nothing is centered.
7. The background color changes with each section.
8. The subject's figures are the display typography.
9. A single image, cropped in several ways throughout the page.
10. A texture taken from the subject's real material (paper, fabric, metal, earth), photographed or scanned.
11. Two fonts of opposite structure (one highly drawn, one highly neutral).
12. An asymmetric grid (5 or 7 columns) where nothing aligns to the center.
13. The main headline is more than half the screen width.
14. The interaction is the first screen.
15. Borrow the visual vocabulary of another trade (the roll picks it: railway signage, pharmacy, cartography, sheet music, assembly instructions, theater program, weather report, till receipt, playing card, lab label).
16. The text reads from bottom to top or is spread over two axes, for a single moment of the page.

## 5. Risk levers

An original page takes at least **two** visible risks; the roll proposes two, the direction may replace them with two others from this list:

- **Extreme scale**: an element taller than 40% of the screen height, or a size contrast greater than 10 to 1.
- **Color that carries the page**: a flat color over 30 to 100% of the surface, not an accent.
- **The subject's material as structure**: the page is built with it, not decorated with it.
- **The grid broken on purpose**: an element that overlaps, overflows or breaks alignment, once, for a reason.
- **Typography as image**: a word or figure treated as an illustration.
- **Interaction as argument**: understanding the product by using it.
- **An unexpected rhythm**: a very short, very strong section between two long ones, an abrupt change of background or density.
- **An original image**: a photo taken for the project, a scan, a commissioned illustration.

The floor stays whole: contrast, keyboard, reduced motion, performance.

## 6. Seeing the references (step 5)

You are not inspired by a site you have only read about. When the network allows:

```bash
node scripts/board.mjs https://site-1 https://site-2 https://site-3 --out .julio/board
```

It captures each site on desktop and mobile, then composes a `board.png` board. Look at it with the image reading tool before writing the directions, and note for each site the quality borrowed as you **see** it. If a site does not load, say so and take another from `site-models.md`.

## 7. Three heroes before the page (after step 7)

Before building the whole page, build **three first screens** that are very different: the one from the rolled direction, and two others from two new rolls (`--reroll`). Each in `.julio/explore/a.html`, `b.html`, `c.html`, with the real copy.

```bash
node scripts/explore.mjs .julio/explore
```

The script captures all three at 1440 and 390 px and composes `explore/index.html` (the three side by side) and `explore/board.png`.

- **Person present**: show them the comparison page; they choose, or mix ("B's color on A's structure").
- **Person absent**: a subagent with a fresh context chooses from the screenshots, with a single criterion: which one has it never seen? Without a subagent, keep the one that shares the fewest traits with §1 and with the log.

Then build the whole page from the chosen hero.

## 8. Déjà-vu test (step 11)

Show the screenshot of the first screen to a fresh pair of eyes and ask them to describe the page in 12 words, then: "Which known style does it look like?" If the answer names a known style (dark neon SaaS, cream-and-serif editorial, the clean anti-slop of §1, pastel bento, yellow-and-black brutalism, glass on a pastel background, Apple clone, black portfolio with a custom cursor), first change the most visible risk lever, then re-inspect. The critique adds the **Originality** axis (`critique.md`): below 4 out of 5, the page is not delivered.
