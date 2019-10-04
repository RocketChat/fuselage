import PropTypes from 'prop-types';
import React from 'react';

import { useClassName } from '../../hooks';
import { Label } from '../Label';

export const ToggleSwitch = React.forwardRef(function ToggleSwitch({
  className,
  hidden,
  invisible,
  style,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-toggle-switch', { invisible }, className),
    input: useClassName('rcx-toggle-switch__input'),
    fake: useClassName('rcx-toggle-switch__fake'),
  };

  return <Label className={classNames.container} hidden={hidden} invisible={invisible} style={style}>
    <input className={classNames.input} ref={ref} type='checkbox' {...props} />
    <i className={classNames.fake} aria-hidden='true' />
  </Label>;
});

ToggleSwitch.displayName = 'ToggleSwitch';

ToggleSwitch.propTypes = {
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
};
