/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hsq: {
          cream: '#FBEED2', // Main Background
          rose: '#AA817E',  // Accent / Secondary
          peach: '#FCCEAB', // Highlights
          sage: '#A19D70',  // Muted sections
          earth: '#504027', // Text color (Instead of White)
        }
      }
    },
  },
  plugins: [],
}