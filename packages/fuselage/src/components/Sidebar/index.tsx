import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';
import SidebarItem from './Item';
import SidebarSection from './Section';
import SidebarTopBar from './TopBar';

type SidebarProps = ComponentProps<typeof Box>;

export const Sidebar = (props: SidebarProps) => <Box rcx-sidebar {...props} />;

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
