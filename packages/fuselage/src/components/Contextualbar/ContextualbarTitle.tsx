import type { ReactElement, ComponentProps } from 'react';
import React, { memo } from 'react';

import { Box } from '..';

const ContextualbarTitle = (
  props: ComponentProps<typeof Box>
): ReactElement => (
  <Box
    flexShrink={1}
    flexGrow={1}
    fontScale='h5'
    withTruncatedText
    {...props}
  />
);

export default memo(ContextualbarTitle);
