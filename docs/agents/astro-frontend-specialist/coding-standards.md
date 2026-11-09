# Astro Frontend Coding Standards

## 1. Zero-JS Rule
- Render pure semantic HTML & CSS.
- Interactive layout mechanics (such as horizontal image galleries) must rely on CSS scroll-snap (`scroll-snap-type: x mandatory`).

## 2. Desktop-to-Mobile Frame Constraint
- Desktop background: subtle dark radial gradient (`bg-neutral-950 text-neutral-100 flex justify-center`).
- Mobile container: `w-full max-w-[470px] min-h-screen bg-black border-x border-neutral-900 shadow-2xl relative flex flex-col`.
- Bottom Navigation: Fixed relative to the viewport/column constraint with `max-w-[470px] w-full bottom-0 z-50 backdrop-blur-md bg-black/80 border-t border-neutral-900`.
