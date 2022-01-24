const colors = require("tailwindcss/colors");

const app = {
  a: "#121212",
  b: "#212121",
};

module.exports = {
  content: ["./**/*.jsx"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        app: app,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
