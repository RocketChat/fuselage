import type { ReactElement, ComponentProps } from 'react';
import React, { memo } from 'react';

import Box from '../Box';

const ContextualBarInnerContent = (
  props: ComponentProps<typeof Box>
): ReactElement => (
  <Box
    rcx-vertical-bar--inner-content
    position='absolute'
    height='full'
    display='flex'
    insetInline={0}
    {...props}
  />
);

export default memo(ContextualBarInnerContent);
