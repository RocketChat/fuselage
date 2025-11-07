import { composeStories } from '@storybook/react-vite';

import { render } from '../../testing.js';

import * as stories from './Divider.stories.js';

const { Default } = composeStories(stories);

describe('[Divider Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
