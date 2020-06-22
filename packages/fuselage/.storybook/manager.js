import colors from '@rocket.chat/fuselage-tokens/colors';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import manifest from '../package.json';

addons.setConfig({
  theme: create({
    base: 'dark',
    brandTitle: manifest.name,
    brandImage: 'https://rocket.chat/images/default/logo--dark.svg',
    brandUrl: manifest.homepage,
    colorPrimary: colors.n500,
    colorSecondary: colors.b500,
  }),
});
