import type { ComponentProps, Ref } from 'react';
import React, { useMemo, forwardRef } from 'react';

import { Box } from '../Box';

type MultiSelectContainerProps = Omit<
  ComponentProps<typeof Box>,
  'disabled' | 'invalid' | 'className'
> & {
  disabled: boolean;
  invalid: boolean;
};

const MultiSelectContainer = forwardRef(function MultiSelectContainer(
  { disabled, invalid, ...props }: MultiSelectContainerProps,
  ref: Ref<Element>
) {
  const stateClassName = useMemo(
    () =>
      [invalid && 'invalid', disabled && 'disabled'].filter(Boolean).join(' '),
    [invalid, disabled]
  );

  return (
    <Box
      ref={ref}
      rcx-multi-select
      role='combobox'
      className={stateClassName}
      position='relative'
      alignItems='center'
      {...props}
    />
  );
});

export default MultiSelectContainer;
