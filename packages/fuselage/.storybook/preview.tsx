import breakpointTokens from '@rocket.chat/fuselage-tokens/breakpoints.json';
import surface from '@rocket.chat/fuselage-tokens/dist/surface.json';
import type { Preview } from '@storybook/react-webpack5';
import { themes } from 'storybook/theming';
import { useDarkMode } from 'storybook-dark-mode';

import manifest from '../package.json';
import { PaletteStyleTag } from '../src';

import DocsContainer from './DocsContainer';
import logo from './logo.svg';

import 'normalize.css/normalize.css';
import '@rocket.chat/icons/dist/rocketchat.css';
import './docs-overrides.scss';

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
        {},
      ),
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
        <>
          <PaletteStyleTag theme={dark ? 'dark' : 'light'} />
          <Story />
        </>
      );
    },
  ],
  tags: ['autodocs'],
} satisfies Preview;
