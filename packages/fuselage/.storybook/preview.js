import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import 'loki/configure-react';
import 'normalize.css/normalize.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';
import breakpoints from '@rocket.chat/fuselage-tokens/breakpoints';
import results from './jest-results.json';

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

addDecorator(withTests({ results }));
