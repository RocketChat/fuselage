import React from 'react';

import Box from '../Box';

type SelectPlaceholderProps = {
  children: string | undefined;
};

const SelectPlaceholder = ({ children }: SelectPlaceholderProps) => (
  <Box
    is='span'
    rcx-select__item
    flexGrow={1}
    marginInline={4}
    fontScale='p2'
    color='hint'
    aria-hidden
  >
    {children}
  </Box>
);

export default SelectPlaceholder;
