/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "barlow": ["'Barlow'", "sans-serif"],
        "barlow-condensed": ["'Barlow Condensed'", "sans-serif"],
        "bellefair": ["'Bellefair'", "sans-serif"],
      },
      colors: {
        "primary": "#0B0D17",
        "secondary": "#D0D6F9"
      },
    },
  },
  plugins: [],
}

