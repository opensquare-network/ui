const path = require("node:path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [path.resolve(__dirname, "lib/**/*.{js,jsx}")],
  presets: [require("./tailwind/preset")],
};
