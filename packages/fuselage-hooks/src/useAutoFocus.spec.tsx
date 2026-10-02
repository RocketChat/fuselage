import { render, screen } from '@testing-library/react';

import { useAutoFocus } from './useAutoFocus';

const TestComponent = ({
  visible = true,
  enabled = true,
  id = 'input',
  preventScroll = false,
}) => {
  const ref = useAutoFocus<HTMLInputElement>(enabled, { preventScroll });
  return (
    <>
      {visible && <input key={id} ref={ref} aria-label={id} />}
      <button type='button'>Other control</button>
    </>
  );
};

it('focuses an input attached after the initial render', () => {
  const { rerender } = render(<TestComponent visible={false} />);
  rerender(<TestComponent />);

  expect(document.activeElement).toBe(screen.getByRole('textbox'));
});

it('focuses a replacement input', () => {
  const { rerender } = render(<TestComponent />);
  rerender(<TestComponent id='replacement' />);

  expect(document.activeElement).toBe(screen.getByRole('textbox'));
});

it('does not focus a late input when disabled, but focuses when enabled', () => {
  const { rerender } = render(
    <TestComponent visible={false} enabled={false} />,
  );
  rerender(<TestComponent enabled={false} />);
  expect(document.activeElement).not.toBe(screen.getByRole('textbox'));

  rerender(<TestComponent />);
  expect(document.activeElement).toBe(screen.getByRole('textbox'));
});

it('does not steal focus back during ordinary rerenders', () => {
  const { rerender } = render(<TestComponent />);
  const other = screen.getByRole('button');
  other.focus();
  rerender(<TestComponent preventScroll />);

  expect(document.activeElement).toBe(other);
});

it('uses the latest focus options for a late attachment', () => {
  const focus = jest.spyOn(HTMLInputElement.prototype, 'focus');
  try {
    const { rerender } = render(<TestComponent visible={false} />);
    rerender(<TestComponent preventScroll />);
    expect(focus).toHaveBeenCalledWith({ preventScroll: true });
  } finally {
    focus.mockRestore();
  }
});
