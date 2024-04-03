import { useToggle, useUniqueId } from '@rocket.chat/fuselage-hooks';
import type { HTMLAttributes, MouseEvent } from 'react';
import React from 'react';

import { Chevron } from '../Chevron';

type SideBarCollapseGroupProps = {
  expanded?: boolean;
  defaultExpanded?: boolean;
  tabIndex?: number;
  title: string;
  badge?: React.ReactNode;
  actions?: React.ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export const SideBarCollapseGroup = ({
  expanded: propExpanded,
  defaultExpanded,
  tabIndex = 0,
  children,
  title,
  className,
  badge,
  ...props
}: SideBarCollapseGroupProps) => {
  const [stateExpanded, toggleStateExpanded] = useToggle(defaultExpanded);
  const expanded = propExpanded || stateExpanded;

  const titleId = useUniqueId();
  const panelId = useUniqueId();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget?.blur();
    toggleStateExpanded();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.currentTarget !== event.target) {
      return;
    }

    if ([13, 32].includes(event.keyCode)) {
      event.preventDefault();

      if (event.repeat) {
        return;
      }

      toggleStateExpanded();
    }
  };

  const collapsibleProps = {
    'aria-controls': panelId,
    'aria-expanded': expanded ? 'true' : 'false',
    tabIndex,
    'onClick': handleClick,
    'onKeyDown': handleKeyDown,
  } as const;

  return (
    <section
      className={['rcx-sidebar-v2__collapse-group', className && className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <div
        role='button'
        className={['rcx-sidebar-v2__collapse-group__bar', 'rcx-box--animated']
          .filter(Boolean)
          .join(' ')}
        {...collapsibleProps}
      >
        {<Chevron size='x18' up={expanded} />}
        {title && (
          <h5 className='rcx-sidebar-v2__collapse-group__title' id={titleId}>
            {title}
          </h5>
        )}
        {!expanded && badge && badge}
      </div>
      <div
        className={[
          'rcx-sidebar-v2__collapse-group__panel',
          'rcx-box--animated',
          expanded && 'rcx-sidebar-v2__collapse-group__panel--expanded',
        ]
          .filter(Boolean)
          .join(' ')}
        id={panelId}
        role='region'
      >
        {children}
      </div>
    </section>
    // <div
    //   role='button'
    //   className='rcx-sidebar-v2__collapse-group'
    //   {...collapsibleProps}
    //   {...props}
    // >
    //   <Chevron size='x18' up={expanded} />
    //   <span className='rcx-sidebar-v2__collapse-group__title'>{children}</span>
    // </div>
  );
};
