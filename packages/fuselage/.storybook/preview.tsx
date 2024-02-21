import breakpointTokens from '@rocket.chat/fuselage-tokens/breakpoints.json';
import { DarkModeProvider } from '@rocket.chat/layout';
import { DocsPage } from '@storybook/addon-docs';
import type { Parameters } from '@storybook/addons';
import type { DecoratorFn } from '@storybook/react';
import { themes } from '@storybook/theming';
import React, { Suspense } from 'react';
import { useDarkMode } from 'storybook-dark-mode';

import manifest from '../package.json';
import { PaletteStyleTag } from '../src';
import { DocsContainer } from './DocsContainer';
import { surface } from './helpers';
import logo from './logo.svg';

import 'normalize.css/normalize.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import '../src/index.scss';
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
    storySort: {
      order: [
        'Inputs',
        'Data Display',
        'Feedback',
        'Containers',
        'Navigation',
        'Layout',
        'Message',
        'Sidebar',
      ],
    },
  },
  viewport: {
    viewports: breakpointTokens.reduce(
      (obj, { name, minViewportWidth }) => ({
        ...obj,
        [name]: {
          name,
          styles: {
            width: `${minViewportWidth}px`,
            height: '90%',
          },
          type: 'desktop',
        },
      }),
      {}
    ),
  },
  darkMode: {
    dark: {
      ...themes.dark,
      appBg: surface.sidebar,
      appContentBg: surface.main,
      barBg: surface.main,
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

export const decorators: DecoratorFn[] = [
  (Story) => {
    const dark = useDarkMode();

    return (
      <Suspense fallback={null}>
        <DarkModeProvider.default forcedDarkMode={dark}>
          <PaletteStyleTag theme={dark ? 'dark' : 'light'} />
          <Story />
        </DarkModeProvider.default>
      </Suspense>
    );
  },
];
