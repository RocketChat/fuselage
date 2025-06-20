import type { AllHTMLAttributes, ComponentProps, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import Box from '../Box';

export const ToggleSwitch = forwardRef(function ToggleSwitch(
  {
    className,
    labelChildren,
    ...props
  }: ComponentProps<typeof Box> &
    AllHTMLAttributes<HTMLInputElement> & {
      labelChildren?: ReactNode;
    },
  ref: Ref<HTMLInputElement>,
) {
  return (
    <Box is='label' className={className} rcx-toggle-switch>
      {labelChildren}

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
