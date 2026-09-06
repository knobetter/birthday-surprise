/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: "#ffd1dc",
        pastelLavender: "#e6e6fa",
        deepLavender: "#1a102f",
      },
      fontFamily: {
        handwriting: ['"Caveat"', '"Comic Sans MS"', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
}