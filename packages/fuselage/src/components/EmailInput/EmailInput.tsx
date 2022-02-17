import type { ComponentProps, ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type EmailInputProps = Omit<ComponentProps<typeof InputBox>, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

// Import from InputBox once it's converted to tsx
type InputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'
  | 'textarea'
  | 'select';

const type: InputType = 'email';

export const EmailInput = forwardRef(function EmailInput(
  props: EmailInputProps,
  ref: Ref<HTMLElement>
) {
  return <InputBox type={type} ref={ref} {...props} />;
});
