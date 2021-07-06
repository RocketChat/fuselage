import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { DecoratorFunction } from '@storybook/addons';
import { addParameters } from '@storybook/react';
import 'loki/configure-react';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';
import i18next from 'i18next';
import { ElementType, ReactElement, Suspense } from 'react';
import { I18nextProvider, initReactI18next } from 'react-i18next';

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

  i18n.init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        translation: {
          page: {
            emailConfirmed: {
              title: 'Email Confirmed!',
              subtitle:
                'You can return to your Rocket.Chat application – we have launched your workspace already.',
            },
            confirmationProcess: {
              title: 'Confirmation in Process',
            },
          },
        },
      },
    },
  });

  return i18n;
};

export const decorators: DecoratorFunction<ReactElement>[] = [
  (Story: ElementType): ReactElement => (
    <Suspense fallback={null}>
      <I18nextProvider i18n={getI18n()}>
        <Story />
      </I18nextProvider>
    </Suspense>
  ),
];
