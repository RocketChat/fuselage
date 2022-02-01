import React, {
  ComponentProps,
  forwardRef,
  ForwardRefExoticComponent,
} from 'react';

import { Box } from '../Box';

type TabsItemProps = ComponentProps<typeof Box> & {
  selected?: boolean;
  disabled?: boolean;
};

export const TabsItem: ForwardRefExoticComponent<TabsItemProps> = forwardRef(
  function TabsItem({ selected, disabled, ...props }: TabsItemProps, ref) {
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
  }
);
