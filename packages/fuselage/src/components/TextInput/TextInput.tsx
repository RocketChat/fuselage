import type { ReactNode, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

/** @public */
export type TextInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

/**
 * An input for any kind of single-line text.
 * @public
 */
const TextInput = forwardRef(function TextInput(
  props: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return <InputBox type='text' ref={ref} {...props} />;
});

export default TextInput;
