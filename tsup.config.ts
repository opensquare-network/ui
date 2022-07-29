import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  entry: ["lib"],
  format: ["cjs", "esm"],
  treeshake: true,
  legacyOutput: true,
  loader: {
    ".js": "jsx",
    ".png": "copy",
    ".svg": "copy",
  },
  dts: "lib/index.js",
  external: ["semantic-ui-css", "semantic-ui-react"],
});
