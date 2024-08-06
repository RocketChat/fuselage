import { render } from '@testing-library/react';

import * as stories from './Tooltip.stories';

const { Default, LightTooltip } = stories;

describe('[Tooltip Component]', () => {
  it('renders without crashing', () => {
    render(<Default />, { legacyRoot: true });
  });
  it('renders text content correctly', () => {
    const { container } = render(<Default />, { legacyRoot: true });
    expect(container.firstChild).toHaveTextContent('An example tooltip');
  });
  it('has the correct class', () => {
    const { container } = render(<Default />, { legacyRoot: true });
    expect(container.firstChild).toHaveClass('rcx-tooltip--dark');
  });
  describe('Light Tooltip', () => {
    it('has the correct class', () => {
      const { container } = render(<LightTooltip />, { legacyRoot: true });
      expect(container.firstChild).toHaveClass('rcx-tooltip--light');
    });
  });
});
