const { colorTokens } = require("./tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        "container-width": "var(--container-width)",
      },
      colors: {
        ...colorTokens,
      },
    },
  },
  plugins: [require("./plugin-fonts"), require("tailwind-scrollbar")],
};
