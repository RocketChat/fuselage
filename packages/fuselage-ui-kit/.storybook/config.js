import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import 'normalize.css/normalize.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';
import manifest from '../package.json';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  grid: {
    cellSize: 4,
  },
  options: {
    theme: create({
      base: 'light',
      brandTitle: manifest.name,
      brandImage: 'https://rocket.chat/images/default/logo--dark.svg',
      brandUrl: manifest.homepage,
      colorPrimary: '#cbced1',
      colorSecondary: '#1d74f5',
    }),
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
    },
  },
});

configure(require.context('../src', true, /stories(\/index)?\.(mdx|js)$/), module);
