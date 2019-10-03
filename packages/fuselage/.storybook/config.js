import { addDecorator, addParameters, configure } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { create } from '@storybook/theming';

import 'loki/configure-react';
import manifest from '../package.json';
import results from './jest-results.json';


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

addDecorator(withTests({ results }));

configure(() => {
  require('@rocket.chat/icons/dist/font/RocketChat.minimal.css');
  const requireStories = require.context('../src', true, /stories(\/index)?\.js$/);
  const modules = requireStories.keys().map(requireStories).filter((module) => module.default);
  return modules;
}, module);
