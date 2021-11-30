import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { DecoratorFunction } from '@storybook/addons';
import { addParameters } from '@storybook/react';
import 'loki/configure-react';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';
import i18next from 'i18next';
import { ElementType, ReactElement, Suspense } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { useDarkMode } from 'storybook-dark-mode';

import DarkModeProvider from '../src/common/DarkModeProvider';

addParameters({
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
});

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

export const decorators: DecoratorFunction<ReactElement>[] = [
  (Story: ElementType): ReactElement => {
    const dark = useDarkMode();
    return (
      <Suspense fallback={null}>
        <I18nextProvider i18n={getI18n()}>
          <DarkModeProvider forcedDarkMode={dark}>
            <Story />
          </DarkModeProvider>
        </I18nextProvider>
      </Suspense>
    );
  },
];
