import breakpointTokens from '@rocket.chat/fuselage-tokens/breakpoints';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import 'loki/configure-react';
import 'normalize.css/normalize.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';

addParameters({
  background: {
    grid: {
      cellSize: 4,
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: ([, a], [, b]) => a.kind.localeCompare(b.kind),
  },
  viewport: {
    viewports: Object.entries(breakpointTokens).reduce(
      (obj, [name, { minViewportWidth }]) => ({
        ...obj,
        [name]: {
          name,
          styles: {
            width: `${minViewportWidth}px`,
            height: '90%',
          },
          type: 'desktop',
        },
      }),
      {}
    ),
  },
});

if (process.env.NODE_ENV === 'production') {
  const { withTests } = require('@storybook/addon-jest');
  // eslint-disable-next-line import/no-unresolved
  const results = require('./jest-results.json');
  addDecorator(withTests({ results }));
}
