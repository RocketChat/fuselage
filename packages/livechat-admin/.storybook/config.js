import { addDecorator, addParameters, configure } from '@storybook/react';
import { create } from '@storybook/theming';
import manifest from '../package.json';


addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: manifest.name,
      brandImage: 'https://rocket.chat/images/default/logo--dark.svg',
      brandUrl: manifest.homepage,
      gridCellSize: 8,
    }),
    hierarchySeparator: /\//,
    hierarchyRootSeparator: /\|/,
  },
});

configure(() => {
  const jsStories = require.context('../src', true, /stories(\/index)?\.js$/);
  jsStories.keys().forEach((filename) => jsStories(filename));
}, module);
