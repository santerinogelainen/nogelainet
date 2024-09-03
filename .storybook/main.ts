import type { StorybookConfig } from "@storybook/react-webpack5";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-webpack5-compiler-swc",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },

  babel: async (options) => {
    return {
      ...options,
      presets: [...(options.presets ?? []), "@babel/preset-react"],
    };
  },

  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    if (!config.module) {
      config.module = {};
    }

    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push({
      test: /\.scss$/,
      use: ["style-loader", "css-loader?url=false", "sass-loader"],
      include: path.resolve(__dirname, "../"),
    });

    // Return the altered config
    return config;
  },
};
export default config;
