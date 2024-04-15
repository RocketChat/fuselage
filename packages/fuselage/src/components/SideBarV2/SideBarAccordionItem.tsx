import type { HTMLAttributes, ReactNode } from 'react';
import React from 'react';

import { Chevron } from '../Chevron';
import { useCollapse } from './hooks/useCollapse';

type SideBarAccordionItemProps = {
  children?: ReactNode;
  className?: string;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  title: ReactNode;
  noncollapsible?: boolean;
  badge?: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const SideBarAccordionItem = ({
  children,
  title,
  badge,
  noncollapsible,
  disabled,
  expanded: propExpanded,
  defaultExpanded,
  tabIndex,
  ...props
}: SideBarAccordionItemProps) => {
  const { barProps, expanded, panelExpanded, panelId, titleId } = useCollapse({
    expanded: propExpanded,
    defaultExpanded,
    tabIndex,
    disabled,
    noncollapsible,
  });

  return (
    <section className='rcx-sidebar-v2-accordion-item' {...props}>
      <div
        role='button'
        className={[
          'rcx-sidebar-v2-accordion-item__bar',
          'rcx-box--animated',
          disabled && 'rcx-sidebar-v2-accordion-item__bar--disabled',
        ]
          .filter(Boolean)
          .join(' ')}
        {...barProps}
      >
        {!noncollapsible && (
          <Chevron
            className='rcx-sidebar-v2-accordion-item__chevron'
            size='x16'
            right={!expanded}
          />
        )}
        {title && (
          <h4 className='rcx-sidebar-v2-accordion-item__title' id={titleId}>
            {title}
          </h4>
        )}
        {!expanded && badge && badge}
      </div>
      <div
        className={[
          'rcx-sidebar-v2-accordion-item__panel',
          'rcx-box--animated',
          panelExpanded && 'rcx-sidebar-v2-accordion-item__panel--expanded',
        ]
          .filter(Boolean)
          .join(' ')}
        id={panelId}
      >
        {children}
      </div>
    </section>
  );
};
