import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

export const SearchInput = forwardRef(function SearchInput(props, ref) {
  return <InputBox type='search' ref={ref} {...props} />;
});
