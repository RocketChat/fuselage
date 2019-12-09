import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const TextAreaInput = forwardRef(function TextAreaInput({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-textarea-input', {}, className);
  return <InputBox className={compoundClassName} ref={ref} {...props} type='textarea' />;
});

TextAreaInput.displayName = 'TextAreaInput';

TextAreaInput.propTypes = {
  addon: PropTypes.element,
  error: PropTypes.string,
  invisible: PropTypes.bool,
  rows: PropTypes.number,
};
