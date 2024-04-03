import { useToggle, useUniqueId } from '@rocket.chat/fuselage-hooks';
import type {
  HTMLAttributes,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react';
import React from 'react';

import { Chevron } from '../Chevron';

type SideBarAccordionItemProps = {
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

export const SideBarAccordionItem = function Item({
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
}: SideBarAccordionItemProps) {
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
    <section
      className={['rcx-sidebar-v2__accordion-item', className && className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <div
        role='button'
        className={[
          'rcx-sidebar-v2__accordion-item__bar',
          'rcx-box--animated',
          disabled && 'rcx-sidebar-v2__accordion-item__bar--disabled',
        ]
          .filter(Boolean)
          .join(' ')}
        {...barProps}
      >
        {!noncollapsible && <Chevron size='x18' up={expanded} />}
        {title && (
          <h4 className='rcx-sidebar-v2__accordion-item__title' id={titleId}>
            {title}
          </h4>
        )}
        {!expanded && badge && badge}
      </div>
      <div
        className={[
          'rcx-sidebar-v2__accordion-item__panel',
          'rcx-box--animated',
          panelExpanded && 'rcx-sidebar-v2__accordion-item__panel--expanded',
        ]
          .filter(Boolean)
          .join(' ')}
        id={panelId}
        role='region'
      >
        {children}
      </div>
    </section>
  );
};
