import React from 'react';

import Box from '../../Box';

export const SelectPlaceholder = (props: { children: React.ReactNode }) => (
  <Box fontScale='p2' color='hint' withTruncatedText {...props} is='span' />
);
