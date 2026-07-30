import type { AllHTMLAttributes, ReactNode } from 'react';

import type { BoxProps } from '../Box';
import type { IconProps } from '../Icon';
import { Icon as FuselageIcon } from '../Icon';

import type { SidebarActionProps } from './SidebarActions';
import { SidebarAction, SidebarActions } from './SidebarActions';

/**
 * @deprecated Use the `SidebarV2` component family instead.
 */
export type SidebarItemContainerProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

/**
 * @deprecated Use the `SidebarV2` component family instead.
 */
export const SidebarItemContainer = (props: SidebarItemContainerProps) => (
  <div
    className='rc-box rcx-box--full rcx-sidebar-item__container'
    {...props}
  />
);

/**
 * @deprecated Use `SidebarV2ItemMenu` instead.
 */
export type SidebarItemMenuProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

/**
 * @deprecated Use `SidebarV2ItemMenu` instead.
 */
export const SidebarItemMenu = (props: SidebarItemMenuProps) => (
  <div
    className='rc-box rcx-box--full rcx-box--animated rcx-sidebar-item__menu-wrapper'
    {...props}
  />
);

/**
 * @deprecated Use `SidebarV2ItemContent` instead.
 */
export type SidebarItemContentProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

/**
 * @deprecated Use `SidebarV2ItemContent` instead.
 */
export const SidebarItemContent = ({
  className = '',
  ...props
}: SidebarItemContentProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__container rcx-sidebar-item__content ${className}`}
    {...props}
  />
);

/**
 * @deprecated Use `SidebarV2ItemTitle` instead.
 */
export type SidebarItemTitleProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

/**
 * @deprecated Use `SidebarV2ItemTitle` instead.
 */
export const SidebarItemTitle = ({
  className = '',
  ...props
}: SidebarItemTitleProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__title ${className}`}
    {...props}
  />
);

/**
 * @deprecated Use `SidebarV2ItemTimestamp` instead.
 */
export type SidebarItemTimeProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

/**
 * @deprecated Use `SidebarV2ItemTimestamp` instead.
 */
export const SidebarItemTime = ({
  className,
  ...props
}: SidebarItemTimeProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__time ${className}`}
    {...props}
  />
);

/**
 * @deprecated Use `SidebarV2ItemBadge` instead.
 */
export type SidebarItemBadgeProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

/**
 * @deprecated Use `SidebarV2ItemBadge` instead.
 */
export const SidebarItemBadge = ({
  className,
  ...props
}: SidebarItemBadgeProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__badge ${className}`}
    {...props}
  />
);

/**
 * @deprecated Use the `SidebarV2` component family instead.
 */
export type SidebarItemSubtitleProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

/**
 * @deprecated Use the `SidebarV2` component family instead.
 */
export const SidebarItemSubtitle = ({
  className,
  ...props
}: SidebarItemSubtitleProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__subtitle ${className}`}
    {...props}
  />
);

/**
 * @deprecated Use the `SidebarV2` component family instead.
 */
export type SidebarItemWrapperProps = {
  children?: ReactNode;
  className?: string;
} & AllHTMLAttributes<HTMLElement>;

/**
 * @deprecated Use the `SidebarV2` component family instead.
 */
export const SidebarItemWrapper = ({
  className = '',
  ...props
}: SidebarItemWrapperProps) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__wrapper ${className}`}
    {...props}
  />
);

/**
 * @deprecated Use `SidebarV2ItemIconProps` instead.
 */
export type SidebarItemIconProps = {
  children?: ReactNode;
  className?: string;
  highlighted?: boolean;
  icon: IconProps['name'];
} & Omit<AllHTMLAttributes<HTMLElement>, 'name' | 'is'>;

/**
 * @deprecated Use `SidebarV2ItemIcon` instead.
 */
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

/**
 * @deprecated Use `SidebarV2ItemAvatarWrapper` instead.
 */
export type SidebarItemAvatarProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

/**
 * @deprecated Use `SidebarV2ItemAvatarWrapper` instead.
 */
export const SidebarItemAvatar = ({ ...props }: SidebarItemAvatarProps) => (
  <SidebarItemContainer>
    <div className='rc-box rcx-box--full rcx-sidebar-item__avatar' {...props} />
  </SidebarItemContainer>
);

/**
 * @deprecated Use `SidebarV2ItemMenu` instead.
 */
export const SidebarItemActions = SidebarActions;

/**
 * @deprecated Use `SidebarV2ItemAction` instead.
 */
export type SidebarItemActionProps = SidebarActionProps;

/**
 * @deprecated Use `SidebarV2ItemAction` instead.
 */
export const SidebarItemAction = (props: SidebarItemActionProps) => (
  <SidebarAction {...props} />
);

/**
 * @deprecated Use `SidebarV2ItemProps` instead.
 */
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
 *
 * @deprecated Use `SidebarV2Item` instead.
 */
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
      (clickable || Tag === 'a') && 'rcx-sidebar-item--clickable',
      selected && 'rcx-sidebar-item--selected',
      featured && 'rcx-sidebar-item--featured',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <div className='rcx-box rcx-box--full rcx-sidebar-item__wrapper'>
      {children}
    </div>
  </Tag>
);
