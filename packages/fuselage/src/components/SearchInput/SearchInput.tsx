import React, { ComponentProps, forwardRef, ReactNode, Ref } from 'react';

import { Box } from '..';
import { InputBox } from '../InputBox';

type SearchInputProps = Omit<ComponentProps<typeof Box>, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

export const SearchInput = forwardRef(function SearchInput(
  props: SearchInputProps,
  ref: Ref<HTMLInputElement>
) {
  return <InputBox type='search' ref={ref} {...props} />;
});
