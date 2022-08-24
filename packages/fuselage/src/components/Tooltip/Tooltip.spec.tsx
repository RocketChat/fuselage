import { render } from '@testing-library/react';
import React from 'react';

import * as stories from './Tooltip.stories';

const { Default, DarkTooltip } = stories;

describe('[Tooltip Component]', () => {
  it('renders without crashing', () => {
    render(<Default />);
  });
  it('renders text content correctly', () => {
    const { container } = render(<Default />);
    expect(container.firstChild).toHaveTextContent('An example tooltip');
  });
  describe('Dark Tooltip', () => {
    it('has the correct class', () => {
      const { container } = render(<DarkTooltip />);
      expect(container.firstChild).toHaveClass('rcx-tooltip--dark');
    });
  });
});
