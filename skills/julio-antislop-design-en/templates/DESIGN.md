# DESIGN.md — [Project name]

<!-- 9-section structure inspired by the DESIGN.md specification published by Google Labs (Stitch, April 2026, Apache 2.0), completed with fields specific to this skill. Place it at the project root; it takes precedence over the skill's defaults. -->

Mode: [Persuade | Operate | Read | Experience]
Idea: On this page, [a thing specific to the subject] becomes [the composition device].
Signature: [a single detail specific to the product]

## 1. Visual theme and atmosphere

[2 or 3 concrete character words. The subject's world: place, materials, light. What the page should make people feel.]

## 2. Colors and roles

| Token | Value (OKLCH) | Role | Contrast checked |
| --- | --- | --- | --- |
| `--bg` | | Page background | |
| `--surface-1` | | Raised surface | |
| `--ink` | | Main text | on `--bg`: |
| `--ink-2` | | Secondary text | on `--bg`: |
| `--ink-3` | | Muted text | on `--bg`: |
| `--accent` | | Primary action, selection | text on it: |
| `--focus` | | Focus ring | |

Origin of the anchor color: [brand, subject's material, …]
Dark variant: [yes / no, and why, based on the scene of use]

## 3. Typography

| Role | Font (exact name) | Source and license | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- | --- |
| Display | | | | | | |
| Heading | | | | | | |
| Body | | | | | | |
| Label | | | | | | |

## 4. Components

[Buttons: shape (square or pill), states. Fields: label, help, error. Cards or panels depending on the mode. Icons: set, size, stroke.]

## 5. Layout

[Grid, maximum container width, margins, spacing scale, gap between sections, default alignment.]

## 6. Depth and elevation

[Tone shifts between surfaces; shadows reserved for what floats; border or shadow, not both.]

## 7. Do's and don'ts

- Defaults lifted for this project, with their reason: …
- Brand-specific prohibitions: …

## 8. Responsive behavior

[Breakpoints, mobile recomposition, what disappears or is simplified, minimum text size.]

## 9. Guide for agents

- Use only the tokens above; no hard-coded values.
- Motion: [signature motion, durations, curve].
- Budget: [effects allowed by the mode].
- Sources: references consulted (URL and quality borrowed), components and images with their license.
