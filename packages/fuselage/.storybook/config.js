import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withTests } from '@storybook/addon-jest';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import 'loki/configure-react';

import manifest from '../package.json';
import results from './jest-results.json';

addParameters({
  backgrounds: [
    {
      name: 'black',
      value: 'black',
    },
  ],
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
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
});

addDecorator(withTests({ results }));

configure(() => {
  require('@rocket.chat/icons/dist/font/RocketChat.minimal.css');
  const requireStories = require.context('../src', true, /stories(\/index)?\.js$/);
  return requireStories.keys().map(requireStories).filter((module) => module.default);
}, module);
