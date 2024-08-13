import surface from '@rocket.chat/fuselage-tokens/dist/surface.json';
import { DarkModeProvider } from '@rocket.chat/layout';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { Suspense } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import manifest from '../package.json';
import ToastBarProvider from '../src/ToastBarProvider';
import DocsContainer from './DocsContainer';
import logo from './logo.svg';

import '@rocket.chat/fuselage/dist/fuselage.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';

export default {
  parameters: {
    backgrounds: {
      grid: {
        cellSize: 4,
        cellAmount: 4,
        opacity: 0.5,
      },
    },
    docs: {
      container: DocsContainer,
    },
    options: {
      storySort: {
        method: 'alphabetical',
      },
    },
    darkMode: {
      dark: {
        ...themes.dark,
        appBg: surface.surface.dark.sidebar,
        appContentBg: surface.surface.dark.light,
        appPreviewBg: 'transparent',
        barBg: surface.surface.dark.light,
        brandTitle: manifest.name,
        brandImage: logo,
        brandUrl: manifest.homepage,
      },
      light: {
        ...themes.normal,
        appPreviewBg: 'transparent',
        brandTitle: manifest.name,
        brandImage: logo,
        brandUrl: manifest.homepage,
      },
    },
  },
  decorators: [
    (Story) => {
      const dark = useDarkMode();

      return (
        <Suspense fallback={null}>
          <DarkModeProvider.default forcedDarkMode={dark}>
            <ToastBarProvider>
              <Story />
            </ToastBarProvider>
          </DarkModeProvider.default>
        </Suspense>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Preview;
