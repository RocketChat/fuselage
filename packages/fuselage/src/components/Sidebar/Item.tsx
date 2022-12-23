import type { AllHTMLAttributes, ComponentProps, ReactNode } from 'react';
import React from 'react';

import type Box from '../Box';
import { Icon as FuselageIcon } from '../Icon';
import { SidebarAction, SidebarActions } from './SidebarActions';

type SidebarItemProps = {
  selected?: boolean;
  highlighted?: boolean;
  clickable?: boolean;
  featured?: boolean;
  is?: ComponentProps<typeof Box>['is'];
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItem = ({
  selected,
  highlighted,
  clickable,
  featured,
  is: Tag = 'div',
  children,
  ...props
}: SidebarItemProps) => (
  <Tag
    className={[
      'rc-box rcx-box--full rcx-sidebar-item',
      highlighted && 'rcx-sidebar-item--highlighted',
      clickable && 'rcx-sidebar-item--clickable',
      selected && 'rcx-sidebar-item--selected',
      featured && 'rcx-sidebar-item--featured',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <div
      className='rcx-box rcx-box--full rcx-sidebar-item__wrapper'
      children={children}
    />
  </Tag>
);

type SidebarItemContainerProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemContainer = (props: SidebarItemContainerProps) => (
  <div
    className='rc-box rcx-box--full rcx-sidebar-item__container'
    {...props}
  />
);

type SidebarItemMenuProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemMenu = (props: SidebarItemMenuProps) => (
  <div
    className='rc-box rcx-box--full rcx-box--animated rcx-sidebar-item__menu-wrapper'
    {...props}
  />
);

type SidebarItemContentProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemContent = ({
  className = '',
  ...props
}: SidebarItemContentProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__container rcx-sidebar-item__content ${className}`}
    {...props}
  />
);

type SidebarItemTitleProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemTitle = ({
  className = '',
  ...props
}: SidebarItemTitleProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__title ${className}`}
    {...props}
  />
);

type SidebarItemTimeProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemTime = ({
  className,
  ...props
}: SidebarItemTimeProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__time ${className}`}
    {...props}
  />
);

type SidebarItemBadgeProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemBadge = ({
  className,
  ...props
}: SidebarItemBadgeProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__badge ${className}`}
    {...props}
  />
);

type SidebarItemSubtitleProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemSubtitle = ({
  className,
  ...props
}: SidebarItemSubtitleProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__subtitle ${className}`}
    {...props}
  />
);

type SidebarItemWrapperProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemWrapper = ({
  className = '',
  ...props
}: SidebarItemWrapperProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__wrapper ${className}`}
    {...props}
  />
);

type SidebarItemIconProps = {
  children?: ReactNode;
  className?: string;
  highlighted?: boolean;
  icon: ComponentProps<typeof FuselageIcon>['name'];
} & Omit<AllHTMLAttributes<HTMLElement>, 'name' | 'is'>;

export const SidebarItemIcon = ({
  highlighted,
  children,
  icon,
  className: _className,
  ...props
}: SidebarItemIconProps) => (
  <div
    className={[
      'rc-box rcx-box--full rcx-sidebar-item__icon',
      highlighted && 'rcx-sidebar-item__icon--highlighted',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children || <FuselageIcon size='x16' name={icon} {...props} />}
  </div>
);

type SidebarItemAvatarProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemAvatar = ({ ...props }: SidebarItemAvatarProps) => (
  <SidebarItemContainer>
    <div className='rc-box rcx-box--full rcx-sidebar-item__avatar' {...props} />
  </SidebarItemContainer>
);

export const SidebarItemActions = SidebarActions;

type SidebarItemActionProps = ComponentProps<typeof SidebarAction>;

export const SidebarItemAction = (props: SidebarItemActionProps) => (
  <SidebarAction {...props} />
);

export default Object.assign(SidebarItem, {
  Menu: SidebarItemMenu,
  Container: SidebarItemContainer,
  Content: SidebarItemContent,
  Title: SidebarItemTitle,
  Subtitle: SidebarItemSubtitle,
  Time: SidebarItemTime,
  Wrapper: SidebarItemWrapper,
  Icon: SidebarItemIcon,
  Avatar: SidebarItemAvatar,
  Actions: SidebarItemActions,
  Action: SidebarItemAction,
  Badge: SidebarItemBadge,
});
