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
    // storySort: ([, a], [, b]) => {
    //   const roots = ['Fuselage', 'Buttons', 'Forms', 'Typography'];
    //   const getRootIndex = ({ kind }) => roots.findIndex((root) => kind.startsWith(`${ root }|`));
    //   return getRootIndex(a) - getRootIndex(b);
    // },
  },
});

addDecorator(withTests({ results }));

configure(() => {
  require('@rocket.chat/icons/dist/font/RocketChat.minimal.css');

  const documentationStories = require.context('../src/docs', true, /\.(md|js)x?$/);
  const componentStories = require.context('../src/components', true, /stories(\/index)?\.(md|js)x?$/);

  return [
    ...documentationStories.keys().map(documentationStories),
    ...componentStories.keys().map(componentStories)
  ].filter((module) => module.default && module.default.title);
}, module);
