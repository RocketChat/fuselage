import { css } from '@rocket.chat/css-in-js';
import { memo } from 'react';

import { Box, type BoxProps } from '../Box';

export type ContextualbarHeaderProps = BoxProps;

const ContextualbarHeader = ({
  children,
  ...props
}: ContextualbarHeaderProps) => (
  <Box
    display='flex'
    alignItems='center'
    height='x44'
    pi={16}
    borderBlockEndWidth='default'
    borderBlockColor='extra-light'
    flexShrink={0}
    {...props}
  >
    <Box
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      flexGrow={1}
      height='100%'
      overflow='hidden'
      mi={-4}
      pi={4}
      className={css`
        gap: 8px;
      `}
    >
      {children}
    </Box>
  </Box>
);

export default memo(ContextualbarHeader);
