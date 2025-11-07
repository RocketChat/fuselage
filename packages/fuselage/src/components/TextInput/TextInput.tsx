import type { ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox/index.js';

export type TextInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

/**
 * An input for any kind of single-line text.
 */
export const TextInput = forwardRef(function TextInput(
  props: TextInputProps,
  ref: Ref<HTMLInputElement>,
) {
  return <InputBox type='text' ref={ref} {...props} />;
});
