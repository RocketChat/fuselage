import { composeStories } from '@storybook/react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import * as stories from './ButtonGroup.stories';

const { Default } = composeStories(stories);

describe('[ButtonGroup Component]', () => {
  it('renders without crashing', () => {
    render(<Default />, { legacyRoot: true });
  });

  it('should have no a11y violations', async () => {
    const { container } = render(<Default />, { legacyRoot: true });

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
