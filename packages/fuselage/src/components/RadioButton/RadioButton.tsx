import type { AllHTMLAttributes, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type RadioButtonProps = BoxProps & AllHTMLAttributes<HTMLInputElement>;

export const RadioButton = forwardRef(function RadioButton(
  { className, ...props }: RadioButtonProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <Box is='label' className={className} rcx-radio-button>
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
