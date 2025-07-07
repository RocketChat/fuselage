import { render } from '@testing-library/react';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders without crashing', () => {
    render(<IconButton name="chat" />);
  });

  it('renders with custom size', () => {
    render(<IconButton name="chat" size="x40" />);
  });

  it('applies correct aria-hidden attribute', () => {
    const { container } = render(<IconButton name="chat" />);
    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });
});