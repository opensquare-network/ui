/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents }) => {
      addComponents({
        ".container": {
          width: "100%",
          "max-width": "1440px",
          "margin-left": "auto",
          "margin-right": "auto",
        },
      });
    },
  ],
};
