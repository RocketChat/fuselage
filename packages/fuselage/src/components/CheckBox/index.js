import PropTypes from 'prop-types';
import React, { useLayoutEffect, useRef } from 'react';

import { useClassName, useMergedRefs } from '../../hooks';
import { Label } from '../Label';

export const CheckBox = React.forwardRef(function CheckBox({
  className,
  hidden,
  indeterminate,
  invisible,
  style,
  onChange,
  ...props
}, ref) {
  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

  useLayoutEffect(() => {
    innerRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const classNames = {
    container: useClassName('rcx-check-box', { invisible }, className),
    input: useClassName('rcx-check-box__input'),
    fake: useClassName('rcx-check-box__fake'),
  };

  return <Label className={classNames.container} hidden={hidden} invisible={invisible} style={style}>
    <input className={classNames.input} ref={mergedRef} type='checkbox' onChange={(event) => {
      innerRef.current.indeterminate = indeterminate;
      onChange && onChange.call(innerRef.current, event);
    }} {...props} />
    <i className={classNames.fake} aria-hidden='true' />
  </Label>;
});

CheckBox.displayName = 'CheckBox';

CheckBox.propTypes = {
  /**
   * Is this component visible?
   */
  invisible: PropTypes.bool,
};
