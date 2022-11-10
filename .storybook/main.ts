import { mergeConfig } from "vite";
import { resolve } from "path";
import type { StorybookViteConfig } from "@storybook/builder-vite";

const config: StorybookViteConfig = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    "storybook-dark-mode",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true,
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        "@components": resolve(__dirname, "src/components"),
        "@images": resolve(__dirname, "src/images"),
        "@storybookConfig": resolve(__dirname, ".storybook"),
      },
    });
  },
};

export default config;
