import { composeStories } from '@storybook/react-vite';

import { render } from '../../testing.js';

import * as stories from './Sidebar.stories.js';

const { Default } = composeStories(stories);

describe('[Sidebar Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
