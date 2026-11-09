# Photographs

A real photograph proves that the thing exists. A drawn object only says that it could. This file covers when a photograph leads, where a photograph can come from, the licences we accept, how to credit, how many photographs to use, how to crop them and what each one costs. The order of preference for images is in `references/idea-and-direction.md` §7. The registers to use when there is no photograph are in `references/visuals.md`. Several rules here come from Taste Skill 2.5.1 (Leonxlnx, MIT) and are credited where they appear.

## 1. When a photograph leads

| Subject | What leads the first screen | Photographs elsewhere |
| --- | --- | --- |
| A place (café, shop, guesthouse, workshop, studio with a door) | The client's own photograph of the place | Over several screens, each holding one dominant photograph or a row of 3 or 4 (§6) |
| A physical product | The client's photograph, cut-out or render of the product | Its use, its parts, where it lives |
| Software, AI, fintech | The real interface (`references/visuals.md` rank 1) | Only real people or real hardware, never mood |
| A game | Its own art: key art, in-engine shots, trailer frame | Never library frames in place of its world |
| A service firm | Its people and its work, photographed for real | Each one tied to a claim |
| Operate mode | Nothing: the data and the interface | Only content the product handles (products, avatars) |
| Read mode | The text | One figure per idea that a photograph explains, with a caption |
| Experience mode | The work itself | The work, nothing around it competing with it |

A photograph never fills a slot meant for an effect, a decorative drawing or an empty box. If a slot has no honest photograph, use a register from `references/visuals.md` instead.

## 2. Where photographs come from

1. **The client's own.** Ask for them in the intake (`references/intake.md`). If there are none, the report asks for a short shoot, adapted from Taste Skill: what a first-time visitor sees (the frontage head-on, then the room from the entrance), where the work happens (the counter or workbench, hands busy), and what is sold (three products together on one surface, plus one close-up). Natural light only, nothing added in camera, every shot taken both horizontally and vertically.
2. **Otherwise**, in the order set by `references/idea-and-direction.md` §7: generated images, flagged as generated and never used to show the client's product as if it were real; or licensed stand-ins, which are photographs by other people that show the subject's world (§3 and §4).

Optional tool: Taste Skill's `photos.mjs` fetches photographs from Wikimedia Commons and writes the credits. Its curated library also contains Unsplash frames, which are under none of the licences in §3, so pass `--commons-only`. Treat each result as a candidate and check it with §3.

## 3. Licences we accept

Use only these four. Check the licence on the photograph's own source page. The search result and the aggregator are not proof.

| Licence | Commercial use | What it requires |
| --- | --- | --- |
| CC0 | Yes | Nothing. Credit anyway, as a courtesy and so the photograph can be traced |
| Public domain (Public Domain Mark, or a museum's public-domain label) | Yes | Nothing once the status holds. The Public Domain Mark is a label, not a licence, and does not guarantee public-domain status everywhere: check the jurisdiction where the site is published. Name the author when the source names one |
| CC BY (4.0 or earlier version) | Yes | Credit the author, link the licence, say if the photograph was changed |
| CC BY-SA | Yes | Same as CC BY. In addition, a changed version must be released under the same licence |

Refuse everything else: NC (non-commercial), ND (no derivatives), "all rights reserved", a missing licence, and platform licences such as Unsplash or Pexels.

| Source | Verified facts (9 November 2026) |
| --- | --- |
| [Openverse](https://openverse.org) | A search engine that collects metadata from other sites. Its [terms](https://docs.openverse.org/terms_of_service.html) say it does not verify licensing status, so you must verify each right yourself. Always open the photograph's original page |
| [Wikimedia Commons](https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia) | Gives no warranty on copyright status or on the licence. Credit the creator (the "Author" field), not the uploader. Trademarks, personality rights and privacy rights can still limit use, and commercial use of a photograph of a person can need that person's consent |
| [Art Institute of Chicago](https://www.artic.edu/open-access/open-access-images) | Use only works labelled "CC0 Public Domain Designation" that also have a download button. A work without that button is not in the public domain. Getting any third-party permission is the user's responsibility. The museum asks for the credit "Artist. Title, Date. The Art Institute of Chicago." |
| [The Met](https://www.metmuseum.org/en/policies/image-resources) | Open Access images, which carry the OA icon, are CC0 and allowed for commercial use. Works under copyright are not Open Access |

**CC BY-SA in practice.** If you place an unmodified photograph next to other content, the result is a collection, not an adaptation, so the page itself does not become BY-SA ([Creative Commons](https://creativecommons.org/course/cc-cert-edu/unit-4-using-cc-licenses-and-cc-licensed-works/4-4-remixing-cc-licensed-work/)). If you change the photograph, any crop, retouch or composite counts as an adaptation under the licence: mark it "adapted" in the credits and keep the changed file under BY-SA. When a CC0 photograph of the same subject exists, prefer it.

Museum collections show objects and the past: old maps, postcards of the street, an instrument of the trade. They feed the subject inventory. They never stand in for the client's product.

## 4. Stand-ins without lying

A stand-in shows the world around the client. It never shows the client (floor A2).

- **Never passed off** as the client's product, people, premises or location. Write the alt text yourself, and describe what the photograph shows ("a cargo bicycle loaded with crates"), not "our bike". The file's original title names someone else's subject.
- **No other maker's name, logo or badge readable**, and no other business's sign or recognisable room. Crop it out, or drop the photograph.
- **No recognisable face** in a slot that suggests staff, guests or customers. Hands, backs and faces out of frame are fine (Taste Skill).
- **No landmark** that would place the client somewhere it is not.
- **Look at the photograph at full size** before using it: the subject must be sharp, with no watermark, and its light must match the rest of the set.
- **Disclose it once on the page**, in the credits line (§8), and list it in the report together with the client photograph that should replace it. Taste Skill credits a stand-in in its footer credit line like any other photograph, with no caption under it and nothing saying it is a stand-in. Our floor A2 asks that line to say so, and floors are never lifted.

## 5. A physical product without photographs

Taste Skill shows such a product in stand-in photographs of the same kind of thing and never as a drawing. Its tests found that a cargo-bike page that never showed a bike scored 3 out of 10. `references/visuals.md` ranks the photo-less registers by the scores we measured. Honesty ranks above measured data in the conflict order (`CONTRIBUTING.md`), so the rule is:

1. **In the slots that say "this is the product"** (hero, product section, specifications, price, order), never use a photograph of another maker's object. Visitors read it as the client's bicycle. Use, in this order: the client's photograph, cut-out, CAD view or render; then a register from `references/visuals.md` (technical drawing, rank 3, or typography, rank 4). It must pass the subject-without-text test.
2. **In the slots about use and world** (the school run, the street, the load it carries), a stand-in of the same kind of thing is allowed when no model can be identified: cropped, with no brand, often only partly in frame. It is credited and disclosed under §4.
3. **On a draft shown to the client**, before any photographs exist, a stand-in may fill a product slot. It then carries a visible label on the image ("stand-in photo, to replace"), which is rank 6 in `references/visuals.md`. A draft labelled this way never goes live.

The product must still be visible: an anchor of the subject appears in the first two screens (`references/visuals.md`).

## 6. How many photographs

| Page | Count |
| --- | --- |
| Per screen, every mode | One dominant photograph, or one row of 3 or 4 at equal size (Taste Skill) |
| Place page | 8 or more good photographs for a full page. With fewer, build a short page instead of padding a long one with filler (Taste Skill caps it at 2,700 px tall at 1440 px wide) |
| Product page | The whole product in at most 3 sections. The rest shows its use, its parts and the people with it (Taste Skill) |
| Stand-ins on a page that has client photographs | At most 1 in 3 of the photographs (Taste Skill's cap for library frames) |
| Operate | 0 decorative photographs |
| Read | Only where the photograph explains |

Each picture appears once per page: resizing, cropping or flipping it does not make it a new picture, and a run of three shots that barely differ reads as one shot repeated. A file is only ever shown at or below its own resolution, because stretching blurs it: the rendered width at 1x must not exceed `naturalWidth`, and the hero's file should be twice its rendered width.

## 7. Cropping and art direction

- **The set looks shot on the same day by the same person**: matching light, matching colour treatment, matching distance and tone. Monochrome appears in one frame at most, and on purpose (Taste Skill).
- **Few ratios**: pick 3 or 4 from 4:5, 4:3, 1:1 and 3:2. Use one ratio per row and keep sizes equal within a row.
- **Crop to the subject.** Set `object-position` on the subject. Use `<picture>` with a phone crop whenever a full-bleed photograph would lose its subject at 390 px.
- **No effect on a photograph**: no duotone, halftone, grain, glitch, blend mode or filter (Taste Skill), except the drawn moment (`references/moments.md`), where Photograph develops may filter its one photograph while it enters. Mixed light is fixed with a crop, never with an effect.
- **Text on a photograph** only where the area is calm and the contrast measures at least 4.5:1, or 3:1 for large text, on both the desktop crop and the phone crop. Otherwise put the text beside the photograph or under it.
- **Visible from the first paint**, except the drawn moment (`references/moments.md`: Photo chapters, Photograph develops), whose finished state still shows without script and under reduced motion. Outside it, a photograph never waits for a scroll reveal.
- **Corners and frames**: one rule for the whole set, written in `DESIGN.md`.

## 8. Credits

- **One line in the footer** that links to the credits list, never one link per photograph. Taste Skill measured 18 to 20 credit links as reading like a "credit wall". Keep the line to about 110 characters. Example: "Some photographs are illustrative, not of [client] · Photo credits".
- **The credits list** is a page or a section reached from that line. For each photograph, give the author, a link to the source page, the licence with its link, and "adapted" when the photograph was changed.
- **No caption** under photographs in Persuade mode. In Read mode a caption is content and can carry the credit; in Experience mode each work keeps its caption (title, year, role), as in `references/defaults-by-mode.md` and `references/copy.md` §10.

## 9. In the report

List every photograph: file, slot, source URL, author, licence and version, adapted or not, client or stand-in. For each stand-in, add the client photograph to shoot in its place. With no client photographs, say so plainly and attach the shot list from §2.

## 10. Real icons of real tools

If the page names a tool the product really works with, show that tool's real icon in its own colours. Never redraw it, never make a look-alike, and never put a letter in a circle where a real icon exists (Taste Skill). Sources:

- [gilbarbara/logos](https://github.com/gilbarbara/logos): full-colour brand marks, CC0. Pin the commit you use.
- [Simple Icons](https://github.com/simple-icons/simple-icons): one-colour marks, CC0. Read its legal disclaimer before use.

A mark remains its owner's trademark, so use it only to name the tool, never to imply endorsement. Put "Product names and logos are trademarks of their owners" in the footer. Show customer logos only with authorisation (floor A2, `references/intake.md`). Interface glyphs come from the single icon set in `DESIGN.md`.

## 11. Weight and performance

Follow `references/performance.md`. On top of it:

- Serve AVIF or WebP with `srcset` and `sizes` matching the displayed width, and declare `width` and `height`.
- The hero image is loaded eagerly, with `fetchpriority="high"`. Every other image uses `loading="lazy"` and `decoding="async"`.
- Indicative file caps: 400 KB for the hero and 250 KB for any other photograph (Taste Skill). Above that, compress the file or drop its largest size.

## Never

- A stand-in presented as the client's product, people, premises or location.
- A licence that was not verified on the source page, or a licence outside §3.
- Another maker's readable name or logo, or a redrawn brand logo.
- An upscaled photograph, or the same frame used twice.
- Mood stock in place of the subject: a sky, fog, plant shadows, a forest for "freedom".
- An effect, gradient or pattern presented as a photograph.
