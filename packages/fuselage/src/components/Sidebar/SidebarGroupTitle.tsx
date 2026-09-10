import type { AriaAttributes, HTMLAttributes, ReactNode } from 'react';

import { Chevron } from '../Chevron';

export type SidebarGroupTitleProps = {
  expanded?: boolean;
  empty?: boolean;
  title?: string;
  titleId?: string;
  badge?: ReactNode;
  menu?: ReactNode;
  barProps?: AriaAttributes;
} & HTMLAttributes<HTMLDivElement>;

export const SidebarGroupTitle = ({
  title,
  titleId,
  badge,
  menu,
  barProps,
  expanded,
  empty,
  role,
  ...props
}: SidebarGroupTitleProps) => (
  <div
    className={[
      'rcx-box rcx-box--full',
      'rcx-sidebar-collapse-group__bar',
      !expanded && empty && 'rcx-sidebar-collapse-group__bar--empty',
      !expanded && badge && 'rcx-sidebar-collapse-group__bar--unread',
      'rcx-box--animated',
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <div
      className='rcx-box rcx-sidebar-collapse-group__bar-button'
      role={role}
      {...barProps}
    >
      {expanded !== undefined && <Chevron size='x20' right={!expanded} />}
      {title && (
        <h4
          className='rcx-box rcx-box--full rcx-sidebar-collapse-group__title'
          id={titleId}
        >
          {title}
        </h4>
      )}
      {!expanded && badge && badge}
    </div>
    {menu}
  </div>
);
