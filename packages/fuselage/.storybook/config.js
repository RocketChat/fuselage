import { addDecorator, configure, addParameters } from '@storybook/react';
import 'loki/configure-react';
import { withA11y } from '@storybook/addon-a11y';
import { withTests } from '@storybook/addon-jest';
import { create } from '@storybook/theming';
import manifest from '../package.json';
import results from './jest-results.json';


addParameters({
	options: {
		theme: create({
			base: 'dark',
			brandTitle: manifest.name,
			brandImage: 'https://rocket.chat/images/default/logo--dark.svg',
			brandUrl: manifest.homepage,
      gridCellSize: 8,
		}),
		hierarchySeparator: /\//,
		hierarchyRootSeparator: /\|/,
  },
	backgrounds: [
		{
			name: 'white',
			value: 'white',
    },
	],
});

addDecorator(withA11y);

addDecorator(withTests({
  results,
}));

configure(() => {
	const req = require.context('../src', true, /stories(\/index)?\.js$/);
	req.keys().forEach((filename) => req(filename));
}, module);
