import { render } from '@testing-library/react';

import { Box } from './Box';

describe('Box', () => {
  it('renders without crashing', () => {
    render(<Box />);
  });

  it('renders with custom className', () => {
    const { container } = render(<Box className='custom' />);
    expect(container.firstChild).toHaveClass('custom');
  });

  it('renders as different HTML elements', () => {
    const { container } = render(<Box is='span' />);
    expect(container.firstChild?.nodeName).toBe('SPAN');
  });

  it('applies elevation styles', () => {
    const { container } = render(<Box elevation='1' />);
    const element = container.firstChild as HTMLElement;
    expect(element).toHaveStyle({
      boxShadow: expect.any(String),
    });
  });
});
