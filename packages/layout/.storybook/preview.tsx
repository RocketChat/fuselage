import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import type { DecoratorFunction } from '@storybook/addons';
import { addParameters } from '@storybook/react';
import type { ElementType, ReactElement } from 'react';
import React, { Suspense } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import DarkModeProvider from '../src/DarkModeProvider';

import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';

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

export const decorators: DecoratorFunction<ReactElement>[] = [
  (Story: ElementType): ReactElement => {
    const dark = useDarkMode();
    return (
      <Suspense fallback={null}>
        {/* <I18nextProvider i18n={getI18n()}> */}
        <DarkModeProvider forcedDarkMode={dark}>
          <Story />
        </DarkModeProvider>
        {/* </I18nextProvider> */}
      </Suspense>
    );
  },
];
