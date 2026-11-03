# Visuals when there is no photo

Visuals are the weakest point measured (5.4 out of 10 across the 5 evaluation briefs of 3 November 2026). With no photo supplied, the agent draws too little, or badly, or replaces the product with a metaphor. This file ranks the registers by the scores they obtained, from best to worst, and gives a simple test.

## The subject-without-text test

Mask all the text of the first screen (or blur it) and look at the screenshot: can you name the subject (a bicycle, vanilla, cash flow, compost)? If not, the first screen has no visual anchor. Spotted on the bike workshop: neither the word "bike" nor any bicycle on the first screen, read as a car garage.

Every page has **one visual anchor specific to the subject in the first two screens**.

## The registers, from highest to lowest scored

| Rank | Register | Score obtained | When | How |
| --- | --- | --- | --- | --- |
| 1 | **The real product rendered in code**: a real fragment of interface, file, document or result, with real values | 9 (JRCO redesign v1: the sorting file that becomes a slide) | Any product that produces something displayable: software, data service, document, calculation | Build it in HTML and CSS at 1:1 scale, with the real labels; animate it only if it demonstrates (`persuade.md` §4) |
| 2 | **The subject's real data turned into an image** | 7 (grid of the 52 contributions, harvest calendar) | Any subject that has numbers, dates, quantities | A unit grid, a calendar, a timeline, a map; every mark is a real data point |
| 3 | **Technical drawing**: dimensioned cross-section, plan, exploded line view, with captions and measurements | 6 (pod on the ruler) | Physical object with no photo | Lines of a single weight, captions in real text, measurements from the brief; never simulated material (`idea-and-direction.md` §7) |
| 4 | **Typography as image**: the subject's figures or words, very large | 6 to 7 | Price, measurement, duration, strong name | A single moment per page; the figure says something true |
| 5 | **Pattern drawn from the subject's material**: an SVG pattern built from a shape of the subject (spokes of a wheel, veins of a leaf, weave of a fabric) | not yet measured | As a section background or separator, never as the only visual | Built in code from the real shape, in a palette color, discreet behind the text (contrast A1) |
| 6 | **Honest placeholders** at the right formats, labeled | 5 (portfolio) | The work is made of photos still to come | Exact ratio and size, plain label; neutral background around them, so as not to compete with the future photos |
| 7 | **Object drawn as flat shapes** | 4 (speaker read as a thermometer, composter missing) | To avoid | Move to rank 3 |
| 8 | **Metaphor in place of the product** | 2 (JRCO redesign v2) | Never on its own | The archetype organizes around the product; it does not replace it (`originality.md` §1a) |

## Look for real images before drawing

1. Ask for them during the intake (round 3): this is what raises the score the most.
2. With network access: royalty-free images from the subject's world (Openverse, Wikimedia Commons, museum collections), under a commercial license, downloaded and credited (`resources.md`). They show the world around the client, never its product, its room or its team.
3. With an image generation tool: generate the world or the material, flagged as such, never the client's product as if it were real.
4. Otherwise, ranks 1 to 5 above.

## Common rules

- One dominant visual per screen is worth more than several small ones.
- In Experience mode with photos to come: neutral background, the image first; saturated flat colors go in the interstitial sections, not behind the photos.
- Every visual has alt text that says what it shows, or `alt=""` if it is decorative.
