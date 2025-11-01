import { composeStories } from '@storybook/react-vite';

import { render } from '../../testing';

import * as stories from './Chevron.stories';

const { Default } = composeStories(stories);

describe('[Chevron Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
