import type { ComponentProps, Ref } from 'react';
import React, { useMemo, forwardRef } from 'react';

import { Box } from '../Box';

type SelectContainerProps = Omit<
  ComponentProps<typeof Box>,
  'disabled' | 'invalid' | 'className'
> & {
  disabled: boolean;
  invalid: boolean;
};

const SelectContainer = forwardRef(function SelectContainer(
  { disabled, invalid, ...props }: SelectContainerProps,
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
      rcx-select
      role='combobox'
      className={stateClassName}
      {...props}
    />
  );
});

export default SelectContainer;
