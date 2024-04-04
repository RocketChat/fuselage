import { useToggle, useUniqueId } from '@rocket.chat/fuselage-hooks';
import type {
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react';
import React from 'react';

import { Chevron } from '../../Chevron';

type SideBarCollapserProps = {
  children?: ReactNode;
  className?: string;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  tabIndex?: number;
  title: ReactNode;
  noncollapsible?: boolean;
  badge?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const SideBarCollapser = function Item({
  children,
  className,
  defaultExpanded,
  disabled,
  expanded: propExpanded,
  tabIndex = 0,
  title,
  noncollapsible = !title,
  badge,
  ...props
}: SideBarCollapserProps) {
  const [stateExpanded, toggleStateExpanded] = useToggle(defaultExpanded);
  const expanded = propExpanded || stateExpanded;

  const panelExpanded = noncollapsible || expanded;

  const titleId = useUniqueId();
  const panelId = useUniqueId();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (disabled) {
      return;
    }
    e.currentTarget?.blur();
    toggleStateExpanded();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (disabled || event.currentTarget !== event.target) {
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
    'tabIndex': !disabled ? tabIndex : undefined,
    'onClick': handleClick,
    'onKeyDown': handleKeyDown,
  } as const;

  const nonCollapsibleProps = {
    'aria-disabled': 'true',
    'aria-expanded': 'true',
    'aria-labelledby': titleId,
  } as const;

  const barProps = noncollapsible ? nonCollapsibleProps : collapsibleProps;

  return (
    <section className={`${className}`} {...props}>
      <div
        role='button'
        className={[
          `${className}__bar`,
          'rcx-box--animated',
          disabled && `${className}__bar--disabled`,
        ]
          .filter(Boolean)
          .join(' ')}
        {...barProps}
      >
        {!noncollapsible && <Chevron size='x18' up={expanded} />}
        {title && (
          <h4 className={`${className}__title`} id={titleId}>
            {title}
          </h4>
        )}
        {!expanded && badge && badge}
      </div>
      <ul
        className={[
          `${className}__panel`,
          'rcx-box--animated',
          panelExpanded && `${className}__panel--expanded`,
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
