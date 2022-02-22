import type { ComponentProps, ReactNode, Ref } from 'react';
import React, { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type SearchInputProps = Omit<ComponentProps<typeof InputBox>, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

export const SearchInput = forwardRef(function SearchInput(
  props: SearchInputProps,
  ref: Ref<HTMLInputElement>
) {
  return <InputBox type='search' ref={ref} {...props} />;
});
