import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';

import 'loki/configure-react';
import manifest from '../package.json';


addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: manifest.name,
      brandImage: 'https://rocket.chat/images/default/logo--dark.svg',
      brandUrl: manifest.homepage,
      gridCellSize: 8,
    }),
    panelPosition: 'right',
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
  },
  backgrounds: [
    {
      name: 'black',
      value: 'black',
    },
  ],
});


configure(() => {
  const requireStories = require.context('../src', true, /stories(\/index)?\.js$/);
  requireStories.keys().forEach(requireStories);
}, module);
