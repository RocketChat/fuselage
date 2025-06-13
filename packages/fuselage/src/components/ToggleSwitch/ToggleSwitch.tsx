import type { AllHTMLAttributes, ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';
import { VisuallyHidden } from 'react-aria';

import Box from '../Box';
import { useFieldWrappedByInputLabel } from '../Field/Field';

// wrap a hidden text inside the label
// have a specific component with the label element to wrap the toggle and the visual label
// try to juggle id and for attribute to make it work with the label element
// fake text inside the label.

export const ToggleSwitch = forwardRef(function ToggleSwitch(
  {
    className,
    ...props
  }: ComponentProps<typeof Box> & AllHTMLAttributes<HTMLInputElement>,
  ref: Ref<HTMLInputElement>,
) {
  const [label, toggleProps] = useFieldWrappedByInputLabel();
  return (
    <Box is='label' className={className} rcx-toggle-switch>
      {!!label && <VisuallyHidden>{label}</VisuallyHidden>}
      <Box
        is='input'
        ref={ref}
        rcx-toggle-switch__input
        type='checkbox'
        {...toggleProps}
        {...props}
      />
      <Box is='i' rcx-toggle-switch__fake aria-hidden='true' />
    </Box>
  );
});
