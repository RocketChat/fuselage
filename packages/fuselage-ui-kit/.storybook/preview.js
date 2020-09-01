import breakpointTokens from '@rocket.chat/fuselage-tokens/breakpoints.json';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addParameters } from '@storybook/react';
import 'normalize.css/normalize.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  grid: {
    cellSize: 4,
  },
  viewport: {
    viewports: Object.entries(breakpointTokens).reduce((obj, [name, { minViewportWidth }]) => ({
      ...obj,
      [name]: {
        name,
        styles: {
          width: `${ minViewportWidth }px`,
          height: '90%',
        },
        type: 'desktop',
      },
    }), {}),
  },
});
