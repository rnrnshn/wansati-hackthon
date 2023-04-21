/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D90452",
        secondary: "#F24BA7",
        tertiary: "#F263C0",
        quaternary: "#4CBDD0"
      }
    },
  },
  plugins: [],
}
