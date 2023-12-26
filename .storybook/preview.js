import "semantic-ui-css/semantic.min.css";
import "../lib/styles/index.css";
import "../lib/styles/reset.css";
import { withThemeByClassName } from "@storybook/addon-themes";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "light",
  }),
];
