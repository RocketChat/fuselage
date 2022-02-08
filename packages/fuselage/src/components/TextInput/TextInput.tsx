import React, { ComponentProps, forwardRef, ReactNode, Ref } from 'react';

import { InputBox } from '../InputBox';

export type TextInputProps = Omit<ComponentProps<typeof InputBox>, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

export const TextInput = forwardRef(function TextInput(
  props: TextInputProps,
  ref: Ref<HTMLInputElement>
) {
  return <InputBox type='text' ref={ref} {...props} />;
});
