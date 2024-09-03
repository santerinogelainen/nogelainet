import type { Preview } from "@storybook/react";

import "!style-loader!css-loader!sass-loader!../src/styles/global.scss";
import "!style-loader!css-loader!sass-loader!../src/styles/theme-dark.scss";
import "!style-loader!css-loader!sass-loader!../src/styles/theme-light.scss";
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
