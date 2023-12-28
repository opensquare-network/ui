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
      boxShadow: {
        shadowCardDefault: "var(--shadowCardDefault)",
        shadowCardHover: "var(--shadowCardHover)",
        shadowPopup: "var(--shadowPopup)",
      },
    },
  },
  plugins: [require("./plugin-fonts"), require("tailwind-scrollbar")],
};
