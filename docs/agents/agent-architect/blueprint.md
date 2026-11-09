# Master Architecture Blueprint: Mobile-First Photography Portfolio

## 1. Architectural Philosophy
- **Device Emulation**: The app renders inside an exact mobile viewport column (`max-w-[470px]`, `w-full`, centered horizontally `mx-auto`) to give desktop users a crisp, phone-frame experience, while rendering edge-to-edge on actual mobile devices.
- **Zero Client Hydration**: Built with Astro static output. No client-side JS runtime bundles needed for standard display.
- **Native Pure CSS Swipe**: Modern mobile feel with `scroll-snap-type: x mandatory`, smooth inertia touch scrolling, hidden native scrollbars.
- **Dynamic Cloudinary Ingestion**: Zero media assets in git. URLs transformed with `f_auto,q_auto,c_limit,w_1080` for sub-second image loading.
- **i18n Ready Schema**: Multi-lingual captions support (EN and RU) with instantaneous switching.

## 2. Phase Breakdown
- **Phase 1: Foundation & Scaffolding**
  - Astro + Tailwind setup
  - Master `Layout.astro` with centered mobile column and desktop ambient background
  - Pinned `BottomNav.astro` fixed inside mobile column with Home, Grid, About icons + EN/RU toggle
  - Git Commit: `feat: initial Astro setup, layout constraint, and bottom nav.`
- **Phase 2: The UI Components**
  - Prompt Engineer specification for `FeedPost.astro`
  - Photoshoot title, location badge, CSS scroll-snap carousel
  - Dynamic dot indicators synchronized with gallery items
  - Git Commit: `feat: FeedPost component with CSS scroll-snap carousels.`
- **Phase 3: Data Architecture & Integration**
  - Data schema in `src/data/feed.json` (ID, location, Cloudinary IDs, EN/RU captions)
  - Home feed in `src/pages/index.astro`
  - Cloudinary URL transform helper `f_auto,q_auto`
  - Git Commit: `feat: Cloudinary data integration and dynamic feed rendering.`
- **Phase 4: Final Review & Deployment Prep**
  - Production build audit (`npm run build`)
  - Portfolio maintenance guide (`README.md`)
  - Git Commit: `chore: final build verification and documentation ready for Vercel deployment.`
