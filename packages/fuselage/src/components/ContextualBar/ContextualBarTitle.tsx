import type { ReactElement, ComponentProps } from 'react';
import React, { memo } from 'react';

import Box from '../Box';

const ContextualBarTitle = (
  props: ComponentProps<typeof Box>
): ReactElement => (
  <Box flexShrink={1} flexGrow={1} withTruncatedText {...props} />
);

export default memo(ContextualBarTitle);
