import type { HTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';

import { SideBarGroupTitle } from './SidebarGroupTitle';
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
      <section
        className='rcx-box rcx-box--full rcx-sidebar-v2-collapse-group'
        {...props}
      >
        <SideBarGroupTitle
          expanded={expanded}
          title={title}
          titleId={titleId}
          badge={badge}
          barProps={barProps}
          role='button'
        />
        <div
          role='list'
          ref={ref}
          className={[
            'rcx-box rcx-box--full rcx-sidebar-v2-collapse-group__panel rcx-box--animated',
            panelExpanded && 'rcx-sidebar-v2-collapse-group__panel--expanded',
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
