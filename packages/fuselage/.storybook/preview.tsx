import breakpointTokens from '@rocket.chat/fuselage-tokens/breakpoints.json';
import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

import manifest from '../package.json';
import { PaletteStyleTag } from '../src';
import { surface } from './helpers';
import logo from './logo.svg';

import 'normalize.css/normalize.css';
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
  },
  decorators: [
    (Story) => {
      const dark = useDarkMode();

      return (
        <>
          <PaletteStyleTag theme={dark ? 'dark' : 'light'} />
          <Story />
        </>
      );
    },
  ],
  tags: ['autodocs'],
} as Preview;
