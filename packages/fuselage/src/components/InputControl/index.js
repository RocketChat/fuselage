import { useClassName, useMergedRefs } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { useRef, useLayoutEffect } from 'react';

import { useTheme } from '../../hooks/useTheme';
import { StyledInputControl } from './styles';

export const InputControl = React.forwardRef(function InputControl({
  className,
  error,
  type = 'text',
  undecorated = false,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-input-control', {}, className);
  const theme = useTheme();

  const innerRef = useRef();
  const mergedRef = useMergedRefs(ref, innerRef);

  useLayoutEffect(() => {
    if (innerRef.current && innerRef.current.setCustomValidity) {
      innerRef.current.setCustomValidity(error || '');
    }
  }, [error]);

  return <StyledInputControl
    as={
      (type === 'textarea' && 'textarea')
    || (type === 'select' && 'select')
    || 'input'}
    className={compoundClassName}
    ref={mergedRef}
    theme={theme}
    type={type === 'textarea' || type === 'select' ? undefined : type}
    htmlType={type}
    undecorated={undecorated}
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
