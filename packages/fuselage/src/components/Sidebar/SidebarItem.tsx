import type { IconName } from '@rocket.chat/icons';
import type { AllHTMLAttributes, ReactNode } from 'react';

import type { BoxProps } from '../Box';
import { Icon as FuselageIcon } from '../Icon';
import type { SidebarActionProps } from './SidebarActions';
import { SidebarAction, SidebarActions } from './SidebarActions';

/** @public */
export type SidebarItemProps = {
  selected?: boolean;
  highlighted?: boolean;
  clickable?: boolean;
  featured?: boolean;
  is?: BoxProps['is'];
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

/** @public */
export function SidebarItem({
  selected,
  highlighted,
  clickable,
  featured,
  is: Tag = 'div',
  children,
  ...props
}: SidebarItemProps) {
  return (
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
  );
}

type SidebarItemContainerProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

/** @public */
export const SidebarItemContainer = (props: SidebarItemContainerProps) => (
  <div
    className='rc-box rcx-box--full rcx-sidebar-item__container'
    {...props}
  />
);

type SidebarItemMenuProps = {
  children?: ReactNode;
} & AllHTMLAttributes<HTMLElement>;

/** @public */
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

/** @public */
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

/** @public */
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

/** @public */
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

/** @public */
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

/** @public */
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

/** @public */
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
  icon: IconName;
} & Omit<AllHTMLAttributes<HTMLElement>, 'name' | 'is'>;

/** @public */
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

/** @public */
export const SidebarItemAvatar = ({ ...props }: SidebarItemAvatarProps) => (
  <SidebarItemContainer>
    <div className='rc-box rcx-box--full rcx-sidebar-item__avatar' {...props} />
  </SidebarItemContainer>
);

/** @public */
export const SidebarItemActions = SidebarActions;

type SidebarItemActionProps = SidebarActionProps;

/** @public */
export const SidebarItemAction = (props: SidebarItemActionProps) => (
  <SidebarAction {...props} />
);

/** @public */
// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace SidebarItem {
  export const Menu = SidebarItemMenu;
  export const Container = SidebarItemContainer;
  export const Content = SidebarItemContent;
  export const Title = SidebarItemTitle;
  export const Subtitle = SidebarItemSubtitle;
  export const Time = SidebarItemTime;
  export const Wrapper = SidebarItemWrapper;
  export const Icon = SidebarItemIcon;
  export const Avatar = SidebarItemAvatar;
  export const Actions = SidebarItemActions;
  export const Action = SidebarItemAction;
  export const Badge = SidebarItemBadge;
}

export default SidebarItem;
