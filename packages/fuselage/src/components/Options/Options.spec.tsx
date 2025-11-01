import { composeStories } from '@storybook/react-vite';

import { render } from '../../testing.js';

import * as stories from './Options.stories.js';

const { Default } = composeStories(stories);

describe('[Message Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
