import { DarkModeProvider } from '@rocket.chat/layout';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import type { Parameters } from '@storybook/addons';
import type { DecoratorFn } from '@storybook/react';
import { themes } from '@storybook/theming';
import i18next from 'i18next';
import { Suspense } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { useDarkMode } from 'storybook-dark-mode';

import manifest from '../package.json';
import logo from './logo.svg';

import '@rocket.chat/fuselage/dist/fuselage.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';

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
  darkMode: {
    dark: {
      ...themes.dark,
      brandTitle: manifest.name,
      brandImage: logo,
      brandUrl: manifest.homepage,
    },
    light: {
      ...themes.normal,
      brandTitle: manifest.name,
      brandImage: logo,
      brandUrl: manifest.homepage,
    },
  },
};

const getI18n = () => {
  const i18n = i18next.createInstance().use(initReactI18next);

  import('../.i18n/en.i18n.json').then((translation) => {
    i18n.init({
      fallbackLng: 'en',
      debug: false,
      resources: {
        en: {
          translation,
        },
      },
    });
  });

  return i18n;
};

export const decorators: DecoratorFn[] = [
  (Story) => {
    const dark = useDarkMode();

    return (
      <Suspense fallback={null}>
        <I18nextProvider i18n={getI18n()}>
          <DarkModeProvider.default forcedDarkMode={dark}>
            <Story />
          </DarkModeProvider.default>
        </I18nextProvider>
      </Suspense>
    );
  },
];
