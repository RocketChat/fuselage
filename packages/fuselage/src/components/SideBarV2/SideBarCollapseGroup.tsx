import type { HTMLAttributes, ReactNode } from 'react';
import React, { forwardRef } from 'react';

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

export const SideBarCollapseGroup = forwardRef<
  HTMLDivElement,
  SideBarCollapseGroupProps
>(
  (
    {
      expanded: propExpanded,
      defaultExpanded,
      tabIndex,
      children,
      badge,
      title,
      ...props
    }: SideBarCollapseGroupProps,
    ref
  ) => {
    const { barProps, expanded, panelExpanded, panelId, titleId } = useCollapse(
      {
        expanded: propExpanded,
        defaultExpanded,
        tabIndex,
      }
    );

    return (
      <section className={`rcx-sidebar-v2-collapse-group`} {...props}>
        <div
          role='button'
          className={[`rcx-sidebar-v2-collapse-group__bar`, 'rcx-box--animated']
            .filter(Boolean)
            .join(' ')}
          {...barProps}
        >
          <Chevron size='x20' up={expanded} />
          {title && (
            <h4 className={`rcx-sidebar-v2-collapse-group__title`} id={titleId}>
              {title}
            </h4>
          )}
          {!expanded && badge && badge}
        </div>
        <div
          role='list'
          ref={ref}
          className={[
            `rcx-sidebar-v2-collapse-group__panel`,
            'rcx-box--animated',
            panelExpanded && `rcx-sidebar-v2-collapse-group__panel--expanded`,
          ]
            .filter(Boolean)
            .join(' ')}
          id={panelId}
        >
          {children}
        </div>
      </section>
    );
  }
);
