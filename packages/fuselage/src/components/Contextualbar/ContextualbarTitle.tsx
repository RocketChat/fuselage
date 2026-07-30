import { memo } from 'react';

import { Box, type BoxProps } from '../Box';

/**
 * @deprecated Use `ContextualbarV2TitleProps` instead.
 */
export type ContextualbarTitleProps = BoxProps;

const ContextualbarTitle = (props: ContextualbarTitleProps) => (
  <Box
    flexShrink={1}
    flexGrow={1}
    fontScale='h4'
    withTruncatedText
    {...props}
  />
);

/**
 * @deprecated Use `ContextualbarV2Title` instead.
 */
export default memo(ContextualbarTitle);
