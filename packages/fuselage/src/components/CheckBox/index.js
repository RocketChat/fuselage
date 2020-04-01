import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { forwardRef, useLayoutEffect, useRef, useCallback } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

export const CheckBox = forwardRef(function CheckBox({
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
  }, [innerRef, indeterminate]);

  const handleChange = useCallback((event) => {
    innerRef.current.indeterminate = indeterminate;
    onChange && onChange.call(innerRef.current, event);
  }, [innerRef, indeterminate, onChange]);

  return <Box is={Label} componentClassName='rcx-check-box' className={className} hidden={hidden} invisible={invisible} style={style}>
    <Box is='input' componentClassName='rcx-check-box__input' ref={mergedRef} type='checkbox' onChange={handleChange} {...props} />
    <Box is='i' componentClassName='rcx-check-box__fake' aria-hidden='true' />
  </Box>;
});

CheckBox.propTypes = {
  indeterminate: PropTypes.bool,
};
