import type { ComponentProps, ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type TextAreaInputProps = Omit<ComponentProps<typeof InputBox>, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

export const TextAreaInput = forwardRef(function TextAreaInput(
  props: TextAreaInputProps,
  ref: Ref<HTMLTextAreaElement>
) {
  return <InputBox type='textarea' ref={ref} {...props} />;
});
