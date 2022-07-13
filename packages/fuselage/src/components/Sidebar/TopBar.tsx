import type { ComponentProps, ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';
import { Divider } from '../Divider';
import { SidebarAction, SidebarActions } from './SidebarActions';

const Avatar: { size: 'x24' } = { size: 'x24' };

type TopBarProps = {
  children?: ReactNode;
  className?: string;
};

const TopBar = ({ className, ...props }: TopBarProps) => (
  <div
    className={['rc-box rc-box--full rcx-sidebar-topbar', className]
      .filter(Boolean)
      .join(' ')}
    {...props}
  />
);

type TopBarWrapperProps = {
  children?: ReactNode;
};

const TopBarWrapper = ({ children }: TopBarWrapperProps) => (
  <div
    className='rc-box rc-box--full rcx-sidebar-topbar__wrapper'
    children={children}
  />
);

type TopBarToolBoxProps = {
  children?: ReactNode;
  className?: string;
};

export const TopBarToolBox = ({
  children,
  className,
  ...props
}: TopBarToolBoxProps) => (
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

type TopBarSectionProps = {
  children?: React.ReactNode;
  className?: string;
};

export const TopBarSection = ({
  className,
  children,
  ...props
}: TopBarSectionProps) => (
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

type TopBarActionProps = ComponentProps<typeof SidebarAction>;

export const TopBarAction = forwardRef(function TopBarAction(
  props: TopBarActionProps,
  ref: Ref<any>
) {
  return <SidebarAction ref={ref} {...props} />;
});

export const TopBarDivider = () => <Divider mbs='neg-x2' mbe={0} />;

type TopBarTitleProps = {
  children?: ReactNode;
};

export const TopBarTitle = (props: TopBarTitleProps) => (
  <Box rcx-sidebar-top-bar__title withTruncatedText {...props} />
);

export default Object.assign(TopBar, {
  Section: TopBarSection,
  ToolBox: TopBarToolBox,
  Wrapper: TopBarWrapper,
  Avatar: TopBarAvatar,
  Actions: TopBarActions,
  Action: TopBarAction,
  Divider: TopBarDivider,
  Title: TopBarTitle,
});
