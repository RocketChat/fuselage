import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';
import manifest from '../package.json';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: manifest.name,
    brandImage: 'https://rocket.chat/images/default/logo--dark.svg',
    brandUrl: manifest.homepage,
    colorPrimary: '#cbced1',
    colorSecondary: '#1d74f5',
  }),
});
