import React, { ComponentProps, forwardRef, ReactNode, Ref } from 'react';

import { Box } from '../Box';
import { InputBox } from '../InputBox';

type TextAreaInputProps = Omit<ComponentProps<typeof Box>, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

export const TextAreaInput = forwardRef(function TextAreaInput(
  props: TextAreaInputProps,
  ref: Ref<HTMLTextAreaElement>
) {
  return <InputBox type='textarea' ref={ref} {...props} />;
});
