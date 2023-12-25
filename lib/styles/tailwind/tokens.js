const light = require("../colors").light;

/**
 * `light['--textPrimary']` -> `{ textPrimary: 'var(--textPrimary)' }`
 */
exports.colorTokens = Object.keys(light).reduce((value, key) => {
  value[key.replace("--", "")] = `var(${key})`;
  return value;
}, {});
