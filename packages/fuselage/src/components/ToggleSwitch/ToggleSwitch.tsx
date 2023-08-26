import type { AllHTMLAttributes, ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';
import { Label } from '../Label';

export const ToggleSwitch = forwardRef(function ToggleSwitch(
  props: ComponentProps<typeof Box> & AllHTMLAttributes<HTMLInputElement>,
  ref: Ref<HTMLInputElement>
) {
  return (
    <Box is={Label} rcx-toggle-switch>
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
