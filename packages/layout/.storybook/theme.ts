import { themes } from '@storybook/theming';

const surface = {
  sidebar: '#2F343D',
  main: '#262931',
};

export const theme = {
  ...themes,
  dark: {
    ...themes.dark,
    appContentBg: surface.main,
    barBg: surface.main,
    appBg: surface.sidebar,
  },
};
