import type { AllHTMLAttributes, Ref } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type ToggleSwitchProps = BoxProps & AllHTMLAttributes<HTMLInputElement>;

export const ToggleSwitch = forwardRef(function ToggleSwitch(
  { className, ...props }: ToggleSwitchProps,
  ref: Ref<HTMLInputElement>
) {
  return (
    <Box is='label' className={className} rcx-toggle-switch>
      <Box
        is='input'
        ref={ref}
        rcx-toggle-switch__input
        type='checkbox'
        {...props}
      />
      <Box is='i' rcx-toggle-switch__fake aria-hidden='true' />
    </Box>
  );
});
