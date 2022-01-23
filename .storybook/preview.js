import '!style-loader!css-loader!sass-loader!../src/styles/global.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/theme-dark.scss';
import '!style-loader!css-loader!sass-loader!../src/styles/theme-light.scss';
import "../src/i18n.js";


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'dark'
  },
}