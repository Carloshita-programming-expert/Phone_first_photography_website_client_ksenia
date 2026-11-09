# Phase 3 Data Architecture Specification: `feed.json` & Dynamic Feed Rendering
**Author:** Prompt Engineer Subagent (PEA v2.0)  
**Target:** Agent Architect & Astro Frontend Specialist  
**Status:** Approved for Implementation  

---

## 1. Schema Definition (`src/data/feed.json` & `data/feed.json`)

The data file must define a strongly typed collection of photoshoot records:

```json
[
  {
    "id": "shoot-001",
    "title": "Neon Solitude",
    "location": "Tokyo, Japan",
    "camera": "Leica M6 · CineStill 800T",
    "date": "November 2026",
    "images": [
      "samples/landscapes/nature-mountains",
      "samples/landscapes/beach-boat",
      "samples/animals/kitten-playing"
    ],
    "captions": {
      "en": "Rain-slicked reflections and cyan neon in the heart of Shinjuku backalleys.",
      "ru": "Отражения в мокром от дождя асфальте и бирюзовый неон в переулках Синдзюку."
    }
  }
]
```

### Schema Rules:
- **No binary media**: All elements in `images` array must be Cloudinary public IDs (strings), never file paths to local binaries.
- **Bilingual completeness**: Every post must include non-empty `en` and `ru` caption strings.
- **Delivery format**: Image URLs must resolve via `getCloudinaryUrl()` appending `f_auto,q_auto`.

---

## 2. Rendering Rules for `src/pages/index.astro`
- Import feed data directly into the frontmatter.
- Render a continuous, vertical Instagram-style scroll feed inside the `max-w-[470px]` column.
- First post's primary image should have `loading="eager"` (for sub-second LCP); subsequent images must use `loading="lazy"`.
- Support seamless EN/RU caption switching via the bottom navigation toggle.
