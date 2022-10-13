import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import type { DecoratorFunction } from '@storybook/addons';
import { addParameters } from '@storybook/react';
import '@rocket.chat/icons/dist/rocketchat.css';
import '@rocket.chat/fuselage-polyfills';
import type { ElementType, ReactElement } from 'react';
import { Suspense } from 'react';
import { useDarkMode } from 'storybook-dark-mode';
import ToastBarProvider from '../src/ToastBarProvider';
import { DarkModeProvider } from '@rocket.chat/layout';
import React from 'react';

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
        <DarkModeProvider.default forcedDarkMode={dark}>
          <ToastBarProvider>
            <Story />
          </ToastBarProvider>
        </DarkModeProvider.default>
      </Suspense>
    );
  },
];
