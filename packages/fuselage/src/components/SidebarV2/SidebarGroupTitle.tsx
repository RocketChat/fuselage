import type { AriaAttributes, HTMLAttributes, ReactNode } from 'react';

import { Chevron } from '../Chevron';

import { SidebarCollapseGroupMenu } from './SidebarCollapseGroupMenu';

export type SidebarGroupTitleProps = {
  expanded?: boolean;
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
  ...props
}: SidebarGroupTitleProps) => (
  <div
    className={[
      'rcx-box rcx-box--full',
      'rcx-sidebar-v2-collapse-group__bar rcx-box--animated',
    ]
      .filter(Boolean)
      .join(' ')}
    {...barProps}
    {...props}
  >
    {expanded !== undefined && <Chevron size='x20' right={!expanded} />}
    {title && (
      <h4
        className='rcx-box rcx-box--full rcx-sidebar-v2-collapse-group__title'
        id={titleId}
      >
        {title}
      </h4>
    )}
    {!expanded && badge && badge}
    {menu && <SidebarCollapseGroupMenu>{menu}</SidebarCollapseGroupMenu>}
  </div>
);
