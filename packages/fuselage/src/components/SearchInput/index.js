import { useClassName } from '@rocket.chat/fuselage-hooks';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const SearchInput = forwardRef(function SearchInput({
  className,
  ...props
}, ref) {
  const compoundClassName = useClassName('rcx-search-input', {}, className);
  return <InputBox className={compoundClassName} ref={ref} {...props} type='search' />;
});

SearchInput.displayName = 'SearchInput';

SearchInput.propTypes = {
  addon: PropTypes.element,
  error: PropTypes.string,
  invisible: PropTypes.bool,
};
