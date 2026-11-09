# Liftable defaults, by mode

These rules apply by default. Each one can be lifted with a written reason tied to the project's idea or to the brief, noted in the report. Beyond 3 lifts on a project, write the house style in `DESIGN.md`.

Why by mode: the same device is a tell on a landing page and a useful convention in a dashboard. A marketing page is read and scrolled; an app is worked in for hours.

| Topic | Persuade | Operate | Read | Experience |
| --- | --- | --- | --- | --- |
| Gradients, glows, glass | None, except the signature moment if it comes out of the subject's material, with a static fallback | None | None | Allowed if they are part of the work, with a fallback |
| Shadows | Only on what floats (menu, dialog). A shadow has an offset and a blur; a colored halo with no offset is decoration. Elevation declared once: border or shadow, not both | Same | Same | Same |
| Rules and borders | No decorative rules; separate with space and a tone shift | Subtle rules, text color at 6-10% opacity | Rules for tables and notes | Like Persuade |
| Radii | Square or pill, decided once; media with square corners | Nested radii: controls 8-10 px, cards 12-16 px, panels 14-20 px; inner radius = outer radius − padding, never below 4 px | Like Operate, sober | Like Persuade |
| Monospace | Code only | Code, counters, metadata, chart axes, in a muted color | Code and identifiers | Code, unless mono is the material of the work |
| Eyebrow, letter-spaced capitals, 01/02 numbering | No. The strongest default: lifted only if the brief requires it; numbering only for a real sequence | Same | Same | Same |
| Fonts | 1 or 2 families drawn from the subject, no reflex font (`typography.md` §1) without a brand reason | Same; weights 400-500, 600 rare | A real long-reading font | Same as Persuade |
| Text scale | Modular, body 17 → 19 px, ratio 1.2 → 1.333; 5 steps used at most, skipping steps | Ratio 1.125 → 1.2, body 14 → 16 px; hierarchy also comes from color | Ratio 1.2 → 1.25, body 18 → 20 px | Free, a single scale |
| Spacing | 4 px base scale, three levels (inner 4-16, group 16-48, section 96-192 px desktop); no raw values | Same scale, section brought down to 48 px; density through smaller steps | Reading rhythm: heading closer to what follows | Like Persuade |
| Color | One background, one ink, one accent; accent about 4 times at most per screen; full flat color fields allowed per section | Neutral backgrounds and surfaces; color goes into the accent, the charts and the moments | Neutral; accent for links and state | Free, serving the work |
| Cards and grids | Never a row of identical cards or an icon-title-text tile; bento only per `persuade.md` | Repeated cards and panels are normal; one main chart clearly larger | Rarely useful | The work's grid, one piece in focus |
| Composition | Left-aligned, a single centered moment; each section differs from its neighbor; order dictated by the argument | Dictated by the task; high density allowed; sections and order kept in a redesign | One reading column | The work on the first screen |
| Amount of text | Short prose (about 80 words per screen); expected information (menu, pricing, schedule) is complete, as structured content | Short labels | Long prose allowed | Minimal |
| Motion | One signature motion; entrances staggered by 60 to 90 ms, rising 16 to 32 px, triggered once, never on every section; feedback on every control | One entrance on load; 150 to 300 ms feedback | Almost none | Free within the budget |
| Animated properties | `transform` and `opacity`; `clip-path` and mask only for the signature moment, if it holds 60 fps on an average phone | `transform` and `opacity` | Same | Like Persuade; never animated blur on a large surface |
| Words | No hollow words (unlock, seamless, supercharge, elevate, effortless, all-in-one…), no "Get started" or "Learn more", no exclamation mark in the interface | Same; a change says what it compares to ("+12% vs last month"); no trailing period on headings, labels and buttons | Same | Same |
| Light or dark | By the scene of use (who, where, under what light), never by the category; both variants designed together if both exist | Same | Same | Same |
| Kind of business | Sets what leads and whether effects are allowed (`persuade.md` §1 bis) | No | No | Same table, kind of work |
| Screen rhythm | Hero alone on screen one; sections 1 or 2 screens (`persuade.md` §2) | No | No | Like Persuade |
| Captions under images | None; credits in the footer | Chart legends only | Yes: figures, photos | Yes for works |

## Rules common to all modes

- No emoji as icon: a single icon set (the product's first, otherwise a set chosen on purpose, never Lucide by reflex), one size, one stroke weight.
- No hard-coded hex in components; no framework default palette (`indigo-500`, `violet-600`, `slate-900`, untouched shadcn `zinc`).
- No italics or color on a single word of a headline.
- Numbers in `tabular-nums` and a single format on the screen.
- No negative tracking on small text; display headline tracking between -0.02 and -0.04em, never beyond.
- Browser surfaces themed: text selection, input caret, scrollbars, focus rings, underline offset.
- **One system** (after Taste Skill): one button pair, one card style, one radius scale, one link look, one heading scale; boxes two deep at most.
- No violet or lavender accent, ground, tint or gradient unless it is the client's real brand color; third-party logos keep theirs.
- Sample pages: contacts on `.example`, no phone in a real format, no house number, postcode, registry or VAT number (A2: a realistic fake reads as real).

## The prohibitions are not a style

Added together, these defaults draw a predictable look: flat, square, no rules or shadows, big left-aligned type. A direction that merely respects them is an "avoidance aesthetic" and is rejected. The defaults say what you do not do out of habit; the idea says what you do.
