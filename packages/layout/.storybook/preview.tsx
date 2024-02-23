import { PaletteStyleTag } from '@rocket.chat/fuselage';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import type { Parameters } from '@storybook/addons';
import type { DecoratorFn } from '@storybook/react';
import { Suspense } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import manifest from '../package.json';
import DarkModeProvider from '../src/DarkModeProvider';
import logo from './logo.svg';
import '@rocket.chat/fuselage/dist/fuselage.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';
import { theme } from './theme';

export const parameters: Parameters = {
  backgrounds: {
    grid: {
      cellSize: 4,
      cellAmount: 4,
      opacity: 0.5,
    },
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    storySort: ([, a], [, b]) => a.kind.localeCompare(b.kind),
  },
  layout: 'fullscreen',
  darkMode: {
    dark: {
      ...theme.dark,
      brandTitle: manifest.name,
      brandImage: logo,
      brandUrl: manifest.homepage,
    },
    light: {
      ...theme.light,
      brandTitle: manifest.name,
      brandImage: logo,
      brandUrl: manifest.homepage,
    },
  },
};

export const decorators: DecoratorFn[] = [
  (Story) => {
    const dark = useDarkMode();

    return (
      <Suspense fallback={null}>
        {/* <I18nextProvider i18n={getI18n()}> */}
        <DarkModeProvider forcedDarkMode={dark}>
          <PaletteStyleTag theme={dark ? 'dark' : 'light'} />
          <Story />
        </DarkModeProvider>
        {/* </I18nextProvider> */}
      </Suspense>
    );
  },
];
