import type { ReactNode, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

export type TextInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

export const TextInput = forwardRef(function TextInput(
  props: TextInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return <InputBox type='text' ref={ref} {...props} />;
});
