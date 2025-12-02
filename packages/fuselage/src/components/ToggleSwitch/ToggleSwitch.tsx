import type { AllHTMLAttributes, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type ToggleSwitchProps = BoxProps &
  AllHTMLAttributes<HTMLInputElement> & {
    labelChildren?: ReactNode;
  };

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
