import { ComponentProps, ForwardRefExoticComponent, ReactNode } from 'react';

import { Box } from '../Box';

type SearchInputProps = ComponentProps<typeof Box> & {
  addon?: ReactNode;
  error?: string;
};
export const SearchInput: ForwardRefExoticComponent<SearchInputProps>;
