import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';

type TabsItemProps = ComponentProps<typeof Box> & {
  selected?: boolean;
  disabled?: boolean;
  underline?: boolean;
};

export const TabsItem = forwardRef(function TabsItem(
  { selected, disabled, underline, ...props }: TabsItemProps,
  ref: Ref<HTMLButtonElement>
) {
  return (
    <Box
      is='button'
      rcx-tabs__item
      rcx-tabs__item--selected={selected}
      rcx-tabs__item--disabled={disabled}
      rcx-tabs__item--selected--disabled={selected && disabled}
      rcx-tabs__item--underline={underline}
      aria-selected={selected ? 'true' : 'false'}
      ref={ref}
      role='tab'
      {...props}
    />
  );
});
