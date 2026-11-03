# Performance budget

On a slow mobile network, a page that doesn't display has no design. The threshold is the same in every mode; what changes is what you are allowed to spend to reach it.

## Threshold (A5 floor)

Core Web Vitals thresholds:

- LCP (rendering of the largest element) ≤ 2.5 s
- INP (responsiveness) ≤ 200 ms
- CLS (layout stability) ≤ 0.1

How to measure: in the lab (Lighthouse or equivalent, mobile, simulated slow network), measure LCP and CLS; INP can only be measured with real interactions, so track TBT as a proxy. On real usage data, the thresholds apply at the 75th percentile.

If the budget breaks: the effect, the video or the 3D becomes a static image.

## What each mode can spend

| Spend | Persuade | Operate | Read | Experience |
| --- | --- | --- | --- | --- |
| GPU effect, shader, WebGL | 1 at most, as the signature moment | None | None | Several if the threshold holds |
| Video | 1 muted loop with a poster frame, or a product demo that counts as the signature moment | None outside content | Embedded in the content, no autoplay | Free if the threshold holds |
| 3D | Only as the signature moment | None | None | Free if the threshold holds |
| Animation libraries | A single one | A single, lightweight one | None needed | Depending on the work |

## Common rules

1. Images in WebP or AVIF, `srcset` and `sizes`, dimensions or `aspect-ratio` declared; lazy loading (`loading="lazy"`) below the fold; the hero image is never lazy-loaded.
2. Fonts: only the weights in use, `font-display: swap`, preload the critical font only.
3. Reserved space for any asynchronous content, to avoid jumps.
4. Third-party scripts as `async` or `defer`, and only if they serve a purpose.
5. Each effect has a static fallback, pauses off-screen and respects reduced motion.
6. Lists of more than 50 items virtualized; frequent events (scroll, input) throttled.
7. Measure on the production version (after build), not only on the development server.

A maximum page weight per mode will be set from real measurements on the first projects, rather than from a figure in principle.
