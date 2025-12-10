import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox';

type NumberInputProps = Omit<InputBoxProps, 'type'>;

/**
 * An input for numbers.
 */
export const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(props, ref) {
    return <InputBox type='number' ref={ref} {...props} />;
  },
);
