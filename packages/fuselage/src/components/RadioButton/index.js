import PropTypes from 'prop-types';
import React from 'react';

import { useClassName } from '../../hooks';
import { Label } from '../Label';

export const RadioButton = React.forwardRef(function RadioButton({
  className,
  hidden,
  invisible,
  style,
  ...props
}, ref) {
  const classNames = {
    container: useClassName('rcx-radio-button', { invisible }, className),
    input: useClassName('rcx-radio-button__input'),
    fake: useClassName('rcx-radio-button__fake'),
  };

  return <Label className={classNames.container} hidden={hidden} invisible={invisible} style={style}>
    <input className={classNames.input} ref={ref} type='radio' {...props} />
    <i className={classNames.fake} aria-hidden='true' />
  </Label>;
});

RadioButton.displayName = 'RadioButton';

RadioButton.propTypes = {
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
};
