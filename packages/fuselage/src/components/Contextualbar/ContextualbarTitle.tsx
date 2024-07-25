import React, { memo } from 'react';

import { Box, type BoxProps } from '../Box';

type ContextualbarTitleProps = BoxProps;

const ContextualbarTitle = (props: ContextualbarTitleProps) => (
  <Box
    flexShrink={1}
    flexGrow={1}
    fontScale='h4'
    withTruncatedText
    {...props}
  />
);

export default memo(ContextualbarTitle);
