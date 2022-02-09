import React, { ComponentProps } from 'react';

import { Box } from '../Box';
import Margins from '../Margins';
import { style } from './Table';

type TableSelectionProps = ComponentProps<typeof Box> & {
  text?: string;
};

export const TableSelection = ({
  children,
  text,
  ...props
}: TableSelectionProps) => (
  <Box
    color='alternative'
    rcx-table__selection
    display='flex'
    alignItems='center'
    justifyContent='space-between'
    {...props}
    pi='x24'
  >
    <Box fontScale='p2m' mb='x16' flexShrink={1} style={style}>
      {text}
    </Box>
    {children && (
      <Box mi='neg-x8' fontScale='p2m' flexShrink={0}>
        <Margins inline='x4'>{children}</Margins>
      </Box>
    )}
  </Box>
);
