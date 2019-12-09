import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { forwardRef, useLayoutEffect, useRef, useCallback } from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

const Container = Box.extend('rcx-check-box', 'span');
const Input = Box.extend('rcx-check-box__input', 'input');
const Fake = Box.extend('rcx-check-box__fake', 'i');

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

  return <Container className={className} hidden={hidden} invisible={invisible} style={style}>
    <Label>
      <Input ref={mergedRef} type='checkbox' onChange={handleChange} {...props} />
      <Fake aria-hidden='true' />
    </Label>
  </Container>;
});

CheckBox.displayName = 'CheckBox';

CheckBox.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};
