import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import 'loki/configure-react';
import 'normalize.css/normalize.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';
import results from './jest-results.json';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  grid: {
    cellSize: 4,
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
    },
  },
});

addDecorator(withTests({ results }));
