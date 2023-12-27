const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addComponents }) => {
  addComponents({
    ".text64Bold": {
      "font-family": "var(--font-montserrat, Montserrat)",
      "font-size": "64px",
      "font-weight": "700",
      "line-height": "64px",
      "letter-spacing": "0",
    },
    ".text36Bold": {
      "font-family": "var(--font-montserrat, Montserrat)",
      "font-size": "36px",
      "font-weight": "700",
      "line-height": "36px",
      "letter-spacing": "0",
    },
    ".text24Bold": {
      "font-family": "var(--font-inter, Inter)",
      "font-size": "24px",
      "font-weight": "700",
      "line-height": "36px",
      "letter-spacing": "0",
    },
    ".text20Semibold": {
      "font-family": "var(--font-inter, Inter)",
      "font-size": "20px",
      "font-weight": "600",
      "line-height": "32px",
      "letter-spacing": "0",
    },
    ".text18Semibold": {
      "font-family": "var(--font-inter, Inter)",
      "font-size": "18px",
      "font-weight": "600",
      "line-height": "28px",
      "letter-spacing": "0",
    },
    ".text16Semibold": {
      "font-family": "var(--font-inter, Inter)",
      "font-size": "16px",
      "font-weight": "600",
      "line-height": "24px",
      "letter-spacing": "0",
    },
    ".text15Medium": {
      "font-family": "var(--font-inter, Inter)",
      "font-size": "15px",
      "font-weight": "500",
      "line-height": "24px",
      "letter-spacing": "0",
    },
    ".text14Semibold": {
      "font-family": "var(--font-inter, Inter)",
      "font-size": "14px",
      "font-weight": "600",
      "line-height": "20px",
      "letter-spacing": "0",
    },
    ".text14Medium": {
      "font-family": "var(--font-inter, Inter)",
      "font-size": "14px",
      "font-weight": "500",
      "line-height": "20px",
      "letter-spacing": "0",
    },
    ".text12Medium": {
      "font-family": "var(--font-inter, Inter)",
      "font-size": "12px",
      "font-weight": "500",
      "line-height": "16px",
      "letter-spacing": "0",
    },
  });
});
