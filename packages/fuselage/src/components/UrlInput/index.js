import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React from 'react';

import { InputBox } from '../InputBox';

export const UrlInput = React.forwardRef(function UrlInput({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-url-input', {}, className);
  return <InputBox className={compoundClassName} ref={ref} {...props} type='url' />;
});

UrlInput.displayName = 'UrlInput';

UrlInput.propTypes = {
  addon: PropTypes.element,
  error: PropTypes.string,
  invisible: PropTypes.bool,
};
