import React from 'react';

import { InputBox } from '../InputBox';

export const SearchInput = React.forwardRef(function SearchInput(props, ref) {
  return <InputBox is='input' ref={ref} type='search' {...props} />;
});

SearchInput.displayName = 'SearchInput';
