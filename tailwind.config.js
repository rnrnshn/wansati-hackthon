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
        "primary": "#12183A",
        "primary-hover": "#2596cf",
        "secondary": "#A020EF",
        "tertiary": "#F24BA7",
        "quaternary": "#4CBDD0",
        "gray-headline":"#061800",
        "gray-paragraph": "#384633",
        "beige": "#FFFAF1",
        "green-light": "#DCE9E2",
        "green-light-02": "#F7F9F9"
      },
      backgroundImage: {
        "hero": "url(/assets/melanie.jpg)"
      }
    },
  },
  plugins: [],
}
