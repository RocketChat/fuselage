import type { ComponentProps } from 'react';

import Box from '../Box/index.js';

import SidebarItem from './Item.js';
import SidebarSection from './Section.js';
import { SidebarBanner } from './SidebarBanner.js';
import { SidebarDivider } from './SidebarDivider.js';
import SidebarTopBar from './TopBar/index.js';

type SidebarProps = ComponentProps<typeof Box>;

export const Sidebar = (props: SidebarProps) => <Box rcx-sidebar {...props} />;

export default Object.assign(Sidebar, {
  TopBar: SidebarTopBar,
  Item: SidebarItem,
  Section: SidebarSection,
  Divider: SidebarDivider,
  Banner: SidebarBanner,
});

export { default as SidebarItem } from './Item.js';
export * from './Item.js';
export { default as SidebarSection } from './Section.js';
export * from './Section.js';
export { default as SidebarTopBar } from './TopBar/index.js';
export * from './TopBar/index.js';
export * from './SidebarBanner.js';
export * from './SidebarFooter.js';

export { SidebarDivider };
