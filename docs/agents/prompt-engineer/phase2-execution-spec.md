# Phase 2 UI Engineering Specification: `FeedPost.astro`
**Author:** Prompt Engineer Subagent (PEA v2.0)  
**Target:** Agent Architect & Astro Frontend Specialist  
**Status:** Approved for Implementation  

---

## 1. Architectural Intent & Scope
Phase 2 delivers the core interactive unit of the photography portfolio: [`FeedPost.astro`](file:///home/carlo/photography-portfolio/src/components/FeedPost.astro).
It must recreate the native Instagram mobile feed experience with 0ms lag, zero client slider JavaScript, and strictly responsive containment inside the `max-w-[470px]` column.

---

## 2. Component Design & Structural Blueprint

```text
+------------------------------------------------------+
| [Avatar/Tag]  Photoshoot Title           [Action...] |
| Location Pin: City, Country                          |
+------------------------------------------------------+
|                                                      |
|  <<< [PURE CSS SCROLL-SNAP HORIZONTAL CAROUSEL] >>>  |
|      Aspect ratio: 4:5 (Instagram Portrait Standard) |
|      scroll-snap-type: x mandatory                   |
|      scroll-snap-align: center                       |
|      -webkit-overflow-scrolling: touch               |
|      scrollbar: completely hidden                    |
|                                                      |
+------------------------------------------------------+
|  (•)  ( )  ( )  ( )   [Dynamic Dot Indicators]       |
+------------------------------------------------------+
| [Photo Caption - EN / RU bilingual containers]       |
| [Date / Equipment / Film stock meta badge]           |
+------------------------------------------------------+
```

---

## 3. Strict Negative Constraints (PEA Mandatory Rules)
1. **NO EXTERNAL SLIDERS**: Do NOT install or import Swiper, Slick, Glide, Embla, or Splide.
2. **NO CLIENT SCRIPT BLOAT**: Dot indicators and carousel swiping must rely on pure CSS and native browser scrolling.
3. **NO HORIZONTAL BLEED**: The carousel must be strictly contained within the `470px` mobile container width.
4. **NO RAW IMAGES IN REPO**: Images must be rendered as Cloudinary dynamic URLs (`/f_auto,q_auto,w_1080/`).
5. **ARCHITECTURAL FLEXIBILITY**: The Agent Architect is granted authority to enhance visual elegance (e.g. subtle aspect-ratio framing, smooth gradient overlays, photography metadata tags) provided functional stability is preserved.
