import type { Preview } from '@storybook/react';
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
import '@fontsource/rubik/700.css';
import '@fontsource/material-icons';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { muiTheme } from '../src/view/theme/mui-theme';
import { RtlDecorator } from './RtlDecorator';
import 'tailwindcss/tailwind.css';
import '../src/assets/fontawesome/css/all.min.css';
import '../src/assets/fontawesome/rtl.css';
import '../src/index.css';

export const decorators = [
	RtlDecorator,
  withThemeFromJSXProvider({
		themes: {
			light: muiTheme
		},
		defaultTheme: 'light',
		Provider: ThemeProvider,
		GlobalStyles: CssBaseline,
	})
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
	layout: 'centered',
  controls: {
    expanded: true, // Adds the description and default columns
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const preview: Preview = {
  parameters: {
		layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
