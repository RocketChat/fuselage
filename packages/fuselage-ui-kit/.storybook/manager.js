import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

import manifest from '../package.json';
import logo from './logo.svg';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: manifest.name,
    brandImage: logo,
    brandUrl: manifest.homepage,
    colorPrimary: colors.n500,
    colorSecondary: colors.b500,
  }),
});
