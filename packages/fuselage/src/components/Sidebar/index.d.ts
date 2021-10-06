import { ComponentProps, ForwardRefExoticComponent } from 'react';

import { Box } from '../Box';
import { ActionButton } from '../Button';

type SidebarProps = ComponentProps<typeof Box>;
type SidebarTopBarProps = ComponentProps<typeof Box>;
type SidebarTopBarActionProps = ComponentProps<typeof ActionButton>;
type SidebarItemProps = ComponentProps<typeof Box>;
type SidebarSectionProps = ComponentProps<typeof Box>;

export const Sidebar: ForwardRefExoticComponent<SidebarProps> & {
  TopBar: ForwardRefExoticComponent<SidebarTopBarProps> & {
    Wrapper: ForwardRefExoticComponent<SidebarTopBarProps>;
    Avatar: { size: string };
    Actions: ForwardRefExoticComponent<SidebarTopBarProps>;
    Action: ForwardRefExoticComponent<SidebarTopBarActionProps>;
    Divider: ForwardRefExoticComponent<SidebarTopBarProps>;
    Title: ForwardRefExoticComponent<SidebarTopBarProps>;
    ToolBox: ForwardRefExoticComponent<SidebarTopBarProps>;
    Section: ForwardRefExoticComponent<SidebarTopBarProps>;
  };
  Item: ForwardRefExoticComponent<SidebarItemProps> & {
    Menu: ForwardRefExoticComponent<SidebarItemProps>;
    Container: ForwardRefExoticComponent<SidebarItemProps>;
    Content: ForwardRefExoticComponent<SidebarItemProps>;
    Title: ForwardRefExoticComponent<SidebarItemProps>;
    Subtitle: ForwardRefExoticComponent<SidebarItemProps>;
    Time: ForwardRefExoticComponent<SidebarItemProps>;
    Wrapper: ForwardRefExoticComponent<SidebarItemProps>;
    Icon: ForwardRefExoticComponent<SidebarItemProps>;
    Avatar: ForwardRefExoticComponent<SidebarItemProps>;
    Actions: ForwardRefExoticComponent<SidebarItemProps>;
    Action: ForwardRefExoticComponent<SidebarItemProps>;
    Badge: ForwardRefExoticComponent<SidebarItemProps>;
  };
  Section: ForwardRefExoticComponent<SidebarSectionProps> & {
    Title: ForwardRefExoticComponent<SidebarSectionProps>;
  };
};
