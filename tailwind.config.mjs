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
      },
    },
  },
  plugins: [],
};
