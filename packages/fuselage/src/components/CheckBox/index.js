import React, { useLayoutEffect, useRef, useCallback } from 'react';

import { useClassName, useMergedRefs } from '../../hooks';
import { Box } from '../Box';
import { Label } from '../Label';

export const CheckBox = React.forwardRef(function CheckBox({
  className,

  hidden,
  invisible,
  style,

  indeterminate,
  onChange,

  ...props
}, ref) {
  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

  useLayoutEffect(() => {
    innerRef.current.indeterminate = indeterminate;
  }, [indeterminate]);

  const handleChange = useCallback((event) => {
    innerRef.current.indeterminate = indeterminate;
    onChange && onChange.call(innerRef.current, event);
  }, [indeterminate, onChange]);

  const classNames = {
    container: useClassName('rcx-check-box', {}, className),
    input: useClassName('rcx-check-box__input'),
    fake: useClassName('rcx-check-box__fake'),
  };

  return <Label className={classNames.container} hidden={hidden} invisible={invisible} style={style}>
    <Box className={classNames.input} is='input' ref={mergedRef} type='checkbox' onChange={handleChange} {...props} />
    <Box aria-hidden='true' className={classNames.fake} is='i' />
  </Label>;
});

CheckBox.displayName = 'CheckBox';
