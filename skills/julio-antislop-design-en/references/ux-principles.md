# The laws of UX, applied

The 30 principles of Jon Yablonski's [Laws of UX](https://lawsofux.com) catalog, rewritten here from the original works, each with an applicable rule, a threshold when one exists, the modes where it weighs most and how to check it. These are design principles drawn from research, not physical laws: two recent nuances are flagged.

**Guardrail**: these principles serve the visitor, never work against them. No false scarcity, no invented countdown, no trick option, no guilt-tripping button ("No thanks, I don't like saving money"): these are manipulations, forbidden by A2.

Modes: P Persuade, O Operate, R Read, E Experience.

## 1. Perception: what the eye groups and remembers

| Law | Origin | Rule | Threshold or test | Modes |
| --- | --- | --- | --- | --- |
| **Prägnanz** (simple form) | Gestalt, Max Wertheimer, 1923 | The eye reads the simplest possible form: a composition must sum up as one shape (a column, a split, a grid) | Blurred screenshot: does the structure still read? | All |
| **Proximity** | Gestalt, Wertheimer, 1923 | What is close belongs together: space says what belongs to what | Three spacing levels, each at least double the previous one (`spacing.md`) | All |
| **Similarity** | Gestalt, Wertheimer, 1923 | What looks alike has the same function: one style per role (all links alike, all primary buttons alike) | No non-clickable element that looks like a button or a link | All |
| **Common Region** | Stephen Palmer, 1992 | A shared background or frame groups more strongly than proximity | One frame per real group, never a card inside a card | O, P |
| **Uniform Connectedness** | Stephen Palmer and Irvin Rock, 1994 | Elements linked by a line or a color read as a whole | Steps of a journey connected; never a visual link between unrelated things | P, O |
| **Von Restorff effect** (isolation) | Hedwig von Restorff, 1933 | The element that differs is the one remembered: only one thing stands out per screen, the primary action first | Accent about 4 times at most per screen; never color alone to carry meaning (A1) | All |
| **Serial Position Effect** | Hermann Ebbinghaus, 1885; Bennet Murdock, 1962 | People remember the beginning and the end of a list | Key links and arguments first and last; the primary action at the top and at the end of the page | P, O |
| **Selective Attention** | Colin Cherry, 1953; Daniel Simons and Christopher Chabris, 1999 | People see only what serves their goal; what looks like an ad is ignored | No critical information in a strip, a banner or an ad-shaped box | All |
| **Aesthetic-Usability Effect** | Masaaki Kurosu and Kaori Kashimura, 1995 | What is polished seems easier to use and gets small flaws forgiven | Polish does not replace testing: test the use on the finished page, not on the impression | All |

## 2. Decision and memory: what the visitor can retain and choose

| Law | Origin | Rule | Threshold or test | Modes |
| --- | --- | --- | --- | --- |
| **Hick's Law** | William Hick, 1952; Ray Hyman, 1953 | Decision time grows with the number of options | Navigation of 3 to 5 links in Persuade, 7 at most elsewhere; a single primary action per screen; advanced options collapsed | All |
| **Choice Overload** | Sheena Iyengar and Mark Lepper, 2000; nuance: the meta-analysis by Benjamin Scheibehenne et al., 2010, finds an average effect close to zero | Caution: when the options look alike, show fewer and recommend | Offers: as many as there are real offers, one recommended only if it is true | P |
| **Miller's Law** | George Miller, 1956; nuance: Nelson Cowan, 2001, places the limit around 4 items | Short-term memory is small: never make anyone retain more than 3 or 4 items from one screen to the next | Summary visible during a form; side-by-side comparison rather than from memory | O, P |
| **Chunking** | George Miller, 1956 | People remember better in named blocks | Numbers, IBANs, codes displayed in groups (4 4 4 4); long lists cut into titled groups | O, R |
| **Working Memory** | Alan Baddeley and Graham Hitch, 1974 | Information to be handled must stay on screen | No instruction that disappears just when it is needed; label always visible, never only as a placeholder | O |
| **Cognitive Load** | John Sweller, 1988 | Any mental effort that does not serve the task is removed | One screen, one task; the user's vocabulary; no moving decoration during reading | All |
| **Mental Model** | Kenneth Craik, 1943; Donald Norman, 1983 | Everyone builds a simple idea of the system: the interface follows it | Name things with the visitor's words (taken from the brief or the tickets), not the team's | O, R |
| **Cognitive Bias** | Amos Tversky and Daniel Kahneman, 1974 | Judgment deviates predictably, the designer's too | Validate through use or data; never exploit a bias against the visitor (guardrail) | All |
| **Occam's Razor** | William of Ockham, 14th century | Between two solutions that work, the simpler one | For each element: what is lost if it is removed? Nothing: remove it | All |
| **Tesler's Law** (irreducible complexity) | Larry Tesler, 1980s | Some complexity does not go away: the system must carry it | Sensible default values, autocomplete, calculations done for the visitor | O, P |

## 3. Action: what the hand and the wait allow

| Law | Origin | Rule | Threshold or test | Modes |
| --- | --- | --- | --- | --- |
| **Fitts's Law** | Paul Fitts, 1954 | A large, close target is reached faster | Targets of 24 px minimum, 44 aimed for by finger (A1); primary action in the thumb zone on mobile; destructive action far from the usual action | All |
| **Doherty Threshold** | Walter J. Doherty and Arvind J. Thadani, IBM, 1982 | Under 400 ms, the exchange stays fluid | Visual feedback in under 100 ms on every action; loading state beyond 400 ms; duration indication beyond 2 s | O, P |
| **Postel's Law** (tolerance) | Jon Postel, RFC 761, 1980 | Liberal in input, strict in output | Fields that accept spaces, hyphens, capitals, common date formats; a single format displayed and stored | O, P |
| **Paradox of the Active User** | John Carroll and Mary Beth Rosson, 1987 | Nobody reads the manual: people act right away | In-context help, empty states that say what to do, no mandatory guided tour | O |
| **Jakob's Law** (conventions) | Jakob Nielsen, 2000 | Visitors spend their time on other sites and expect the same conventions | Navigation, forms, cart, search and links stay conventional; singularity goes to the idea, the composition and the material, not to the controls | All |

## 4. Motivation: what keeps people moving and what they remember of the experience

| Law | Origin | Rule | Threshold or test | Modes |
| --- | --- | --- | --- | --- |
| **Goal-Gradient Effect** | Clark Hull, 1932; Ran Kivetz et al., 2006 | People speed up as they approach the goal | Visible, honest progress ("step 2 of 3"); the first step the shortest | O, P |
| **Zeigarnik Effect** | Bluma Zeigarnik, 1927 | An unfinished task stays on the mind | Drafts saved; resume where you left off; what remains to be done is visible | O |
| **Peak-End Rule** | Daniel Kahneman et al., 1993 | An experience is judged by its strongest moment and by its end | Design the success screen, the confirmation and the footer as much as the first screen; a single intended high point (the living thing) | All |
| **Flow** | Mihaly Csikszentmihalyi, 1990 | Absorption comes from a challenge matched to skill, without interruption | No pop-up, banner or feedback request during a task; progressive difficulty | O, E |
| **Parkinson's Law** | Cyril Northcote Parkinson, 1955 | A task expands to fill the time it is given | Shorten journeys: autofill, announced duration ("2 minutes") when it is true | O, P |
| **Pareto Principle** | Vilfredo Pareto; Joseph Juran | A small share of the features serves most of the uses | The 3 most frequent tasks (intake, round 1) are at the first level; the rest behind | O, P |

## UX check before delivery

After the automatic checks (`check-render.mjs` already checks targets, the number of navigation links and form length), run this list on the screenshots:

1. **Hick and Von Restorff**: a single primary action per screen, the most visible; 5 navigation links at most in Persuade.
2. **Proximity and Common Region**: each group reads without reading the text; no card inside a card.
3. **Similarity**: nothing that looks like a button without being one, and vice versa.
4. **Miller and Working Memory**: nothing to retain from one screen to the next; labels always visible; summary during input.
5. **Fitts**: primary action reachable by thumb on mobile; destructive action far away.
6. **Doherty**: every action has immediate feedback; every wait has a state.
7. **Postel**: every field accepts common inputs.
8. **Jakob**: conventional navigation, forms and links.
9. **Peak-End**: the confirmation screen and the footer are designed.
10. **Guardrail**: no manipulation (false scarcity, trick option, guilt-tripping).
