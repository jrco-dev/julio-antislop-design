# Moments

A moment is the one place on a page that a visitor remembers, apart from the content. A page gets the hero's entrance once on load, one moment drawn from the catalogue below (two on a long page), and the hover and press feedback described in `references/motion-and-video.md` §1. Nothing else moves. The structure of these three layers, several thresholds and the catalogue come from Taste Skill 2.5.1 (Leonxlnx, MIT), rewritten here and credited where a figure is theirs. "A method, not a style": the catalogue says what a moment does, never how the page should look.

## 1. Who gets what, by mode

| Mode | Hero entrance | Moments | Effect (shader, WebGL, big scene) |
| --- | --- | --- | --- |
| Persuade | Yes | 1, or 2 on a long page (8 sections or more) | Technical subjects only, at most 1 (§6) |
| Experience | Yes, unless the work opens itself | 1 or 2, chosen so they serve the work, never cover it | Technical subjects or a work that calls for it, budget in `references/performance.md` |
| Read | No | None. A reader came to read | None |
| Operate | One entrance on load (`references/operate.md`) | None. Micro-interactions only: feedback, state changes, a number that updates | None |

The dealt moment counts as the page's **signature motion** (`references/motion-and-video.md` §1). On a long page you may add a second one in a different section, never 3 moments.

## 2. The hero's entrance

It plays once on load. Then the hero stays still for the rest of the visit.

- The headline rises line by line out of masks: about 700 ms per line, lines 80 ms apart. The lead text and buttons follow with a rise of about 12 px. The hero picture settles from scale 1.05 to 1. The whole entrance lasts about 1.1 s with one ease-out curve and no overshoot (figures from Taste Skill).
- Animate only `transform` and `opacity`. The picture is never hidden and never fades from blank.
- **Nothing stays hidden.** The text is in the HTML at its final position. Without script, if the script runs late (a safety timer of about 0.7 s), or under reduced motion, the hero shows as written.
- Never use a loader, an intro gate, a second entrance, or an entrance replayed on scroll.

## 3. The catalogue

Taste ids are shown so you can open its demos. The "Suits" column uses our modes (P = Persuade, E = Experience) and the kind of business. "Local" means a place, a product brand or a service firm. "Technical" means software, AI, fintech, hardware or gaming.

| Moment (Taste id) | What happens | Suits | Needs | Under reduced motion | Cost |
| --- | --- | --- | --- | --- | --- |
| **Statement lights up** (`word-highlight`) | One large statement starts in a muted ink that still measures 4.5:1 or more (§5). Each word turns full ink as it crosses the middle of the screen, and one key word takes the accent. Scrolling up reverses it | P, E · local and technical | One true statement of 12 to 40 words, in its own section | The statement in full ink | Colour change per word, no layout work. Runs on phones |
| **Photo chapters** (`photo-chapters`) | One full-width photograph per chapter. Each new photograph rises from the bottom over the previous one, with a short chapter text on a panel. About two thirds of a screen of scrolling per chapter | P, E · local | 3 to 5 chapters, each with a title, two lines and one real photograph used nowhere else on the page | Chapters side by side, each photograph above its text | Clip and transform. Section 3 to 4 screens tall. Runs on phones held upright |
| **Pinned steps** (`pinned-chapters`) | A list of steps scrolls beside one frame that stays put. The frame shows the picture or screen of the current step | P · product, service, technical | 2 to 4 real steps (an order, a booking, a setup), one picture or screen each | Plain rows, each step with its picture | `position: sticky`, one scroll read per frame. Two screens tall |
| **Photograph develops** (`picture-develops`, film look) | One large photograph comes up once, as it enters, from a pale grey print: the darks first, then the colour. About 1.6 to 1.8 s | P, E · local | One strong photograph, at least half the container wide, that is the section's subject | The photograph as it is | Filter on one image, once. Runs on phones |
| **Figures roll** (`counter-rolls`) | 2 to 4 proof figures roll to their value once, in their own row | P · technical | Real figures from the brief (price, count, duration), never an invented result | The final figures | Transform on digits. Width reserved, so no layout shift |
| **Letters assemble** (`letters-assemble`) | A very short statement set very large. Its letters arrive from scattered positions into the line as you scroll, and the line is complete before the section reaches the top | P, E · technical | 2 to 5 words, about 28 letters at most | The statement as written | Transform per letter |
| **Line to a new ground** (`line-carries-colour`) | A section with a new background: an inset panel in the old background is cleared by a line rising from its bottom edge. Each block appears whole once the line passes it | P · technical | A section on a different ground from the one before | The section on its own ground | Clip-path on one panel |
| **Iris to a new ground** (`iris-opens`) | Same setup, but a disc with a thin accent ring opens in the panel | P · technical | Same | Same | Clip-path on one panel |
| **Word row** (`marquee-row`) | One row of real words (trades, cities, formats) drifts slowly, with a pause button | P · technical | 6 to 14 real words, never logos, never invented clients | A still, wrapped row | Transform on one row |
| **Pointer light** (`cursor-spotlight`) | In the hero frame, a soft light follows the pointer | P · technical, hero only | A hero frame holding the product | The light stays still | Mouse pointer only, nothing on touch |
| **Liquid headline** (`liquid-type`) | A short headline ripples like water under the pointer, through an SVG filter | P, E · technical | 2 to 6 words, set large | The headline as written | One SVG filter, active only while a ripple lasts |
| **Liquid photograph** (`liquid-hover`) | A detailed photograph ripples under the pointer | P, E · technical | A photograph with hard edges and detail (a flat sky shows nothing) | The plain photograph, no canvas | 1 WebGL context, mounted only near the screen |

Left out on purpose: Taste's retired moments, and `giant-type-pass`, because a photograph sliding inside letters is a parallax.

**Local businesses** (café, shop, guesthouse, firm, clinic) draw only from Statement lights up, Photo chapters, Pinned steps (product and service only) and Photograph develops. These are led by the client's own photographs or words, move only inside their section and need no WebGL (Taste Skill). Photo chapters and Pinned steps never share a page.

## 4. How to pick

Taste never decides; the draw does.

1. **List the candidates**: the moments whose "Suits" column matches the mode and the kind of business, and whose "Needs" the brief really meets. A moment with nothing true to carry is not a candidate.
2. **Remove the recent ones**: any moment written in the last 3 lines of `direction-log.md`, in the Signature column (`references/originality.md`).
3. **Draw**: number the candidates and pick at random, for example with the roll seed or `node -e "console.log(1+Math.floor(Math.random()*N))"`. On a long page, draw a second moment of a different kind (not two scroll moments driven by text, not two that need a pointer) and place it in a section away from the first.
4. **Write it down**: the moment's id, its section and its purpose in a few words in the plan ("photo chapters in Rooms: three rooms in the space of one"), and the id in the Signature column of the log. A motion with no purpose is cut.

Re-draw only for a factual reason, such as a missing need, and write that reason in the report. Optional: Taste's moments kit (`moments.mjs pick`, demos, `check`) draws and checks the same way. It is a tool, never a requirement.

## 5. Rules every moment follows

- **It stays inside one section.** When a moment follows the scroll, its progress is simply the scrollbar's position: scrolling up plays it in reverse, and its first and last frames are both complete, never a blank. Only its own content may be pinned, and only through `position: sticky`; the page keeps its native scroll, which no script captures or redirects.
- **The content is whole without it.** The words are live HTML at their final place, with contrast of 4.5:1 or more at every step. Without script, the finished state shows.
- **Reduced motion**: everything rests in the finished state, and nothing stays hidden (floor A1). Check by taking a screenshot with `prefers-reduced-motion: reduce`.
- **Pause**: anything that keeps moving more than 5 s after it appears gets a visible pause button (WCAG 2.2.2, Pause, Stop, Hide). A moment tied to the scroll needs none, because it stops when the scroll stops.
- **Never in a card, a pricing block, an FAQ, a quote or the footer** (Taste Skill).
- **Timing**: ease-out, no bounce, no overshoot. A section reveal (one that plays once inside a moment's section, such as Figures roll) lasts 600 to 1,000 ms, as in Taste Skill. Explicit exceptions: the hero's entrance (about 1.1 s, §2) and Photograph develops (1.6 to 1.8 s, §3). A moment tied to the scroll has no duration of its own: it follows the scrollbar.
- **One pointer effect per page**, at most.

## 6. Shaders, WebGL and big scenes

- **Only for technical subjects**: software, AI, fintech, hardware, gaming. Never for a café, a local shop, a guesthouse or a service firm. Those get photographs (Taste Skill, and `references/motion-and-video.md` §3: the effect comes from the subject).
- **One effect per Persuade page**: a live background, one WebGL part, one 3D object, or one big scroll scene. A big scene is that effect, not an addition to it.
- **At most 4 live WebGL contexts** at the same time, counting the effect and every moment with a canvas (Taste Skill).
- **A still fallback is mandatory** for missing WebGL, a slow device, a phone and reduced motion. Pause the effect off-screen. No text over moving pixels without a scrim and a measured contrast.
- The subject keeps its slot: where the page should show the product, the hardware or the game's world, it shows them. An effect may only serve as their backdrop or come in a later section.

## 7. Never

- A fade-in, rise or stagger on every section, card, row or tile as the page scrolls. This narrows the section entrances in `references/motion-and-video.md` §1: outside the hero and the drawn moment, nothing enters on scroll.
- Text moving at a different speed from the page (parallax on text).
- Scroll-jacking, scroll-snap across the page, or a smooth-scroll library.
- Cards or buttons that react to the pointer beyond the feedback of `references/motion-and-video.md` §1: no tilting or flipping, no card that trails the cursor or lights up under it, no button pulled toward it.
- Content that changes without the visitor asking: carousels, slides that advance on their own, tabs on a timer, notices taking turns, strips of scrolling logos. The only drifting row allowed is the Word row moment (`marquee-row`, §3), with its pause button.
- Decorative noise that carries no information: shimmering stars or dots, flickering light, colours on a loop, letters that scramble before settling. When something on screen changes, the change reports something real: a step, a state, a value.
- A moment on a Read or Operate page; a shader on a local business page.

## 8. Check

| Check | Threshold |
| --- | --- |
| Moments counted on the page | 1, or 2 when the page has 8 sections or more |
| Screenshots at the start, middle and end of each moment, at 1440 and 390 | The end state is the finished section, with no empty frame |
| Screenshot under reduced motion and with JavaScript off | Every word and photograph visible |
| Anything moving after 5 s | Has a pause button |
| WebGL contexts | 4 or fewer |
| Performance (`references/performance.md`) | LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1; otherwise the effect becomes a still image |
