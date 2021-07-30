import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';

type SidebarProps = ComponentProps<typeof Box>;
type SidebarTopBarProps = ComponentProps<typeof Box>;
type SidebarItemProps = ComponentProps<typeof Box>;
type SidebarSectionProps = ComponentProps<typeof Box>;

export const Sidebar: ForwardRefExoticComponent<SidebarProps> & {
  TopBar: ForwardRefExoticComponent<SidebarTopBarProps>;
  Item: ForwardRefExoticComponent<SidebarItemProps>;
  Section: ForwardRefExoticComponent<SidebarSectionProps>;
};
