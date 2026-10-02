import { fireEvent, render, screen } from '@testing-library/react';
import { StrictMode } from 'react';

import { useFieldLabel, useFieldWrappedByInputLabel } from './FieldContext';
import FieldProvider from './FieldProvider';

function FieldControl({ inputKey = 'input' }: { inputKey?: string }) {
  const [labelRef] = useFieldLabel();
  const [, , inputRef] = useFieldWrappedByInputLabel();
  return (
    <>
      <span ref={labelRef}>Toggle field</span>
      <input
        key={inputKey}
        ref={inputRef}
        type='checkbox'
        aria-label='Choice'
      />
    </>
  );
}

it('activates the field only once when mounted in StrictMode', () => {
  render(
    <StrictMode>
      <FieldProvider>
        <FieldControl />
      </FieldProvider>
    </StrictMode>,
  );

  fireEvent.click(screen.getByText('Toggle field'));
  expect(screen.getByRole('checkbox')).toBeChecked();
});

it('does not activate a detached input after it is replaced', () => {
  const { rerender } = render(
    <FieldProvider>
      <FieldControl inputKey='first' />
    </FieldProvider>,
  );
  const previousInput = screen.getByRole('checkbox');
  const click = jest.spyOn(previousInput, 'click');

  rerender(
    <FieldProvider>
      <FieldControl inputKey='second' />
    </FieldProvider>,
  );
  fireEvent.click(screen.getByText('Toggle field'));

  expect(screen.getByRole('checkbox')).toBeChecked();
  expect(click).not.toHaveBeenCalled();
});
