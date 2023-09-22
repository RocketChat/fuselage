import type { AllHTMLAttributes, ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';
import { Label } from '../Label';

type RadioButtonProps = ComponentProps<typeof Box> &
  AllHTMLAttributes<HTMLInputElement>;

export const RadioButton = forwardRef(function RadioButton(
  { className, ...props }: RadioButtonProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <Box is={Label} className={className} rcx-radio-button>
      <Box
        is='input'
        rcx-radio-button__input
        type='radio'
        ref={ref}
        {...props}
      />
      <Box is='i' rcx-radio-button__fake aria-hidden='true' />
    </Box>
  );
});
