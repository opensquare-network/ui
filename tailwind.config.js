const { colorTokens } = require("./lib/styles/tailwind/tokens");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./lib/**/*.{js,jsx}"],
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
