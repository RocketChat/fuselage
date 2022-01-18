import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react';

import { Box } from '..';
import { InputBox } from '../InputBox';

type NumberInputProps = Omit<ComponentProps<typeof Box>, 'type'>;

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

const inputType: InputType = 'number';

export const NumberInput: ForwardRefExoticComponent<NumberInputProps> =
  forwardRef(function NumberInput(props: NumberInputProps, ref) {
    return <InputBox type={inputType as InputType} ref={ref} {...props} />;
  });
