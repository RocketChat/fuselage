import colorTokens from '@rocket.chat/fuselage-tokens/colors.json';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import manifest from '../package.json';
import logo from './logo.svg';

// eslint-disable-next-line no-unused-vars
const lightTheme = create({
  base: 'light',
  brandTitle: manifest.name,
  brandImage: logo,
  brandUrl: manifest.homepage,
  colorPrimary: colorTokens.light.n500,
  colorSecondary: colorTokens.light.b500,
});

// eslint-disable-next-line no-unused-vars
const darkTheme = create({
  base: 'dark',
  brandTitle: manifest.name,
  brandImage: logo,
  brandUrl: manifest.homepage,
  colorPrimary: colorTokens.dark.n500,
  colorSecondary: colorTokens.dark.b500,
});

addons.setConfig({
  theme: lightTheme,
});
