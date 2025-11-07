import { composeStories } from '@storybook/react-vite';
import { axe } from 'jest-axe';

import { render } from '../../testing.js';

import * as stories from './SearchInput.stories.js';

const { Default } = composeStories(stories);

describe('[SearchInput Component]', () => {
  it('renders without crashing', () => {
    const tree = render(<Default />);
    expect(tree.baseElement).toMatchSnapshot();
  });

  it('%s should have no a11y violations', async () => {
    const { container } = render(<Default />);

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
