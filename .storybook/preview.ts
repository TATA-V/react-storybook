/** @type { import('@storybook/react').Preview } */
import { ThemeProvider } from 'styled-components';
import { themes } from '../src/themes';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import '../src/tailwind.css'

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: { themes },
    Provider: ThemeProvider,
  }),
];

export default preview;
