import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const TelephoneInput = forwardRef(function TelephoneInput({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-tel-input', {}, className);
  return <InputBox className={compoundClassName} ref={ref} {...props} type='tel' />;
});

TelephoneInput.displayName = 'TelephoneInput';

TelephoneInput.propTypes = {
  addon: PropTypes.element,
  error: PropTypes.string,
};
