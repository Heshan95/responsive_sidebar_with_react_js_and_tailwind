/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sea-green": "#20b2aa",
        "light-white":"rgba(255,255,255,0.18)"
      }
    },
  },
  plugins: [],
}

