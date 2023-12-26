const { colorTokens } = require("./lib/styles/tailwind/tokens");
const path = require("node:path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [path.resolve(__dirname, "lib/**/*.{js,jsx}")],
  theme: {
    extend: {
      colors: {
        ...colorTokens,
      },
    },
  },
  plugins: [
    require("./lib/styles/tailwind/plugin-fonts"),
    require("tailwind-scrollbar"),
  ],
};
