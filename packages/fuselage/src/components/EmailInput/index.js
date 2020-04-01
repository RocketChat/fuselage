import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const EmailInput = forwardRef(function EmailInput({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-email-input', {}, className);
  return <InputBox className={compoundClassName} ref={ref} {...props} type='email' />;
});

EmailInput.propTypes = {
  addon: PropTypes.element,
  error: PropTypes.string,
};
