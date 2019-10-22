import { useClassName, useToggle } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../hooks/useTheme';
import { Icon } from '../Icon';
import { ToggleSwitch } from '../ToggleSwitch';
import { StyledAccordionItem, Bar, Title, Panel } from './styles';

export const Item = React.forwardRef(function Item({
  children,
  className,
  defaultExpanded,
  disabled,
  expanded,
  tabIndex = 0,
  title,
  noncollapsible = !title,
  onToggle,
  onToggleEnabled,
  ...props
}, ref) {
  const classNames = {
    bar: useClassName('rcx-accordion-item__bar', {}, className),
    title: useClassName('rcx-accordion-item__title'),
    toggleBtn: useClassName('rcx-accordion-item__toggle-button'),
  };
  const theme = useTheme();

  const [internalExpanded, toggleExpanded] = useToggle(defaultExpanded);

  const handleClick = (event) => {
    if (disabled) {
      return;
    }

    event.currentTarget.blur();

    if (onToggle) {
      return onToggle.call(event.currentTarget, event);
    }

    toggleExpanded();
  };

  const handleKeyDown = (event) => {
    if (disabled || event.currentTarget !== event.target) {
      return;
    }

    if (event.keyCode === 32) {
      event.preventDefault();

      if (event.repeat) {
        return;
      }

      if (onToggle) {
        return onToggle.call(event.currentTarget, event);
      }

      toggleExpanded();
    }
  };

  const handleToggleClick = (event) => {
    event.stopPropagation();
  };

  return <StyledAccordionItem theme={theme} {...props}>
    {title && <Bar
      aria-checked={expanded || internalExpanded ? 'true' : 'false'}
      className={classNames.bar}
      disabled={disabled}
      expanded={expanded || internalExpanded}
      noncollapsible={noncollapsible}
      ref={ref}
      role='switch'
      tabIndex={!disabled && !noncollapsible ? tabIndex : undefined}
      theme={theme}
      onClick={noncollapsible ? undefined : handleClick}
      onKeyDown={noncollapsible ? undefined : handleKeyDown}
    >
      <Title className={classNames.bar} theme={theme}>{title}</Title>
      {!noncollapsible && <>
        {(disabled || onToggleEnabled)
          && <ToggleSwitch checked={!disabled} onClick={handleToggleClick} onChange={onToggleEnabled} />}
        <Icon name={'arrow-down'} />
      </>}
    </Bar>}
    <Panel className={classNames.panel} expanded={noncollapsible || expanded || internalExpanded} theme={theme}>
      {children}
    </Panel>
  </StyledAccordionItem>;
});

Item.defaultProps = {
  tabIndex: 0,
};

Item.displayName = 'Accordion.Item';

Item.propTypes = {
  children: PropTypes.node,
  defaultExpanded: PropTypes.bool,
  disabled: PropTypes.bool,
  expanded: PropTypes.bool,
  tabIndex: PropTypes.number,
  title: PropTypes.string,
  onToggle: PropTypes.func,
  onToggleEnabled: PropTypes.func,
};
