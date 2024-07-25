import type { ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

export type TextInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

export const TextInput = forwardRef(function TextInput(
  props: TextInputProps,
  ref: Ref<HTMLInputElement>
) {
  return <InputBox type='text' ref={ref} {...props} />;
});
