import "semantic-ui-css/semantic.min.css";
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
  (Story) => {
    return (
      <ConfigProvider themeMode="system">
        <Story />
      </ConfigProvider>
    );
  },
];
