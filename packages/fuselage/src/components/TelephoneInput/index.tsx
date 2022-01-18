import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
} from 'react';

import { Box } from '..';
import { InputBox } from '../InputBox';

type TelephoneInputProps = Omit<ComponentProps<typeof Box>, 'type'> & {
  addon?: ReactNode;
  input?: ReactNode;
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

const type: InputType = 'tel';

export const TelephoneInput: ForwardRefExoticComponent<TelephoneInputProps> =
  forwardRef(function TelephoneInput(props: TelephoneInputProps, ref) {
    return <InputBox type={type} ref={ref} {...props} />;
  });
