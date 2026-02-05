import type { ReactNode } from 'react';
import { forwardRef } from 'react';

import { InputBox, type InputBoxProps } from '../InputBox';

export type SearchInputProps = Omit<InputBoxProps, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

/**
 * An input for search queries.
 */
const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(props, ref) {
    return <InputBox type='search' ref={ref} {...props} />;
  },
);

export default SearchInput;
