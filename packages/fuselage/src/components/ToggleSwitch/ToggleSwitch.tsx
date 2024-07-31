import type { AllHTMLAttributes, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

/** @public */
export type ToggleSwitchProps = BoxProps & AllHTMLAttributes<HTMLInputElement>;

/** @public */
const ToggleSwitch = forwardRef(function ToggleSwitch(
  { className, ...props }: ToggleSwitchProps,
  ref: ForwardedRef<HTMLInputElement>
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

export default ToggleSwitch;
