import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';
import { Divider } from '../Divider';
import { SidebarAction, SidebarActions } from './SidebarActions';

const Avatar = { size: 'x24' };

const TopBar: FC<{ className: string }> & {
  Section: typeof TopBarSection;
  ToolBox: typeof TopBarToolBox;
  Avatar: typeof TopBarAvatar;
  Actions: typeof TopBarActions;
  Action: typeof TopBarAction;
  Divider: typeof TopBarDivider;
  Title: typeof TopBarTitle;
  Wrapper: typeof TopBarWrapper;
} = ({ className, ...props }) => (
  <div
    className={['rc-box rc-box--full rcx-sidebar-topbar', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);

const TopBarWrapper: FC = ({ children }) => (
  <div
    className='rc-box rc-box--full rcx-sidebar-topbar__wrapper'
    children={children}
  />
);

export const TopBarToolBox: FC<{ className?: string }> = ({
  children,
  className,
  ...props
}) => (
  <TopBar
    className={['rcx-sidebar-topbar--toolbox', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <TopBarWrapper children={children} />
    <TopBarDivider />
  </TopBar>
);

export const TopBarSection: FC<{ className: string }> = ({
  className,
  children,
  ...props
}) => (
  <TopBar
    className={['rcx-sidebar-topbar--section', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <TopBarWrapper children={children} />
    <TopBarDivider />
  </TopBar>
);

export const TopBarAvatar = Avatar;
export const TopBarActions = SidebarActions;
export const TopBarAction: FC<ComponentProps<typeof SidebarAction>> = (
  props
) => <SidebarAction ghost {...props} />;

export const TopBarDivider: FC = () => <Divider mbs='neg-x2' mbe={0} />;

export const TopBarTitle: FC = (props) => (
  <Box rcx-sidebar-top-bar__title withTruncatedText {...props} />
);

TopBar.Section = TopBarSection;
TopBar.ToolBox = TopBarToolBox;
TopBar.Wrapper = TopBarWrapper;
TopBar.Avatar = TopBarAvatar;
TopBar.Actions = TopBarActions;
TopBar.Action = TopBarAction;
TopBar.Divider = TopBarDivider;
TopBar.Title = TopBarTitle;
TopBar.Wrapper = TopBarWrapper;

export default TopBar;
