import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { useLayoutEffect, useRef, useCallback } from 'react';

import { createStyledComponent } from '../../styles';
import { useFieldId } from '../Field';
import { Label } from '../Label';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-check-box', Label);
const Input = createStyledComponent(styles, 'rcx-check-box__input', 'input');
const Fake = createStyledComponent(styles, 'rcx-check-box__fake', 'i');

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

  const handleChange = useCallback((event) => {
    innerRef.current.indeterminate = indeterminate;
    onChange && onChange.call(innerRef.current, event);
  }, [indeterminate, onChange]);

  const fieldId = useFieldId();

  return <Container className={className} hidden={hidden} invisible={invisible} style={style}>
    <Input id={fieldId} ref={mergedRef} type='checkbox' onChange={handleChange} {...props} />
    <Fake aria-hidden='true' />
  </Container>;
});

CheckBox.displayName = 'CheckBox';

CheckBox.propTypes = {
  /** Is this component visible? */
  invisible: PropTypes.bool,
};

CheckBox.styled = Container;
