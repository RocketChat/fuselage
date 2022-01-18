import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
} from 'react';

import { Box } from '..';
import { InputBox } from '../InputBox';

export type TextInputProps = Omit<ComponentProps<typeof Box>, 'type'> & {
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

const type: InputType = 'text';

export const TextInput: ForwardRefExoticComponent<TextInputProps> = forwardRef(
  function TextInput(props: TextInputProps, ref) {
    return <InputBox type={type} ref={ref} {...props} />;
  }
);
