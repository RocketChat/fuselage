import React from 'react';

import Box from '../../Box';

export const SelectValue = (props: { children: React.ReactNode }) => (
  <Box
    fontScale='p2'
    color='default'
    rcx-select__focus
    withTruncatedText
    {...props}
    flexGrow={1}
    is='span'
  />
);
