import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const PasswordInput = forwardRef(function PasswordInput({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-password-input', {}, className);
  return <InputBox className={compoundClassName} ref={ref} {...props} type='password' />;
});

PasswordInput.displayName = 'PasswordInput';

PasswordInput.propTypes = {
  addon: PropTypes.element,
  error: PropTypes.string,
  invisible: PropTypes.bool,
};
