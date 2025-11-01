import { composeStories } from '@storybook/react-vite';

import { render } from '../../testing';

import * as stories from './Sidebar.stories';

const { Default } = composeStories(stories);

describe('[Sidebar Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
