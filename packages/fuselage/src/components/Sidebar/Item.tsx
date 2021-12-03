import React, { ComponentProps, FC } from 'react';

import { Box } from '..';
import { Icon as FuselageIcon } from '../Icon';
import { SidebarAction, SidebarActions } from './SidebarActions';

export const SidebarItem: FC<{
  selected?: boolean;
  highlighted?: boolean;
  clickable?: boolean;
  is?: ComponentProps<typeof Box>['is'];
}> = ({
  selected,
  highlighted,
  clickable,
  is: Tag = 'div',
  children,
  ...props
}) => (
  <Tag
    className={[
      'rc-box rcx-box--full rcx-sidebar-item',
      highlighted && 'rcx-sidebar-item--highlighted',
      clickable && 'rcx-sidebar-item--clickable',
      selected && 'rcx-sidebar-item--selected',
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

export const SidebarItemContainer: FC = (props) => (
  <div
    className='rc-box rcx-box--full rcx-sidebar-item__container'
    {...props}
  />
);

export const SidebarItemMenu: FC = (props) => (
  <div
    className='rc-box rcx-box--full rcx-box--animated rcx-sidebar-item__menu-wrapper'
    {...props}
  />
);

export const SidebarItemContent: FC<{ className?: string }> = ({
  className = '',
  ...props
}) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__container rcx-sidebar-item__content ${className}`}
    {...props}
  />
);

export const SidebarItemTitle: FC<{ className?: string }> = ({
  className = '',
  ...props
}) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__title ${className}`}
    {...props}
  />
);

export const SidebarItemTime: FC<{ className: string }> = ({
  className,
  ...props
}) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__time ${className}`}
    {...props}
  />
);

export const SidebarItemBadge: FC<{ className: string }> = ({
  className,
  ...props
}) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__badge ${className}`}
    {...props}
  />
);

export const SidebarItemSubtitle: FC<{ className: string }> = ({
  className,
  ...props
}) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__subtitle ${className}`}
    {...props}
  />
);

export const SidebarItemWrapper: FC<{ className?: string }> = ({
  className = '',
  ...props
}) => (
  <div
    className={`rc-box rcx-box--full rcx-sidebar-item__wrapper ${className}`}
    {...props}
  />
);

export const SidebarItemIcon: FC<{
  className: string;
  highlighted?: boolean;
  icon: ComponentProps<typeof FuselageIcon>['name'];
}> = ({ highlighted, children, className, ...props }) => (
  <div
    className={[
      'rc-box rcx-box--full rcx-sidebar-item__icon',
      highlighted && 'rcx-sidebar-item__icon--highlighted',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    {children || <FuselageIcon size='x16' {...props} />}
  </div>
);

export const SidebarItemAvatar: FC = ({ ...props }) => (
  <SidebarItemContainer>
    <div className='rc-box rcx-box--full rcx-sidebar-item__avatar' {...props} />
  </SidebarItemContainer>
);

export const SidebarItemActions = SidebarActions;

export const SidebarItemAction: FC<ComponentProps<typeof SidebarAction>> = (
  props
) => <SidebarAction {...props} />;

Object.assign(SidebarItem, {
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

export default SidebarItem;
