import { useToggle, useUniqueId } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { Box } from '../Box';
import { Chevron } from '../Chevron';
import { ToggleSwitch } from '../ToggleSwitch';

const ItemContainer = Box.extend('rcx-accordion-item', 'section');
const ItemBar = Box.extend('rcx-accordion-item__bar');
const ItemTitle = Box.extend('rcx-accordion-item__title', 'h1');
const ItemToggleSwitchContainer = Box.extend('rcx-accordion-item__toggle-switch');
const ItemPanel = Box.extend('rcx-accordion-item__panel');

export function Item({
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
}) {
  const [stateExpanded, toggleStateExpanded] = useToggle(defaultExpanded);
  const expanded = propExpanded || stateExpanded;
  const toggleExpanded = () => {
    if (onToggle) {
      onToggle.call(event.currentTarget, event);
      return;
    }

    toggleStateExpanded();
  };

  const panelExpanded = noncollapsible || expanded;

  const titleId = useUniqueId();
  const panelId = useUniqueId();

  const handleClick = (event) => {
    if (disabled) {
      return;
    }

    event.currentTarget.blur();
    toggleExpanded();
  };

  const handleKeyDown = (event) => {
    if (disabled || event.currentTarget !== event.target) {
      return;
    }

    if ([13, 32].includes(event.keyCode)) {
      event.preventDefault();

      if (event.repeat) {
        return;
      }

      toggleExpanded();
    }
  };

  const handleToggleClick = (event) => {
    event.stopPropagation();
  };

  const collapsibleProps = {
    'aria-controls': panelId,
    'aria-expanded': expanded ? 'true' : 'false',
    tabIndex: !disabled ? tabIndex : undefined,
    onClick: handleClick,
    onKeyDown: handleKeyDown,
  };

  const nonCollapsibleProps = {
    'aria-disabled': 'true',
    'aria-expanded': 'true',
    'aria-labelledby': titleId,
  };

  const barProps = noncollapsible ? nonCollapsibleProps : collapsibleProps;

  return <ItemContainer className={className} {...props}>
    {title && <ItemBar mod-disabled={disabled} {...barProps}>
      <ItemTitle id={titleId}>{title}</ItemTitle>
      {!noncollapsible && <>
        {(disabled || onToggleEnabled)
          && <ItemToggleSwitchContainer>
            <ToggleSwitch checked={!disabled} onClick={handleToggleClick} onChange={onToggleEnabled} />
          </ItemToggleSwitchContainer>}
        <Chevron size='24' up={expanded} />
      </>}
    </ItemBar>}
    <ItemPanel id={panelId} mod-expanded={panelExpanded} role='region'>
      {children}
    </ItemPanel>
  </ItemContainer>;
}

Item.displayName = 'Accordion.Item';

Item.propTypes = {
  children: PropTypes.node,
  defaultExpanded: PropTypes.bool,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  tabIndex: PropTypes.number,
  title: PropTypes.node,
  onToggle: PropTypes.func,
  onToggleEnabled: PropTypes.func,
};
