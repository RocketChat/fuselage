import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withTests } from '@storybook/addon-jest';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
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
    storySort: ([, a], [, b]) => {
      return a.kind.localeCompare(b.kind);
    },
  },
  viewport: {
    viewports: {
      xs: {
        name: 'xs',
        styles: {
          width: '320px',
          height: '90%',
        },
        type: 'desktop',
      },
      sm: {
        name: 'sm',
        styles: {
          width: '600px',
          height: '90%',
        },
        type: 'desktop',
      },
      md: {
        name: 'md',
        styles: {
          width: '768px',
          height: '90%',
        },
        type: 'desktop',
      },
      lg: {
        name: 'lg',
        styles: {
          width: '1024px',
          height: '90%',
        },
        type: 'desktop',
      },
      xl: {
        name: 'xl',
        styles: {
          width: '1440px',
          height: '90%',
        },
        type: 'desktop',
      },
      ...INITIAL_VIEWPORTS,
    },
  },
});

addDecorator(withTests({ results }));

configure(() => {
  require('normalize.css/normalize.css');
  require('@rocket.chat/icons/dist/rocketchat.css');
  require('@rocket.chat/fuselage-polyfills');

  if (process.env.NODE_ENV === 'loki') {
    const style = document.createElement('style');
    style.innerHTML = `
      body, body * {
        animation: none !important;
        transition: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  const documentationStories = require.context('../src/docs', true, /\.(md|js)x?$/);
  const componentStories = require.context('../src/components', true, /stories(\/index)?\.(md|js)x?$/);

  return [
    ...documentationStories.keys().map(documentationStories),
    ...componentStories.keys().map(componentStories)
  ].filter((module) => module.default && module.default.title);
}, module);
