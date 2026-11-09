# Motion, effects and video in code

## 1. Page motion

Build the page without motion first: a page that needs animation to look finished is not finished. Then, by mode (`defaults-by-mode.md`):

- **One signature motion**, just one, done well; in Persuade mode, a product demo or an effect drawn from the material can be that motion.
- **Entrances**: the hero enters once on load (headline, then text, then image, staggered 60 to 90 ms, rising 16 to 32 px with opacity); below it, nothing enters on scroll except the drawn moment (`references/moments.md`). Content is visible by default: if the script fails, nothing stays hidden.
- **Feedback on every control**: hover, press, focus. A press = slight scale-down (0.95 to 0.98). Visual feedback in under 100 ms.
- **Durations and curves**: one shared easing curve (decelerating on arrival, accelerating on departure), few durations, as tokens. An exit lasts about 60 to 70% of the entrance.
- **Interruptible**: a new action cancels the running animation and sets the final state; never an interaction blocked during an animation.
- **Properties**: `transform` and `opacity`. `clip-path` and mask only for the signature moment, if it holds 60 frames per second on an average phone. Never `transition: all`, never `width`, `height`, `top`, `left`, never animated blur on a large surface.
- **Reduced motion**: with `prefers-reduced-motion: reduce`, keep the content, remove the movement.

To remove: the same fade-up on every block, a dozen staggered entrances in the hero, hover that lifts every card, bouncy easing, meaningless loops, gratuitous parallax, `animate-pulse` on anything that is not live.

## 2. Start from a proven component

Before writing an animation, look for a component in the libraries in `resources.md`, starting with the MIT-licensed ones. Then:

1. Check it against `tells.md` and the floor: many spectacular components themselves contain tells (glows, particles, sparkles, shimmering text).
2. Restyle it entirely with the project's tokens: no trace of the original style.
3. Keep it because it carries the idea or the living thing, never because it impresses.
4. Never copy its code into this skill: it is installed in the project, through the library's CLI or registry.

## 3. GPU effects and shaders

1. **Budget by mode**: none in Operate and Read; a single one, as the signature moment, in Persuade; several possible in Experience.
2. **The effect comes from the subject**: a fluid background for a water or textile brand, yes; a mesh gradient "because it looks premium", no.
3. **Static fallback required** if WebGL or the API is missing, under reduced motion, or on a slow device.
4. **Measured performance**: 60 frames per second on an average phone, paused off-screen, weight counted in the budget.
5. **Legibility**: no text over a moving effect without a neutral scrim and checked contrast.

## 4. Video in code

The model does not produce video: it writes the code that draws each frame (Canvas, p5.js, Three.js, Remotion, HyperFrames, Manim), then a headless browser captures the frames one by one. It is good at motion design, drawn or line animation, explainers, product launch films, lyric-synced clips; it is bad at realistic images of people.

Workflow:

1. **Gather the inputs**: real screenshots and copy of the product, music, shot-by-shot direction.
2. **Write a style bible and a shot-by-shot treatment** before the code.
3. **Storyboard**, then build shot by shot.
4. **Make each frame a function of time**: the preview and the final render are identical, and you can jump to any instant.
5. **Sync to the music by analysis**: beat grid measured on the audio file, start on a downbeat, each sound placed on its measured peak.
6. **Review with contact sheets** (grids of key frames) before the final render.
7. **Render last**, in the final format.

Rules:

- The floor and the defaults apply to every frame: tokens, type, bans; a tell in motion is still a tell.
- Real material: screenshots, copy and data from the product; never an invented feature or number on screen.
- Music is never free by default: the client's music, music under a verified license, or sound synthesized in code.
- Public examples are studied, not copied: copying the prompt of a viral video reproduces its look.
- A video embedded in a page counts as its signature motion, has a poster frame, can be paused and respects reduced motion.
- Check the rendering tool's license before commercial use (Remotion requires a company license beyond 3 employees).
