import "../lib/styles/index.css";
import "../lib/styles/reset.css";
import { withThemeByClassName } from "@storybook/addon-themes";
import ConfigProvider from "../lib/context/config";

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
  // https://github.com/storybookjs/testing-react/issues/30#issuecomment-1542479018
  (story) => {
    return <ConfigProvider themeMode="system">{story()}</ConfigProvider>;
  },
];
