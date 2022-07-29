import { defineConfig } from "tsup";

export default defineConfig({
  clean: true,
  loader: {
    ".js": "jsx",
    ".png": "copy",
    ".svg": "copy",
  },
  bundle: false,
  dts: "lib/index.js",
});
