import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import * as stories from './SearchInput.stories';

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
