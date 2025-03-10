/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#41220E",
        secondary: "#FFF0E0",
        lightBrown: "#CDC4B7",
        lighterBrown: "#776A5E",
        mediumBrown: "#D6BAA4",
        black: "#221E1E",
      },
      fontFamily: {
        lexend: ["Lexend", "regular"],
        figtree: ["Figtree", "regular"],
      },
    },
    screens: {
      xxs: "400px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      custom:"880px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    backgroundOpacity: {
      '65': '0.65',
    },
  },
  plugins: [],
};
