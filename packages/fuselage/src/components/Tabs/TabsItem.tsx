import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

/** @public */
export type TabsItemProps = BoxProps & {
  selected?: boolean;
  disabled?: boolean;
};

/** @public */
const TabsItem = forwardRef(function TabsItem(
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

export default TabsItem;
