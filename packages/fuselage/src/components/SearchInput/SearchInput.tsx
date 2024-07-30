import type { ReactNode, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { InputBoxProps } from '../InputBox';
import { InputBox } from '../InputBox';

type SearchInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

export const SearchInput = forwardRef(function SearchInput(
  props: SearchInputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return <InputBox type='search' ref={ref} {...props} />;
});
