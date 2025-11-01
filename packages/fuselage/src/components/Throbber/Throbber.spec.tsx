import { composeStories } from '@storybook/react-vite';

import { render } from '../../testing.js';

import * as stories from './Throbber.stories.js';

const { Default } = composeStories(stories);

describe('[Throbber Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
