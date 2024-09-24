import type { AllHTMLAttributes, ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import Box from '../Box';

export const ToggleSwitch = forwardRef(function ToggleSwitch(
  {
    className,
    ...props
  }: ComponentProps<typeof Box> & AllHTMLAttributes<HTMLInputElement>,
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
