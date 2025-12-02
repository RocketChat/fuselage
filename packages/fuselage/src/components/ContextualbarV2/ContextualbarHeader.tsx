import { css } from '@rocket.chat/css-in-js';
import { memo } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type ContextualbarHeaderProps = BoxProps;

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
      className={css`
        gap: 8px;
      `}
    >
      {children}
    </Box>
  </Box>
);

export default memo(ContextualbarHeader);
