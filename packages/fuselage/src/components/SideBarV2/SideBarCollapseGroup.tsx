import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { Chevron } from '../Chevron';
import { useCollapse } from './hooks/useCollapse';

type SideBarCollapseGroupProps = {
  expanded?: boolean;
  defaultExpanded?: boolean;
  tabIndex?: number;
  title: string;
  badge?: ReactNode;
  actions?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const SideBarCollapseGroup = ({
  expanded: propExpanded,
  defaultExpanded,
  tabIndex,
  children,
  badge,
  title,
  ...props
}: SideBarCollapseGroupProps) => {
  const { barProps, expanded, panelExpanded, panelId, titleId } = useCollapse({
    expanded: propExpanded,
    defaultExpanded,
    tabIndex,
  });

  return (
    <section className={`rcx-sidebar-v2__collapse-group`} {...props}>
      <div
        role='button'
        className={[`rcx-sidebar-v2__collapse-group__bar`, 'rcx-box--animated']
          .filter(Boolean)
          .join(' ')}
        {...barProps}
      >
        <Chevron size='x18' up={expanded} />
        {title && (
          <h4 className={`rcx-sidebar-v2__collapse-group__title`} id={titleId}>
            {title}
          </h4>
        )}
        {!expanded && badge && badge}
      </div>
      <ul
        className={[
          `rcx-sidebar-v2__collapse-group__panel`,
          'rcx-box--animated',
          panelExpanded && `rcx-sidebar-v2__collapse-group__panel--expanded`,
        ]
          .filter(Boolean)
          .join(' ')}
        id={panelId}
      >
        {children}
      </ul>
    </section>
  );
};
