import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const TextInput = forwardRef(function TextInput({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-text-input', {}, className);
  return <InputBox className={compoundClassName} ref={ref} {...props} type='text' />;
});

TextInput.displayName = 'TextInput';

TextInput.propTypes = {
  addon: PropTypes.element,
  error: PropTypes.string,
  invisible: PropTypes.bool,
};
