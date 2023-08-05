import type { ComponentProps } from 'react';
import React, { memo } from 'react';

import Box from '../Box';
import Margins from '../Margins';

type ContextualbarHeaderProps = ComponentProps<typeof Box>;

const ContextualbarHeader = ({
  children,
  ...props
}: ContextualbarHeaderProps) => (
  <Box
    display='flex'
    alignItems='center'
    height='x56'
    is='h3'
    pi={24}
    borderBlockEndWidth='default'
    borderBlockColor='extra-light'
    flexShrink={0}
    {...props}
  >
    <Box
      marginInline='neg-x4'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      fontScale='h4'
      flexGrow={1}
      overflow='hidden'
      color='default'
    >
      <Margins inline='x4'>{children}</Margins>
    </Box>
  </Box>
);

export default memo(ContextualbarHeader);
