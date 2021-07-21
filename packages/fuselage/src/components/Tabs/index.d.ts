import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type TabsProps = ComponentProps<typeof Box>;

export const Tabs: ForwardRefExoticComponent<TabsProps> & {
  Item: ForwardRefExoticComponent<TabsItemProps>;
};

type TabsItemProps = ComponentProps<typeof Box> & {
  selected?: boolean;
  disabled?: boolean;
};
export const TabsItem: ForwardRefExoticComponent<TabsItemProps>;
