import type { AllHTMLAttributes, ReactNode } from 'react';

import type { BoxProps } from '../Box';
import type { IconProps } from '../Icon';
import { Icon as FuselageIcon } from '../Icon';

import type { SidebarActionProps } from './SidebarActions';
import { SidebarAction, SidebarActions } from './SidebarActions';

export type SidebarItemContainerProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemContainer = (props: SidebarItemContainerProps) => (
  <div
    className='rc-box rcx-box--full rcx-sidebar-item__container'
    {...props}
  />
);

export type SidebarItemMenuProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemMenu = (props: SidebarItemMenuProps) => (
  <div
    className='rc-box rcx-box--full rcx-box--animated rcx-sidebar-item__menu-wrapper'
    {...props}
  />
);

export type SidebarItemContentProps = {
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

export type SidebarItemTitleProps = {
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

export type SidebarItemTimeProps = {
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

export type SidebarItemBadgeProps = {
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

export type SidebarItemSubtitleProps = {
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

export type SidebarItemWrapperProps = {
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

export type SidebarItemIconProps = {
  children?: ReactNode;
  className?: string;
  highlighted?: boolean;
  icon: IconProps['name'];
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

export type SidebarItemAvatarProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

export const SidebarItemAvatar = ({ ...props }: SidebarItemAvatarProps) => (
  <SidebarItemContainer>
    <div className='rc-box rcx-box--full rcx-sidebar-item__avatar' {...props} />
  </SidebarItemContainer>
);

export const SidebarItemActions = SidebarActions;

export type SidebarItemActionProps = SidebarActionProps;

export const SidebarItemAction = (props: SidebarItemActionProps) => (
  <SidebarAction {...props} />
);

export type SidebarItemProps = {
  selected?: boolean;
  highlighted?: boolean;
  clickable?: boolean;
  featured?: boolean;
  is?: BoxProps['is'];
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

/**
 * Item component to be used inside Sidebar.
 */
export const SidebarItem = Object.assign(
  ({
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
        (clickable || Tag === 'a') && 'rcx-sidebar-item--clickable',
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
  ),
  {
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
  },
);
