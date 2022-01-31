import React, { ComponentProps, FC } from 'react';

import { SidebarTopBar, SidebarItem, SidebarSection } from '.';
import { Box } from '..';

export const Sidebar: FC<ComponentProps<typeof Box>> & {
  TopBar?: typeof SidebarTopBar;
  Item?: typeof SidebarItem;
  Section?: typeof SidebarSection;
} = (props) => <Box rcx-sidebar {...props} />;

export default Object.assign(Sidebar, {
  TopBar: SidebarTopBar,
  Item: SidebarItem,
  Section: SidebarSection,
});
