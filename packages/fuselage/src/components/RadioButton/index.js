import React, { forwardRef } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

const Container = Box.extend('rcx-radio-button', 'span');
const Input = Box.extend('rcx-radio-button__input', 'input');
const Fake = Box.extend('rcx-radio-button__fake', 'i');

export const RadioButton = forwardRef(function RadioButton({
  className,
  hidden,
  invisible,
  style,
  ...props
}, ref) {
  return <Container className={className} hidden={hidden} invisible={invisible} style={style}>
    <Label>
      <Input ref={ref} type='radio' {...props} />
      <Fake aria-hidden='true' />
    </Label>
  </Container>;
});

RadioButton.displayName = 'RadioButton';
