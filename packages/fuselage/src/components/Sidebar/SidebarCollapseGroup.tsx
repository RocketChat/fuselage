import type { HTMLAttributes, ReactNode, RefAttributes } from 'react';

import { SidebarGroupTitle } from './SidebarGroupTitle';
import { useCollapse } from './hooks/useCollapse';

type SidebarCollapseGroupProps = HTMLAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement> & {
    expanded?: boolean;
    defaultExpanded?: boolean;
    tabIndex?: number;
    title: string;
    badge?: ReactNode;
    menu?: ReactNode;
    actions?: ReactNode;
  };

export function SidebarCollapseGroup({
  ref,
  expanded: propExpanded,
  defaultExpanded,
  tabIndex,
  children,
  badge,
  menu,
  title,
  ...props
}: SidebarCollapseGroupProps) {
  const { barProps, expanded, panelExpanded, panelId, titleId } = useCollapse({
    expanded: propExpanded,
    defaultExpanded,
    tabIndex,
  });

  return (
    <section
      className='rcx-box rcx-box--full rcx-sidebar-v2-collapse-group'
      {...props}
    >
      <SidebarGroupTitle
        expanded={expanded}
        title={title}
        titleId={titleId}
        badge={badge}
        menu={menu}
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
