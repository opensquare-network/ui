// index.css
const tokens = [
  "--textPrimary",
  "--textSecondary",
  "--textTertiary",
  "--textQuaternary",
  "--textPrimaryContrast",
  "--textSecondaryContrast",
  "--textTertiaryContrast",
  "--textQuaternaryContrast",
  "--textBrandPrimary",
  "--textBrandSecondary",
  "--textLink",
  "--textFeedbackSuccess",
  "--textFeedbackWarning",
  "--textFeedbackError",
  "--fillBgPrimary",
  "--fillBgSecondary",
  "--fillBgTertiary",
  "--fillBgQuaternary",
  "--fillBgPrimaryContrast",
  "--fillBgBrandPrimary",
  "--fillBgBrandSecondary",
  "--fillBgBrandSecondaryBack",
  "--fillBgBrandDisable",
  "--fillBgFeedbackError",
  "--fillBgInputDefault",
  "--fillBgInputDisable",
  "--strokeBorderDefault",
  "--strokeActionDefault",
  "--strokeActionActive",
  "--strokeActionDisable",
  "--strokeBgBrandSecondary",
];

/**
 * '--textPrimary' -> `{ textPrimary: 'var(--textPrimary)' }`
 */
exports.colorTokens = tokens.reduce((value, key) => {
  value[key.replace("--", "")] = `var(${key})`;
  return value;
}, {});
