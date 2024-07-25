import type { ReactElement } from 'react';
import React, { memo } from 'react';

import { Box, type BoxProps } from '../Box';

type ContextualbarTitleProps = BoxProps;

const ContextualbarTitle = (props: ContextualbarTitleProps): ReactElement => (
  <Box
    flexShrink={1}
    flexGrow={1}
    fontScale='h5'
    withTruncatedText
    {...props}
  />
);

export default memo(ContextualbarTitle);
