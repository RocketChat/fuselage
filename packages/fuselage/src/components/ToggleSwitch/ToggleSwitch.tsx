import type { ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import Box, { type BoxProps } from '../Box/index.js';

export interface ToggleSwitchProps extends BoxProps {
  labelChildren?: ReactNode;
}
export const ToggleSwitch = forwardRef(function ToggleSwitch(
  { className, labelChildren, ...props }: ToggleSwitchProps,
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
