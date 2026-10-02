import { fireEvent, render, screen } from '@testing-library/react';

import { useButtonPattern } from './useButtonPattern';

const TestComponent = ({ onPress }: { onPress: () => void }) => (
  <div {...useButtonPattern(onPress)}>Action</div>
);

it.each([
  { key: 'Enter', code: 'Enter' },
  { key: 'Enter', code: 'NumpadEnter' },
  { key: 'Enter', code: '' },
  { key: ' ', code: 'Space' },
  { key: ' ', code: '' },
])('activates for key=$key and code=$code', (event) => {
  const onPress = jest.fn();
  render(<TestComponent onPress={onPress} />);
  const button = screen.getByRole('button');

  expect(fireEvent.keyDown(button, event)).toBe(false);
  expect(onPress).toHaveBeenCalledTimes(1);
});

it('does not activate for a non-button key mapped to the physical Space key', () => {
  const onPress = jest.fn();
  render(<TestComponent onPress={onPress} />);

  expect(
    fireEvent.keyDown(screen.getByRole('button'), { key: 'x', code: 'Space' }),
  ).toBe(true);
  expect(onPress).not.toHaveBeenCalled();
});

it('uses the current action for pointer and keyboard activation', () => {
  const previous = jest.fn();
  const current = jest.fn();
  const { rerender } = render(<TestComponent onPress={previous} />);
  rerender(<TestComponent onPress={current} />);
  const button = screen.getByRole('button');

  fireEvent.click(button);
  fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
  expect(current).toHaveBeenCalledTimes(2);
  expect(previous).not.toHaveBeenCalled();
});
