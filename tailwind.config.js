/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
      current: 'currentColor',
        primary: "#ff9142",
      },
    },
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      syne: ["Syne", "sans-serif"],
    },
  },
  plugins: [],
};
