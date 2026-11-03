# Font catalog, by trait of the subject

This catalog is for when the user provides no font: the agent draws **proposals** from it, it does not choose in the user's place without saying so. Each name was checked on Google Fonts (through its Fontsource mirror) on November 3, 2026, under the OFL or Apache license, so usable on the web. Re-check a name before using it (A3).

A fixed catalog quickly becomes the next reflex. Three guardrails:

- **Never take the first font of a line out of habit**, and don't reuse a display font used in the last 3 directions of the log.
- **The catalog is a starting point**: if the subject's world calls for something else, search beyond it (Google Fonts filtered by category, Fontshare, free foundries) with the method in `typography.md` §2.
- **A font enters `typography.md` §1 (reflexes)** as soon as it shows up in two unrelated generated projects: then remove it from here.

## Reading the subject

Before choosing a line, record in the inventory the real lettering of the client's world and draw a dominant trait from it. Examples:

| What the subject shows | Trait | Lines to look at |
| --- | --- | --- |
| Crates, bags, plates, signs, measuring tools | Marking, signage | A |
| Instruments, data, code, plans, laboratory | Technical, precision | B |
| Care, childhood, nonprofit, public service, health | Human, legible, accessible | C |
| Books, press, research, legal, long reading | Reading, text | D |
| Workshop, food, agriculture, construction, sturdy objects | Sturdy, made | E |
| Architecture, fashion, design, minimal objects | Constructed, geometric | F |
| Music, festival, sport, youth culture, event | Energy, poster | G |
| Notebooks, index cards, stamps, archives, administrative documents | Handwritten, typed | H |

## The lines

| Line | Display | Paired text | What it carries well | Watch out |
| --- | --- | --- | --- | --- |
| A. Marking | Big Shoulders Display, Big Shoulders Stencil, Saira Extra Condensed, Sofia Sans Extra Condensed, Antonio, Mohave | Chivo, Public Sans, Libre Franklin | Numbers, measurements, batches, schedules; short, dense headlines | Stencil and extra-condensed only for display; never for body text |
| B. Technical | Red Hat Display, Schibsted Grotesk, Tomorrow, Host Grotesk | Onest, Golos Text, Reddit Sans; mono: Martian Mono, Azeret Mono, Chivo Mono, Spline Sans Mono, Red Hat Mono | Technical products, tools, data | Mono stays for code and values (`defaults-by-mode.md`), never to "look tech" |
| C. Human | Rethink Sans, Commissioner, Funnel Display | Atkinson Hyperlegible Next, Alegreya Sans, Asap, Funnel Sans | Health, services, broad audiences, Operate mode | Atkinson Hyperlegible Next is designed for low-vision legibility: a good default for public interfaces |
| D. Reading | Young Serif, Gloock, Besley, Petrona | Literata, Source Serif 4, Spectral, Alegreya, Gelasio, Vollkorn | Long reading, docs, real editorial | A serif is not a shortcut to "premium" (wave 3): choose it for real text to be read |
| E. Sturdy | Zilla Slab, Rokkitt, Podkova, Arvo | Bitter, Aleo | Slabs: workshop, food, field, packaging | Avoid "retro" cosplay: no added aged texture |
| F. Constructed | Jost, Urbanist, Familjen Grotesk, Afacad | Lexend, Work Sans, Karla | Architecture, design, objects | Geometrics tire in long text: use a more open paired text font |
| G. Energy | Dela Gothic One, Gasoek One, Climate Crisis, Bungee, Anybody, Darker Grotesque, Shrikhand, Bagel Fat One | Rubik, Wix Madefor Display, Libre Franklin | Posters, festivals, sport, culture | A single strong voice; Climate Crisis and Anybody have axes: one setting per page, except for a signature moment |
| H. Written | Courier Prime, Cutive Mono, Kalam, Gochi Hand | A text font from lines C or D | Index cards, stamps, notes, archives | As an accent only (a field, an annotation), never as a main headline or body text |

## By mode

- **Persuade, Experience**: a display voice with a point of view, drawn from the subject, and a sober text font. Propose pairs from different lines so the user has a real choice.
- **Operate**: a legible, stable working font matters more than a voice; a single family is often enough (lines B or C, or the system stack). The reflex list in `typography.md` §1 targets only the display voice and the brand here, not interface text.
- **Read**: the text font first (line D, or C for screen), the display second.
