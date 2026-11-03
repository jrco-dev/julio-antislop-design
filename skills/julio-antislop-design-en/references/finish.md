# Finish: what the judges see and the agent forgets

Finish scored 6.0 out of 10 across the 5 evaluation briefs of 3 November 2026, spacing 6.2. The defects spotted recur from one page to the next; each one has its rule here and, when possible, its automatic check.

| Defect spotted by the judges | Rule | Check |
| --- | --- | --- |
| Visible placeholder text ("batch number", "[to be supplied]") | An empty field is drawn as an empty state (dotted rule, plain label) and listed in the report; sample content is flagged only once on the page | `check-render.mjs`: placeholder text |
| Word broken in the middle at the end of a line, broken e-mail address | Shorten the headline or step down the scale before breaking; `overflow-wrap: anywhere` only on e-mail addresses and URLs; `hyphens: auto` in running text if `lang` is right, never in headings | `check-render.mjs`: broken words |
| Date in US format on a page in French | Correct `lang` on `<html>`; displayed dates are formatted by `Intl.DateTimeFormat` in the page's language; a date field states the expected format | `check-render.mjs` launches the browser in the page's language |
| Unstyled native controls (`select`, date, file) that "look unfinished" | Every form control goes through the tokens (font, size, border, radius, focus); `appearance: none` with a drawn arrow for `select` | Screenshot review |
| Left margins that change from one section to the next | A single gutter, a single container; an intended offset is a choice written in `DESIGN.md` | `check-render.mjs`: left edges |
| Irregular gaps, large blank space under the hero | A single section gap; no `min-height` in `vh` on a block with little content | `check-render.mjs`: section rhythm and gaps |
| Half-empty column on desktop | A two-column grid has content on both sides in every row; otherwise switch to one column for that section | Screenshot review |
| Same template repeated (small heading, large heading, paragraph) in every section | Each section has its own composition (`persuade.md`); three identical metadata blocks in a row merge into a table | Screenshot review |
| Small labels above headings (eyebrows) | The strongest defect: fold into the heading or remove | `check-tokens.mjs`: eyebrow |
| Reading order that changes from one unit to the next on mobile | Repeated units (series, offers, steps) keep the same internal order at every width | Mobile screenshot review |
| Inconsistent color code (closed and open in the same color) | One color, one meaning, one legend; check every state | Screenshot review |
| Strings of negations, full stops everywhere | `tells.md`, text | Copy proofreading |
| Targets too small, insufficient contrast | Floor A1 | `check-render.mjs`: targets, contrast |

## Before delivering

```bash
node scripts/check-tokens.mjs index.html
node scripts/check-render.mjs index.html --widths 390,768,1440,1920 --shots .julio/shots
```

Zero errors; every warning fixed or justified in one line in the report. Then look at the screenshots produced, top to bottom, at 390 and 1440 px, with this table in front of you.
