const { colorTokens } = require("./tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  presets: [require("./preset-container")],
  theme: {
    extend: {
      colors: {
        ...colorTokens,
      },
    },
  },
  plugins: [require("./plugin-fonts"), require("tailwind-scrollbar")],
};
