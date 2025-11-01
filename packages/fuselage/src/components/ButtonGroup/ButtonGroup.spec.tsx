import { composeStories } from '@storybook/react-vite';
import { axe } from 'jest-axe';

import { render } from '../../testing.js';

import * as stories from './ButtonGroup.stories.js';

const { Default } = composeStories(stories);

describe('[ButtonGroup Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });

  it('should have no a11y violations', async () => {
    const { container } = render(<Default />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
