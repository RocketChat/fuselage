import type { ComponentProps, ReactNode, Ref } from 'react';
import { forwardRef } from 'react';

import { InputBox } from '../InputBox';

type SearchInputProps = Omit<ComponentProps<typeof InputBox>, 'type'> & {
  addon?: ReactNode;
  error?: string;
};

/**
 * An input for search queries.
 */
export const SearchInput = forwardRef(function SearchInput(
  props: SearchInputProps,
  ref: Ref<HTMLInputElement>
) {
  return <InputBox type='search' ref={ref} {...props} />;
});
