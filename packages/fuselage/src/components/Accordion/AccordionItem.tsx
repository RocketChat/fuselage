import { useToggle, useUniqueId } from '@rocket.chat/fuselage-hooks';
import type { FormEvent, KeyboardEvent, MouseEvent, ReactNode } from 'react';
import React from 'react';

import Box from '../Box';
import { Chevron } from '../Chevron';
import { ToggleSwitch } from '../ToggleSwitch';

type AccordionItemProps = {
  children?: ReactNode;
  className?: string;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  tabIndex?: number;
  title: ReactNode;
  noncollapsible?: boolean;
  onToggle?: (e: MouseEvent | KeyboardEvent) => void;
  onToggleEnabled?: (e: FormEvent) => void;
};

export const AccordionItem = function Item({
  children,
  className,
  defaultExpanded,
  disabled,
  expanded: propExpanded,
  tabIndex = 0,
  title,
  noncollapsible = !title,
  onToggle,
  onToggleEnabled,
  ...props
}: AccordionItemProps) {
  const [stateExpanded, toggleStateExpanded] = useToggle(defaultExpanded);
  const expanded = propExpanded || stateExpanded;
  const toggleExpanded = (event: MouseEvent | KeyboardEvent) => {
    if (onToggle) {
      onToggle.call(event.currentTarget, event);
      return;
    }

    toggleStateExpanded();
  };

  const panelExpanded = noncollapsible || expanded;

  const titleId = useUniqueId();
  const panelId = useUniqueId();

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (disabled) {
      return;
    }
    e.currentTarget?.blur();
    toggleExpanded(e);
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

      toggleExpanded(event);
    }
  };

  const handleToggleClick = (event: MouseEvent) => {
    event.stopPropagation();
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
    <Box is='section' rcx-accordion-item className={className} {...props}>
      {title && (
        <Box
          animated
          rcx-accordion-item__bar
          rcx-accordion-item__bar--disabled={disabled}
          {...barProps}
        >
          <Box is='h1' rcx-accordion-item__title id={titleId}>
            {title}
          </Box>
          {!noncollapsible && (
            <>
              {(disabled || onToggleEnabled) && (
                <Box rcx-accordion-item__toggle-switch>
                  <ToggleSwitch
                    checked={!disabled}
                    onClick={handleToggleClick}
                    onChange={onToggleEnabled}
                  />
                </Box>
              )}
              <Chevron size='x24' up={expanded} />
            </>
          )}
        </Box>
      )}
      <Box
        animated
        rcx-accordion-item__panel
        rcx-accordion-item__panel--expanded={panelExpanded}
        id={panelId}
        role='region'
      >
        {children}
      </Box>
    </Box>
  );
};
