# CSS Loader Animation — Six Effects

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/css-loader-six-effects/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

This is a runnable recreation of the uploaded 20.77-second screen recording.

## The six loaders shown

1. **Gradient Text** — animated gradient sweep across the word `LOADING`.
2. **Radar Pulse** — expanding, fading circular pulse.
3. **Morphing Shape** — square morphs into a circle and back while rotating; visible colors include `#1abc9c` and `#9b59b6`.
4. **Dual Orbit** — blue outer orbit and orange inner orbit rotating in opposite directions.
5. **Bouncing Shadows** — three orange dots bounce with staggered timing and soft shadows.
6. **Progress Bar** — blue segment slides through a short dark track.

## Source extraction notes

The recording visibly shows these exact or near-exact CSS values/declarations, which are retained in the code panels and implementation:

- Gradient text: `font-size: 32px`, `font-weight: bold`, `letter-spacing: 5px`, `background-size: 200% 100%`, `background-position: 100% 0`, `-webkit-background-clip: text`, `color: transparent`, `animation: sweep 2s infinite linear`.
- Radar pulse: `border-radius: 50%`, `animation: pulse 1.2s infinite ...`, keyframes scale from `0` to `2`, opacity from `1` to `0`.
- Morphing shape: square at 0% (`#1abc9c`), rounded at 50% (`#9b59b6`), square again at 100%, with rotations.
- Dual orbit: outer blue `#1e90ff` borders and inner orange `#ff7f50` borders, using forward/backward spin animations.
- Bouncing shadows: `jump 0.5s alternate infinite`, staggered child delays, `translateY(0)` to `translateY(-20px)`.
- Progress bar: `background-color: #0984e3`, `left: -50%`, `width: 50%`, `border-radius: 3px`, `slide 1.5s infinite ease`; keyframe positions and widths are reproduced.

Some CSS lines are clipped at the right edge or are too small to read fully in the video. Where that happens, the missing declaration details are completed to make the animation work; those reconstructed parts are not represented as verbatim extraction.

## Run locally

1. Extract the ZIP.
2. Open `index.html` in a modern browser.
3. Scroll inside the orange-bordered panel to view all six cards.
4. Use **Copy CSS** on any card to copy its complete CSS snippet.

No npm install, external libraries, server, or build step is required.

## Files

- `index.html` — six animation previews and visible code panels
- `style.css` — layout and all six CSS animations
- `script.js` — CSS copy buttons
- `README.md` — this guide

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
