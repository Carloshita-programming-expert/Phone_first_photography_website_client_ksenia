/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        mobile: '470px',
      },
      aspectRatio: {
        '4/5': '4 / 5',
      },
      colors: {
        surface: {
          dark: '#0a0a0a',
          card: '#121212',
          border: '#222222',
        },
        luxury: {
          base: '#0B0C0E',      // Deep obsidian dark background
          taupe: '#8C7562',     // Warm bronze/taupe for borders, secondary text, metadata
          crimson: '#711C1D',   // Rich wine/crimson for active indicators, hover states, accent borders
          cream: '#F4F1EA',     // Soft alabaster/cream for primary headings and body copy
        },
      },
    },
  },
  plugins: [],
};
