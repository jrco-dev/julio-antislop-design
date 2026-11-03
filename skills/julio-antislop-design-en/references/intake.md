# Intake: ask everything before creating

A model that lacks information fills the gaps with the average: that is the first source of slop. And guessed taste is then corrected through back-and-forth: that is the first source of wasted time. The intake gathers **in one go, before the first line of code**, what makes the page true (the project, the material) and what makes it right in the person's eyes (their taste, that is, everything needed to fill `DESIGN.md`). It happens in four stages: project, taste, material, validated brief sheet.

## When to do the intake

| Situation | Intake |
| --- | --- |
| New page, new site, new app screen, new system | Full: the three rounds and the brief sheet |
| Redesign of something that exists | Full, plus access to the existing thing and what must not change; the Taste round asks what they like and dislike in the existing thing; the 5-line direction is also validated (`redesign.md`) |
| Isolated component, small change | 1 or 2 questions only if a point is blocking; otherwise none |
| `DESIGN.md` already exists and is complete | No Taste round: read it and follow it; ask only for what is missing from it |
| **Full hand-off**: the person says they leave all responsibility to you ("carte blanche", "do as you like", "I trust you on the design") | No taste questions; project and material questions only if a fact is missing (price, action, contact); decide the rest and write it as assumptions in the brief sheet |
| Run with nobody there to answer (scheduled task, batch) | No questions: decide, then write the assumptions at the top of the report |

"Go ahead" **before** the questions does not count as a full hand-off: still ask the Taste round, in one go. "Go ahead" **in answer to** the questions counts as a hand-off for whatever remains unanswered.

Never ask what the project files, `PRODUCT.md`, `DESIGN.md` or the conversation already say: read first, then ask only for what is missing.

## How to ask

- With the multiple-choice question tool (AskUserQuestion) when it is available: at most 4 questions per call, 2 to 4 options each, the recommended option first with "(recommended)", the user always being able to write their own answer. The calls follow one another **without building anything in between**. Otherwise, a single numbered message per round.
- **Three rounds at most, 12 questions at most in total**: project, taste, material. After that no more questions until delivery, except for a real blocker (a fact without which you cannot build).
- Concrete, contrasting options, never "clean and modern": extreme tones, precise scenes of use, named actions, real sites.
- **Show rather than describe**: when the tool accepts a preview per option (`preview`), put a small sample in it (a font pairing with a real headline from the project, three color swatches, a layout density in text blocks).
- Each question says why it matters when that is not obvious, in half a sentence.
- Multiple answers allowed (`multiSelect`) for what the person hates and for the references they like.

## Round 1: the project (4 questions)

Always, adapted to what the context already says:

1. **Surface and mode**: landing, site, app, docs, portfolio… and what the visitor must succeed at.
2. **Audience and scene of use**: who, on which device, where, under what light, on what network.
3. **The single target action**: book, buy, sign up, get in touch, hire…
4. **What must exist**: the real offer and its price (Persuade), the 3 frequent tasks (Operate), the source of the content (Read), the list of works (Experience), access to the existing thing and what is untouchable (redesign).

## Round 2: taste (up to 8 questions, in two calls)

This is the round that avoids back-and-forth. Each answer fills a section of `DESIGN.md`; ask only the questions whose section is empty.

| Question | Options to propose (examples) | `DESIGN.md` section |
| --- | --- | --- |
| **Character**, as an extreme | Precise and calm; warm and handcrafted; bold and graphic; luxurious and quiet; playful; technical and dense… (2 or 3 character words drawn from the answer) | 1. Theme and atmosphere |
| **Light and color** | Light or dark (depending on the scene of use); strategy: restrained (neutrals and one accent), one color that carries the page, flat solid color per section, full palette; anchor color if there is one | 2. Colors |
| **Typography** | Brand font supplied; otherwise 3 pairings drawn from the subject and `font-catalog.md`, with preview | 3. Typography |
| **Density and rhythm** | Very airy, editorial; balanced; dense, lots of information visible | 5. Layout |
| **Shapes** | Square corners; slightly rounded; very rounded, pills | 4. Components, 6. Depth |
| **Images** | Real photos (supplied); illustration; typography only; real product interface; 3D render (supplied) | 1 and 7 |
| **Motion** | None; subtle (interaction feedback); one signature motion; immersive (larger performance budget) | 9. Guide for agents |
| **References and rejections** | 3 sites from `site-models.md` in the same mode, with different stances, as multiple choice, plus "a site of my own"; and as multiple choice what the person absolutely does not want (gradients, glass, dark, serif, everything centered, animations everywhere, icon cards…) | 7. Do's and don'ts |

Depending on the project, navigation and footer can replace a less useful question: propose 2 or 3 patterns from `nav-footer.md` suited to the content.

## Round 3: the material (one request, not a questionnaire)

Ask explicitly, with formats, in a single message or a single call:

- **Brand**: logo (SVG preferably), colors, licensed fonts, existing `DESIGN.md` or brand guidelines.
- **Images**: photos of the place, the people, the product (at least 2000 px wide); for a physical product, photos or 3D renders (without them, the page will take a register that code does well, see `idea-and-direction.md` §7); screenshots or screen recordings of the real product (16:10); videos. Otherwise, consent for credited royalty-free stock images, flagged generated images, or typography only.
- **Proofs**: figures with their source, quotes with their author's name and consent, authorized client logos. With no proof supplied, the section will have no proof: nothing will be invented.
- **Copy**: supplied or to be written; language(s); words to avoid.
- **Constraints**: confidentiality (NDA, third-party services allowed or not), stack and repository access, deadline, specific accessibility or regulatory requirements.

Say what happens if a piece is missing: a flagged placeholder, at the right size, that the user will fill.

## The brief sheet

After the answers, write the sheet and ask for **a single** validation ("Shall I start?"). It fits on one screen:

```
I read this project as: …

Mode: …             Target action: …
Audience and scene: …
Character: …        Light: …           Color: strategy …, anchor …
Fonts: supplied (…) or chosen: … (among 1 … / 2 … / 3 …)
Density: …          Shapes: …          Images: …         Motion: …
Navigation / footer: N… / F…
Liked references: … (quality kept from each)
Absolutely avoid: …
Material received: …
Missing material → placeholders: …
Usable proofs: …   (nothing else will be shown)
Constraints: …
Assumptions made for lack of an answer: …
```

Once validated: the project goes into `PRODUCT.md`, the taste into `DESIGN.md` (sections 1 to 9 pre-filled with the answers, the rest completed in steps 6 and 7). If the user corrects it, update the sheet once and start, without a new round of questions.

## What the intake does not negotiate

The answers steer the liftable defaults, never the absolute floor. If an answer contradicts it ("make up a few testimonials", "put this client's logo without their consent", "send the client's mockups to such-and-such service"), say so in one sentence, explain the rule and propose the honest alternative: a placeholder for real testimonials, a consent request, a local tool. An expressed taste ("I want glass", "I want a serif") lifts the corresponding default (A7): apply it with its rules, without arguing.
