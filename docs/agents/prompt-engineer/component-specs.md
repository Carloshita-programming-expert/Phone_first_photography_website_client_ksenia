# Component Specifications & Guidelines

## FeedPost.astro Guidelines
- **Structure**:
  1. Header: Avatar/Badge, Photoshoot Title, Location pin with city/country.
  2. Carousel Container:
     - `display: flex; overflow-x: auto; scroll-snap-type: x mandatory;`
     - `-webkit-overflow-scrolling: touch;`
     - Scrollbar hidden using Tailwind utilities (`scrollbar-none` or `::-webkit-scrollbar { display: none }` with `ms-overflow-style: none`, `scrollbar-width: none`).
  3. Image items:
     - Each item takes `flex-shrink-0 w-full aspect-[4/5] object-cover scroll-snap-align: center`.
  4. Indicators:
     - Centered dot indicators corresponding to `images.length`.
  5. Caption & Metadata:
     - Date/session tag, bilingual captions (EN/RU).
