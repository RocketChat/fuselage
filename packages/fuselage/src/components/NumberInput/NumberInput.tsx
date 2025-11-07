import type { ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox/index.js';

type NumberInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

/**
 * An input for numbers.
 */
export const NumberInput = forwardRef(function NumberInput(
  props: NumberInputProps,
  ref: Ref<HTMLInputElement>,
) {
  return <InputBox type='number' ref={ref} {...props} />;
});
