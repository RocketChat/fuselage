import type { Ref } from 'react';
import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox';

type NumberInputProps = Omit<InputBoxProps, 'type'>;

/**
 * An input for numbers.
 */
export const NumberInput = forwardRef(function NumberInput(
  props: NumberInputProps,
  ref: Ref<HTMLInputElement>,
) {
  return <InputBox type='number' ref={ref} {...props} />;
});
