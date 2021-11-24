const colors = require("tailwindcss/colors");
const tailwindCSSAnimista = require("tailwindcss-animistacss");

const app = {
  a: "#121212",
  b: "#212121",
};

module.exports = {
  mode: "jit",
  purge: ["./**/*.jsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      green: colors.emerald,
      red: colors.rose,
      yellow: colors.amber,
      purple: colors.purple,
      sky: colors.sky,
      blue: colors.blue,
      app: app,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    tailwindCSSAnimista({
      classes: ["animate__fade-in-top", "animate__fade-in"],
      settings: {
        "animate__fade-in-top": {
          duration: 750,
          delay: 500,
          iterationCounts: 1,
          isInfinite: false,
        },
      },
    }),
  ],
};
