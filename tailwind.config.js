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
        "primary": "#D90452",
        "primary-hover": "#D90452",
        "secondary": "#F24BA7",
        "tertiary": "#F263C0",
        "quaternary": "#4CBDD0",
        "gray-headline":"#061800",
        "gray-paragraph": "#384633",
        "beige": "#FFFAF1",
        "green-light": "#DCE9E2",
        "green-light-02": "#F7F9F9"

      }
    },
  },
  plugins: [],
}
