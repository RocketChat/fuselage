import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type TabsItemProps = BoxProps & {
  selected?: boolean;
  disabled?: boolean;
};

const TabsItem = forwardRef<HTMLButtonElement, TabsItemProps>(function TabsItem(
  { selected, disabled, ...props },
  ref,
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

export default TabsItem;
