export default {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-themes",
    "@storybook/addon-styling-webpack",
    ({
      name: "@storybook/addon-styling-webpack",

      options: {
        rules: [{
      test: /\.css$/,
      sideEffects: true,
      use: [
          require.resolve("style-loader"),
          {
              loader: require.resolve("css-loader"),
              options: {
                  
                  importLoaders: 1,
              },
          },{
    loader: require.resolve("postcss-loader"),
    options: {
    implementation: require.resolve("postcss"),
    },
    },
      ],
    },],
      }
    })
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  // https://github.com/storybookjs/storybook/issues/6188#issuecomment-822924831
  webpackFinal: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test.test(".svg"),
    );
    fileLoaderRule.exclude = /\.svg$/;

    // https://github.com/facebook/create-react-app/blob/f99167c014a728ec856bda14f87181d90b050813/packages/react-scripts/config/webpack.config.js#L388
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: false,
            svgoConfig: {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
            titleProp: true,
            ref: true,
          },
        },
        {
          loader: "file-loader",
          options: {
            name: "static/media/[name].[hash].[ext]",
          },
        },
      ],
    });
    return config;
  },
  docs: {
    autodocs: true,
  },
};
