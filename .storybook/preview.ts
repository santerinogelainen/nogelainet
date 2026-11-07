import type { Preview } from "@storybook/react";

import "../src/styles/global.scss";
import "../src/styles/theme-dark.scss";
import "../src/styles/theme-light.scss";
import "../src/i18n";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
