import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import 'loki/configure-react';
import 'normalize.css/normalize.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';
import breakpoints from '@rocket.chat/fuselage-tokens/breakpoints';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  grid: {
    cellSize: 4,
  },
  options: {
    showRoots: true,
    storySort: ([, a], [, b]) => {
      return a.kind.localeCompare(b.kind);
    },
  },
  viewport: {
    viewports: Object.entries(breakpoints).reduce((obj, [name, { minViewportWidth }]) => ({
      ...obj,
      [name]: {
        name,
        styles: {
          width: `${ minViewportWidth }px`,
          height: '90%',
        },
        type: 'desktop'
      },
    }), {}),
  },
});

if (process.env.NODE_ENV === 'production') {
  const { withTests } = require('@storybook/addon-jest');
  const results = require('./jest-results.json');
  addDecorator(withTests({ results }));
}
