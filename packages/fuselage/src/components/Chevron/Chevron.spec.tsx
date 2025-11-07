import { composeStories } from '@storybook/react-vite';

import { render } from '../../testing.js';

import * as stories from './Chevron.stories.js';

const { Default } = composeStories(stories);

describe('[Chevron Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
