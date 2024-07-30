import type { ReactNode, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

type TextAreaInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

export const TextAreaInput = forwardRef(function TextAreaInput(
  props: TextAreaInputProps,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  return <InputBox type='textarea' ref={ref} {...props} />;
});
