import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
} from 'react';

import { Box } from '../Box';
import { InputBox } from '../InputBox';

type TextAreaInputProps = Omit<ComponentProps<typeof Box>, 'type'> & {
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

const type: InputType = 'textarea';

export const TextAreaInput: ForwardRefExoticComponent<TextAreaInputProps> =
  forwardRef(function TextAreaInput(props: TextAreaInputProps, ref) {
    return <InputBox type={type} ref={ref} {...props} />;
  });
