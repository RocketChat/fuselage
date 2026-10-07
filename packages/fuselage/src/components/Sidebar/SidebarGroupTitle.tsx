import type { AriaAttributes, HTMLAttributes, ReactNode } from 'react';

import { cx } from '../../helpers/composeClassNames';
import { Chevron } from '../Chevron';
import { ItemGroupHeader, ItemGroupTitle } from '../Item';

export type SidebarGroupTitleProps = {
  expanded?: boolean;
  title?: string;
  titleId?: string;
  badge?: ReactNode;
  menu?: ReactNode;
  barProps?: AriaAttributes;
} & HTMLAttributes<HTMLDivElement>;

/**
 * The header of a sidebar group. It renders an `ItemGroupHeader`, so its menu reveals on hover like a row's.
 */
export const SidebarGroupTitle = ({
  title,
  titleId,
  badge,
  menu,
  barProps,
  expanded,
  role,
  className,
  ...props
}: SidebarGroupTitleProps) => (
  <ItemGroupHeader
    {...(props as Omit<HTMLAttributes<HTMLDivElement>, 'is'>)}
    className={cx('rcx-sidebar-collapse-group__bar', className)}
  >
    <ItemGroupTitle
      role={role}
      {...barProps}
      className='rcx-sidebar-collapse-group__bar-button'
    >
      {expanded !== undefined && <Chevron size='x20' right={!expanded} />}
      {title && (
        <h4 className='rcx-sidebar-collapse-group__title' id={titleId}>
          {title}
        </h4>
      )}
      {!expanded && badge && badge}
    </ItemGroupTitle>
    {menu}
  </ItemGroupHeader>
);
