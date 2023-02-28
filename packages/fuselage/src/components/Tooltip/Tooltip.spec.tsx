import { render } from '@testing-library/react';
import React from 'react';

import { testsFromStories } from '../../helpers/tests';
import * as stories from './Tooltip.stories';

testsFromStories(stories);

const { Default, LightTooltip } = stories;

it('renders text content correctly', () => {
  const { container } = render(<Default />);
  expect(container.firstChild).toHaveTextContent('An example tooltip');
});

it('has the correct class', () => {
  const { container } = render(<Default />);
  expect(container.firstChild).toHaveClass('rcx-tooltip--dark');
});

describe('Light Tooltip', () => {
  it('has the correct class', () => {
    const { container } = render(<LightTooltip />);
    expect(container.firstChild).toHaveClass('rcx-tooltip--light');
  });
});
