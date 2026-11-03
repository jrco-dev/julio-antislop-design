# Full process

At every step, move forward with the person: questions with a recommended answer, four checkpoints (brief sheet, three first screens, first version, delivery), never a long silent wait (`intake.md`, "Rhythm").

`SKILL.md` gives the short version and the quick path. This file details each step of the full path, the delivery checklist and the report format.

## The 12 steps in detail

Steps 1 to 8 happen before writing any code and decide the quality. Do not skip them, even on a small request: going fast is exactly when the average comes back.

1. **Read the project and choose the mode.** Stack, `DESIGN.md` and `PRODUCT.md` if they exist (they take precedence over the skill's defaults, never over the absolute floor), existing brand, and above all the images actually available. Do not plan around images you do not have.
2. **Do the intake with the user before creating, in one go.** A model that lacks information fills the gaps with the average, and guessed taste is paid for in back-and-forth. For any new page, new screen or redesign, follow `references/intake.md`: three rounds in a row before any code, 12 questions at most, with the multiple-choice question tool when it exists (recommended option first, previews when possible). Round 1, the project (surface and mode, audience and scene, target action, what must exist). Round 2, taste, that is, everything needed to fill `DESIGN.md` (character, light and color, fonts or 3 pairings proposed from `references/font-catalog.md`, density, shapes, images, motion, liked references from `references/site-models.md` and rejections). Round 3, the material (brand, images, proofs with their source, copy, constraints). Never ask what the project already says. Then the brief sheet, which starts with "I read this project as: …", validated only once; after that no more questions until delivery, except for a real blocker. **Only an explicit hand-off** ("carte blanche", "do as you like") or nobody being there to answer skips the Taste round: then decide, and write the assumptions in the sheet. The intake steers the defaults, never the absolute floor. (In a redesign, validating the direction is added; see `references/redesign.md`.)
3. **Inventory the subject.** 8 to 12 elements that belong only to this client: its name and what it means, its place, its materials, its rituals and hours, the constraint it lives with, the printed objects of its world. Then three lists: what is real, what can be shown as an image and where it comes from, what is missing. What is missing stays absent. Record all of it in `PRODUCT.md` at the project root, created from `templates/PRODUCT.md` if it does not exist. Detail: `references/idea-and-direction.md`.
4. **Write the argument.** One claim and its proof per section. A section without a claim is deleted. This is what breaks the stock order of hero, logos, three features, testimonial, pricing, CTA.
5. **Consult real references.** At least 3: model sites from `references/site-models.md` (in the project's mode, at least 1 outside its sector) or galleries from `references/resources.md`, each noted with its URL and the quality borrowed (a rhythm, a proportion, a contrast), never a whole page. **See them, do not just read about them**: `node scripts/board.mjs <url>...` captures the sites and composes a board to look at before step 6. Without web access, say so and rely on this skill.
6. **Roll, then choose the direction away from the average.** Run `node scripts/roll.mjs --mode <mode> --brief "…" --log direction-log.md`: it assigns a composition archetype, three constraint cards (keep at least one), a color strategy, a font line and two risk levers (`references/originality.md`). The direction is built with this roll; re-roll only for a factual reason, noted. Then write 5 possible directions that respect the roll, with the probability of producing each by default, and discard the 2 most likely. Keep the one that carries an element of the inventory and differs from the last 3 in the log on at least 3 axes (log: `direction-log.md` at the project root or in a folder shared by the team, created from `templates/direction-log.md` if it does not exist): structure, theme, font, palette, hero, signature. Reject any direction that merely ticks off the prohibitions without asserting anything.
7. **State the idea.** "On this page, **[a thing specific to the subject]** becomes **[the composition device]**." Competitor test: if the sentence still works with the closest competitor, it belongs to the category; start again. Define the **living thing**: a single interaction drawn from the idea, with the real content, usable with a thumb, with a no-script fallback. Create `DESIGN.md` from `templates/DESIGN.md` if it does not exist; if it does, complete it without overwriting what is already decided there. For a new page or a full redesign, **build three first screens** that are very different (the roll and two re-rolls), compare them with `node scripts/explore.mjs .julio/explore`, have the person choose (or a fresh pair of eyes if they are absent), and only then build the whole page (`originality.md` §7).
8. **Write all the copy before the code.** Headlines of 2 lines maximum at every width, checked at 320 px (about 5 words, 32 characters targeted; otherwise cut words before reducing the size), one supporting sentence right below, one primary action named by what it does, full content for every expected section, real proof only.
9. **Build without motion.** Tokens first (colors, fonts, type scale, spacing scale, role tokens), then the hero on desktop and mobile, then each section with a composition different from its neighbor, then the visuals (order of preference in `references/idea-and-direction.md`; without photos, the ranked registers in `references/visuals.md`, and a visual anchor of the subject in the first two screens), then the living thing. Mode rules: `references/defaults-by-mode.md`, plus `references/persuade.md` or `references/operate.md`.
10. **Check automatically.** `node scripts/check-tokens.mjs <file or folder>` (sizes, spacing and fonts outside tokens, reflex fonts, overloaded scale, eyebrows), `node scripts/check-render.mjs <file or URL> --widths 390,768,1440,1920 --shots .julio/shots` (rendered page: scrolling, broken words, contrast, tiny text, targets, alt, headings, section rhythm, margins, placeholder text), then the list in `references/finish.md`, Impeccable detector on the code and on the rendered URL (`npx impeccable detect <file>` then `npx impeccable detect http://localhost:<port>`), inspection and screenshots at 390, 768, 1440 and 1920 px (Taste Skill's inspector, or Playwright otherwise), performance measurements per `references/performance.md`. Zero unjustified failures: a default lifted with its reason is marked as ignored in the detector, not left failing. If a tool is missing, say so in the report.
11. **Get a fresh pair of eyes to judge.** A subagent with a blank context looks at the screenshots and scores the page with the grid in `references/critique.md`, including the Originality axis and the déjà-vu test ("which known style does it look like?"). Fix the 3 worst problems, re-inspect. Three rounds at most. Without a subagent, reread the screenshots as a demanding designer discovering the page.
12. **Add motion, then deliver.** Start from a verified component in `references/resources.md`, within the mode's budget (`references/motion-and-video.md`), re-inspect, then deliver with the report (next section).

For an isolated component (a button, a card, a form), keep steps 1, 2 (one or two questions only if a point is blocking), 9, 10 and 12, and apply the floor and the mode defaults. In a redesign or for an isolated component, the delivery items tied to skipped steps (references, discarded directions, log) do not apply; the report says which ones.


## Delivery: the full checklist and the report

Do not deliver while any box is still empty:

- [ ] Floor A1 to A7 respected.
- [ ] `check-render.mjs` at zero errors at 390, 768, 1440 and 1920 px; every warning fixed or justified; list in `references/finish.md` passed.
- [ ] UX check of the 30 laws passed (`ux-principles.md`, final list); no manipulation (false scarcity, trick option, guilt-tripping).
- [ ] Subject-without-text test passed: the image of the first screen alone says what it is about.
- [ ] `check-tokens.mjs` at zero errors: no size, no spacing, no font outside tokens; display font outside the reflex list, or lifted with its brand reason.
- [ ] Detector at zero failures on the code and the rendered URL; inspection at 390, 768, 1440 and 1920 px; every screenshot opened after the last change.
- [ ] Performance under the A5 thresholds, with the spending the mode allows.
- [ ] A stranger reading the first screen for 5 seconds says what it is and what to do.
- [ ] Stranger test: the page could not have come out of the same agent without this skill. Competitor test passed.
- [ ] Roll respected (archetype, at least one card, two visible risk levers); three first screens compared; Originality at least 4 out of 5; the déjà-vu test names no known style.
- [ ] Every section has a heading; equal outer margins; no empty area taller than half a screen.
- [ ] A single primary action, the same everywhere it repeats, with no competing action at the same level; the accent about 4 times at most per screen.
- [ ] Browser surfaces themed (selection, scrollbars, focus, underline); light or dark chosen by the scene of use, not the category.
- [ ] Every lifted default has its written reason.
- [ ] Direction added to the log.

The report, short, in this order:

1. Reading of the brief and mode.
2. Roll (archetype, cards kept, levers), chosen direction, discarded directions with their probability, hero chosen among the three, idea, living thing.
3. References consulted: URL and quality borrowed.
4. Lifted defaults and their reason; brief instructions that took precedence.
5. Results: critique scores, detector, inspection, Core Web Vitals.
6. Credits and licenses: fonts (with the reason for the choice drawn from the subject), components, images, videos, sounds.
7. Sample content to be validated and placeholders to fill (size and expected content).
8. Checks not run, named as such. Never claim a check that did not run.
