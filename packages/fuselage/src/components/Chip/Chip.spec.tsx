import { composeStories } from '@storybook/react';

import { render } from '../../testing';
import * as stories from './Chip.stories';

const { Default } = composeStories(stories);

describe('[Chevron Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
});
