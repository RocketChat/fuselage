import { render } from '@testing-library/react';

import { Icon } from './IconButton';

describe('Icon', () => {
  it('renders without crashing', () => {
    render(<Icon name='chat' />);
  });

  it('renders with custom size', () => {
    render(<Icon name='chat' size='x40' />);
  });

  it('applies correct aria-hidden attribute', () => {
    const { container } = render(<Icon name='chat' />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });
});
