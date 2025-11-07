import { composeStories } from '@storybook/react-vite';

import { render } from '../../testing.js';

import * as stories from './Chip.stories.js';

const { Default } = composeStories(stories);

describe('[Chevron Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
