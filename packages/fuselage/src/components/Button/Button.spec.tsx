import { composeStories } from '@storybook/testing-react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';

import * as stories from './Button.stories';

const { Default, AsIconButton } = composeStories(stories);

it('renders Button without crashing', () => {
  render(<Default />);
});

it('renders ActionButton without crashing', () => {
  render(<AsIconButton />);
});

it('should have no a11y violations', async () => {
  const { container } = render(<Default />);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
