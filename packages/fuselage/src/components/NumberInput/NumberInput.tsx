import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox';

export type NumberInputProps = Omit<InputBoxProps, 'type'>;

/**
 * An input for numbers.
 */
const NumberInput = forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(props, ref) {
    return <InputBox type='number' ref={ref} {...props} />;
  },
);

export default NumberInput;
