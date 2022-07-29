import "semantic-ui-css/semantic.min.css";
import "react-mde/lib/styles/css/react-mde-all.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
