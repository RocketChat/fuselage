import React, { ComponentProps, FC } from 'react';

import { Box } from '..';
import SidebarItem from './Item';
import SidebarSection from './Section';
import SidebarTopBar from './TopBar';

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

export { default as SidebarItem } from './Item';
export * from './Item';
export { default as SidebarSection } from './Section';
export * from './Section';
export { default as SidebarTopBar } from './TopBar';
export * from './TopBar';

export * from './SidebarFooter';
