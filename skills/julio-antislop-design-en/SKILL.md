---
name: julio-antislop-design-en
license: MIT
description: "Designs, builds, redesigns or reviews landing pages, websites, app interfaces, dashboards, docs and portfolios that look designed, not generated: an idea drawn from the subject, real references, a roll against convergence, a floor for accessibility, honesty and performance, and no AI visual tells. Use this skill whenever a task changes the look, layout, typography, color, motion or feel of a web interface, even if the user never says \"design\": build or redesign a landing page, site, app screen, dashboard, docs or portfolio; make a screen less generic, \"more professional\", \"premium\", or make it look less AI-generated; review or critique a UI; pick fonts or a color palette; add animation or motion; make a product video in code."
---

English edition. The French original is `julio-antislop-design`; both share the same rules and scripts.

# julio-antislop-design-en

A generated page looks like the average of every page ever seen: nothing in it is wrong, nothing in it was decided. This skill replaces defaults with decisions: **the idea comes from the subject**, **the direction comes from real references and a roll away from the average**, **a floor protects** accessibility, honesty and performance, and **you look** at what you made before delivering. Removing the tells is not enough: a clean, empty page is a tell too (`references/originality.md`).

Note: `--mode` takes `persuade`, `operate`, `read` or `experience` (the French values `persuader`, `operer`, `lire` also work).

## 1. Choose the path

| Request | Path |
| --- | --- |
| Small request: one component, one section, a tweak, a fix, or "do it quickly" | **Quick** (§3) |
| New page, new site, new screen, new system | **Full** (§4) |
| Redo something that exists | **Full**, redesign variant (`references/redesign.md`) |
| Review a design | Grid in `references/critique.md` and list in `references/tells.md`, without building |

## 2. Choose the mode

Every rule depends on what the visitor must succeed at on this surface, not on the product.

| Mode | The visitor succeeds when… | Surfaces |
| --- | --- | --- |
| Persuade | they decide and act | Landing, marketing, pricing |
| Operate | they finish a task | App, dashboard, admin, settings |
| Read | they understand | Docs, articles, guides, help |
| Experience | they are inside the work | Portfolio, gallery, showcase |

Two surfaces in one request: each in its own mode, with shared palette and typography.

## 3. Quick path

1. Read `DESIGN.md` and `PRODUCT.md` if they exist and follow them. One question at most, only if a fact is blocking.
2. Apply the floor (§5) and the mode defaults (`references/defaults-by-mode.md`); everything goes through the existing tokens, or a small declared scale if there are none.
3. `node scripts/check-tokens.mjs <file>` and `node scripts/check-render.mjs <file>` at zero errors; the screenshots looked at at 390 and 1440 px.
4. Three-line report: what changed, checks passed, what could not run.

No full intake, no roll, no three heroes. If the request grows (a whole page), switch to the full path.

## 4. Full path, in 12 steps

Detail of each step: `references/process.md`. Steps 1 to 8 happen before any code.

1. **Read the project**, the mode, the images actually available.
2. **Do the intake in one go**: project, taste (everything that fills `DESIGN.md`), material; 12 questions at most, then a brief sheet validated once. Only an explicit hand-off ("carte blanche", free hand) or nobody being there to answer skips the taste round. `references/intake.md`.
3. **Inventory the subject**: 8 to 12 elements specific to the client; real, showable, missing. `PRODUCT.md`.
4. **Write the argument**: one claim and its proof per section.
5. **Look at real references**: 3 sites from `references/site-models.md`, including one outside the sector; `scripts/board.mjs` to capture them.
6. **Roll the direction**: `node scripts/roll.mjs --mode <mode> --brief "…" --log direction-log.md` (archetype, cards, color, fonts, risks), then 5 directions, the 2 most likely discarded. `references/originality.md`.
7. **State the idea** ("[a thing from the subject] becomes [a device]", competitor test), the living thing, `DESIGN.md`; **three first screens** compared with `scripts/explore.mjs`, only one chosen.
8. **Write all the copy** before the code; headlines of 2 lines at most at 320 px.
9. **Build without motion**: tokens first (colors, fonts, type scale, spacing scale), then hero, sections, visuals (without photos: `references/visuals.md`, a visual anchor of the subject in the first two screens), living thing.
10. **Check**: `check-tokens.mjs` (the code), `check-render.mjs --shots` (the rendered page: broken words, contrast, targets, rhythm, margins, placeholder text), `npx impeccable detect`, performance; then the finish with `references/finish.md`.
11. **Get a fresh pair of eyes to judge**: grid in `references/critique.md`, Originality axis and déjà-vu test; fix, three rounds at most.
12. **Add motion**, re-inspect, deliver with the report.

## 5. Absolute floor

It is never lifted: not by taste, not by the brief, not by an external resource.

- **A1 Accessibility**: WCAG 2.2 AA (contrast 4.5:1, 3:1 for large text and controls), visible focus, keyboard, 24 px targets (44 aimed for on mobile), headings without skipped levels, alt text, reduced motion, content works without JavaScript outside Operate.
- **A2 Honesty**: no invented figure, quote, review, logo, client or feature; sample content is listed in the report and flagged once on the page.
- **A3 Traceability**: every font, component, image and reference has a real, verified source and a license that covers the use.
- **A4 Confidentiality**: no client data, mockup or screenshot goes to a third-party service without written consent.
- **A5 Performance**: LCP ≤ 2.5 s, INP ≤ 200 ms (TBT in the lab), CLS ≤ 0.1; otherwise the effect becomes a still image. `references/performance.md`.
- **A6 Technical**: colors, fonts, sizes and spacing only as tokens; never `transition: all` nor animating `width`, `height`, `top`, `left`; no horizontal scroll from 320 to 1920 px; hero in `dvh` or `svh`; capped container.
- **A7 Brief**: an explicit instruction wins over the liftable defaults, never over A1 to A6.

## 6. Liftable defaults, the essentials

Each one is lifted with a written reason tied to the idea or the brief. Full table: `references/defaults-by-mode.md`; dated tells: `references/tells.md`.

- No eyebrow, no letter-spaced capitals, no 01/02/03 numbering without a real sequence.
- No purple gradient, no gradient text, no glow, no decorative glass, no row of identical icon-title-text cards, no emoji as icon.
- No reflex font without a brand reason (`references/typography.md`); with no font supplied, propose 3 pairings (`references/font-catalog.md`).
- One modular type scale and a three-level spacing scale, nothing outside them (`references/spacing.md`).
- One background, one ink, one accent, the accent about 4 times at most per screen.
- Neither the fix turned cliché (cream, serif, terracotta) nor our own "clean anti-slop" convergence (`references/originality.md` §1).

## 7. When to read what

| Situation | File |
| --- | --- |
| Detail of the 12 steps, delivery checklist, report format | `references/process.md` |
| Intake: questions, taste, material, brief sheet | `references/intake.md` |
| Rules per mode | `references/defaults-by-mode.md` |
| Inventory, idea, images, product without photos | `references/idea-and-direction.md` |
| Visuals without photos, ranked by score obtained; subject-without-text test | `references/visuals.md` |
| Finish: defects spotted by the judges and their checks | `references/finish.md` |
| Roll, archetypes, constraints, risks, three heroes, déjà-vu | `references/originality.md` |
| Landing, hero, forms, glass, product illustration, bento | `references/persuade.md` |
| Navigation and footer (18 + 15 patterns) | `references/nav-footer.md` |
| App, dashboard, charts, forms | `references/operate.md` |
| Docs, articles, portfolio, gallery | `references/read-and-experience.md` |
| Redesign | `references/redesign.md` |
| Palette | `references/color.md` |
| Font and type scale; fonts to propose | `references/typography.md`, `references/font-catalog.md` |
| Spacing and rhythm | `references/spacing.md` |
| Motion, effects, video in code | `references/motion-and-video.md` |
| Performance per mode | `references/performance.md` |
| Dated AI tells | `references/tells.md` |
| UX principles | `references/ux-principles.md` |
| Real model sites; galleries, libraries, licenses | `references/site-models.md`, `references/resources.md` |
| Critique by a fresh pair of eyes | `references/critique.md` |

Load only what the task needs.

## 8. Deliver

Do not deliver until the floor, `check-tokens.mjs`, `check-render.mjs`, the detector, the screenshots, the critique (Originality at least 4 out of 5, no known style named in the déjà-vu test) and the direction log have all passed. Full checklist and report format: `references/process.md`. Never claim a check that did not run.
