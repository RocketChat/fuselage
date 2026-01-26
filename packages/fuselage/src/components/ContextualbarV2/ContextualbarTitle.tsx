import { memo } from 'react';

import { Box, type BoxProps } from '../Box';

export type ContextualbarTitleProps = BoxProps;

const ContextualbarTitle = (props: ContextualbarTitleProps) => (
  <Box
    flexShrink={1}
    flexGrow={1}
    role='heading'
    withTruncatedText
    is='h5'
    {...props}
  />
);

export default memo(ContextualbarTitle);
