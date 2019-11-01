import { useMergedRefs } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { useRef, useLayoutEffect } from 'react';

import { createStyledComponent } from '../../styles';
import styles from './styles';

const Container = createStyledComponent(styles, 'rcx-input-control', 'input');

export const InputControl = React.forwardRef(function InputControl({
  error,
  placeholderVisible,
  multiple,
  type = 'text',
  undecorated = false,
  ...props
}, ref) {
  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

  useLayoutEffect(() => {
    if (innerRef.current && innerRef.current.setCustomValidity) {
      innerRef.current.setCustomValidity(error || '');
    }
  }, [error]);

  return <Container
    as={
      (type === 'textarea' && 'textarea')
    || (type === 'select' && 'select')
    || 'input'}
    cols={
      (type === 'textarea' && 1)
    || (type === 'select' && 0)
    || 0}
    multiple={multiple}
    ref={mergedRef}
    size={
      (type === 'textarea' && undefined)
    || (type === 'select' && 1)
    || 1}
    type={type === 'textarea' || type === 'select' ? undefined : type}
    mod-multiple={multiple}
    mod-placeholder-visible={placeholderVisible}
    mod-type={type}
    mod-undecorated={undecorated}
    {...props}
  />;
});

InputControl.defaultProps = {
  type: 'text',
  undecorated: false,
};

InputControl.displayName = 'InputControl';

InputControl.propTypes = {
  error: PropTypes.string,
  invisible: PropTypes.bool,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
    'textarea',
    'select',
  ]).isRequired,
  undecorated: PropTypes.bool,
};

InputControl.styled = Container;
