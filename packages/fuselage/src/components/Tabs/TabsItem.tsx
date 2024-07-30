import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type TabsItemProps = BoxProps & {
  selected?: boolean;
  disabled?: boolean;
};

export const TabsItem = forwardRef(function TabsItem(
  { selected, disabled, ...props }: TabsItemProps,
  ref: ForwardedRef<HTMLButtonElement>
) {
  return (
    <Box
      is='button'
      rcx-tabs__item
      rcx-tabs__item--selected={selected}
      rcx-tabs__item--disabled={disabled}
      rcx-tabs__item--selected--disabled={selected && disabled}
      aria-selected={selected ? 'true' : 'false'}
      ref={ref}
      role='tab'
      {...props}
    />
  );
});
