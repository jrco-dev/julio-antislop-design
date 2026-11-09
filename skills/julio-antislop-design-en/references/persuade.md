# Persuade mode: landing pages, hero, sections, product illustration

## Contents

1. The first screen
1 bis. The kind of business sets the visual budget
2. Sections and structures by goal
3. Components
3 bis. Order and contact forms
4. Product illustration (fake UI)
4 bis. Physical product pages
5. Bento grids

## 1. The first screen

- It answers the visitor's first question, in large type: for a product, what it is and what it costs or does; for an event, what, when, where (the dates in the headline or at the second level); for a person, who they are and what they do.
- Headline of about 5 words, 32 characters targeted, 2 lines at most at any width. One supporting sentence of 12 words at most, right under the headline (32 to 48 px below), never held back by an animation. One primary action and one secondary at most.
- Headline, sentence and action visible at 1280 × 800 without scrolling; the hero has no dead band under its content.
- Composition: a full-width scene with the text on its quiet part, or an asymmetric split where the visual takes at least half, or the text above a large view of the product. Stacking and centering everything is the default template, to keep only for a short hero with no visual.
- On the best sites studied by Taste, the hero media covers at least half of the first screen in 68% of cases.
- Liftable default: the hero alone on the first screen, its main button inside it, nothing of the next section showing (Taste Skill: 78% of 327 company sites).

## 1 bis. The kind of business sets the visual budget

Write the kind on the brief sheet's first line, before the roll: it decides what leads and what is allowed (liftable default, after Taste Skill). Experience uses the same table for the kind of work shown.

| Kind | Leads | Effects, shaders, technical grounds |
| --- | --- | --- |
| Software (SaaS, AI, dev tool, fintech) | Its own interface (§4) | One, with a still fallback |
| Game | Its world: key art, captures | One, never in place of the game's images |
| Technical hardware | The object, its use, its parts | One |
| Physical product | The product in photographs (§4 bis) | None |
| Service (clinic, firm, agency, trade) | The work, the people, the rooms | None |
| Place (café, shop, small hotel, local studio) | Photographs of the place | None |

- Outside technical subjects: photographs, flat grounds, type, one signature motion. A maker that also opens its door is a place.
- Light or dark still follows the scene of use, not the kind (Taste reserves dark for tech; a bar open at night may be dark).
- No client photographs: `references/photos.md`; a stand-in is never shown as the client's (A2).

## 2. Sections and structures by goal

Common rules: a single goal and a single primary CTA per page, the same one, coming back at the top, after the proof and at the bottom, with no competing action at the same level; 3 to 5 benefits, never in identical tiles; proof, real only, right before the CTA it supports; no carousel (`references/moments.md` §7); a ticker only as the Word row moment (`marquee-row`, `references/moments.md` §3), with its pause button; a countdown can be paused and stops on focus or under reduced motion. Sections spaced 120 to 240 px apart on desktop; the gap between sections is clearly larger than any internal gap. Each section has a heading that names it and a composition different from its neighbor. Carry the idea into every section, pricing, FAQ and footer included: the most frequent failure is a singular first screen followed by standard blocks.

| Goal | Structure (section order) | CTA placement |
| --- | --- | --- |
| Present a product | Hero → value proposition → 3 to 5 benefits → CTA → footer | Hero (sticky bar) + bottom |
| Reassure | Hero → problem → solution → real testimonials → CTA | Hero + after the testimonials |
| Get straight to the point | Headline → short description → 3 benefits at most → CTA → footer | Centered, large button |
| Sell a subscription | Hero → the real plans (as many cards as there are plans, with no reflex ring on the middle one) → comparison → FAQ → CTA | Each card + nav |
| Compare yourself | Hero → problem → you-versus-competitors table → CTA | Under the table |
| Capture leads | Benefit-oriented headline → preview of the resource → minimal form | Form button |
| Waitlist | Hero → preview → email form → real number of sign-ups | Form above the fold |
| B2B | Mission → solutions by industry and by role → real clients → sales contact | "Contact sales" + sign-in as secondary |
| Portfolio | See Experience mode | |

These structures are starting points; the argument decides. Never bend the content to fill a structure (a three-plan comparison when there is only one price).

**Screen rhythm** (liftable default, after Taste Skill; spacing in `spacing.md` §3):

| Rule | Threshold | Check |
| --- | --- | --- |
| Section height | 1 or 2 screens at 1440 × 900, heading first; content fills 55% or more, otherwise merge or add its picture | Screenshot per screen |
| One section per screen | No other section's heading or picture in the shot | Screenshot per screen |
| Short block | A quote, logo row or FAQ under half a screen closes the section above | Screenshot review |
| Mobile | The section grows with its content; nothing overlaps, nothing under a fixed bar | Screenshots at 390 and 320 |

## 3. Components

- Flat buttons, one color, square or pill, decided once. The "soft" radius of 9 to 16 px everywhere is the measured mark of weak sites. Many strong heroes have only one button, or even none.
- Navigation: by default the name, 3 to 5 links, one action; "Sign in" as a plain link. No blurred floating pill. Choose the pattern from the number of destinations and the task: 18 patterns in `nav-footer.md`.
- The footer is a designed ending, not a sitemap: it closes the page's idea (the last useful piece of information, the action one last time, the real contact details). The brand name set huge at full width has become a generation reflex: use it only if the idea calls for it, and write it up as a lifted default in the report. 15 footer patterns in `nav-footer.md`, two combinable at most.
- Statement: an intro sentence set large stays a paragraph (36 px at most on desktop, 24 on mobile, about 25 words).
- Sample content (fictional product, dimensions, prices to confirm) is listed in the report and flagged by **a single** discreet mention on the page (footer); never "to confirm" or "sample" labels scattered through the sections, which break the page.
- No caption under an image or visual: one that explains or apologizes means the picture is wrong. Credits in one footer line. Read and Experience keep captions (`defaults-by-mode.md`).
- Any text that depends on the date or time ("today", "this month", countdown) is computed live on load, never hard-coded: otherwise it becomes wrong the next day.

## 3 bis. Order and contact forms

A long form with no rhythm drops conversion and breaks the ending of an otherwise successful page.

- **The minimum of fields**: only what is needed to carry out the action; everything else is optional or asked later.
- **Group by meaning**: fields in named blocks ("You", "Delivery", "Payment"), with more space between blocks than inside them; beyond 6 to 8 fields, steps with a progress indicator and a way back.
- **The summary alongside**: what is being ordered, the total price, the delivery time and method, visible without scrolling while filling in (beside the form on desktop, above the button on mobile).
- **One column** for input; two fields side by side only if they belong together (postal code and city).
- **The button says what happens and how much**: "Order the sample, €12", not "Submit".
- **Real reassurance near the button**: delivery time, carrier, return conditions, only if they are provided.
- **Never ask again** for information already entered elsewhere on the page.
- Input, error and accessibility rules: `operate.md`, Forms and feedback section.

## 3 ter. Glass (glassmorphism) requested by the brief

Glass is a lifted default (A7); it has its own rules, from the test of November 3, 2026:

- **Glass blurs something real**: the product, a photo, the content scrolling underneath. Never color splotches ("blobs") placed behind on purpose so the blur shows: that is the tell, not the style.
- **Three glass surfaces at most** per screen, each with a function (navigation, product caption, selector), none as decoration.
- **Legibility**: background tint opaque enough to hold 4.5:1 on the worst spot of the background; opaque fallback with `@supports not (backdrop-filter: blur(1px))` and `prefers-reduced-transparency`.
- **Performance**: blur limited to small fixed surfaces; never animated blur on a large surface.
- A glass panel never hides the part of the product it describes.

## 4. Product illustration (fake UI)

A fake UI is allowed when it simplifies a real product; it is forbidden when it fabricates a product. Method from Stageshow:

- 3 to 7 real texts only (the title, the object of the action, what is typed, the result); the rest as filler bars, placed on the edges, never where the eye lands. Varied bar widths.
- Design at display size, at 1:1 scale: about 720 × 340 px for a hero beside the text, 900 to 1100 px wide at full width, 400 × 300 px for a card. Interface text from 11 to 15 px.
- The window or phone takes at least two thirds of the scene and runs off an edge (windows and screens only: a physical object is shown whole, see `idea-and-direction.md` §7); never a whole window shrunk inside a card, never a window floating with air on four sides.
- Windows and devices are never drawn by hand: use a kit with real geometry.
- Words 12 px from the edges; button 8 px from the field above; no near-tangents (two edges 1-3 px apart read as an accident).
- Icons from one set, never drawn; no invented logo (sparkle, purple, letter in a colored square).
- **Software** (after Taste Skill): show the full interface a single time, large, in one application window, with an item open next to the list it came from and filled with the material the product really handles; a code-review tool, for instance, shows changed lines and the button that approves them. A stock dashboard never stands in for it. Feature sections then zoom in on parts of that same interface; where the point is how pieces connect, a diagram card does the job, two per page at most.
- Tools it really works with: their real logos in their own colors, from a source with a verified license (A3), never redrawn or greyed.
- The title of a fake app is a `div`, never an `h1` to `h6`.
- Animated demo: 3 to 5 beats and a conclusion, 10 to 16 s, no unexplainable cursor movement, a poster frame that tells the story on its own, the content moves instead of being replaced.

## 4 bis. Physical product pages

Liftable defaults, after Taste Skill, on top of `idea-and-direction.md` §7:

- **Big and whole** in the hero and one more section: long side 80 to 100% of its frame; never mid-size in a grey panel.
- **A different picture per section**; a recolor or mirror is the same view. The whole object leads the hero and two sections at most; the rest show use, parts, people, place.
- **Every headline promise pictured** ("takes four crates" shows four crates), or cut.
- **No fact twice**: a figure strip never repeats the spec table.

## 5. Bento grids

A bento grid is one picture made of tiles, not five demos side by side.

1. One third to one half of the tiles show interface; the others are a number, a sentence, an object, a diagram, a collection of real logos or a real photo.
2. One larger hero tile carries the main idea.
3. An interface tile shows a single component, at real size or larger; the window frame appears at most once in the grid.
4. Neighbors contrast in a checkerboard; never two window screenshots side by side.
5. Number tile: a real number from 48 to 72 px, a short lead-in, a label, at most one colored glyph; the number and its unit never break apart.
6. Short text, outside the image: a title of 1 to 4 words, at most one supporting sentence.
7. One shared frame (radius, gutter, padding, text position); the variety is inside.
8. Each thing is said once: no text, avatar or color repeated from one tile to another.
9. Motion: one small thing per tile, played once on entry, staggered 80 to 120 ms between tiles.
10. Never a "photo" drawn in code: without a real photo, another tile type.
11. Each width is its own design; in a narrow column the grid recomposes, hero first.

A five-tile grid usually calls for one interface hero tile, one or two components, a number or a sentence, and an object, a diagram or a collection.
