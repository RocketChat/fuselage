import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';
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
    rcx-table__selection
    display='flex'
    alignItems='center'
    justifyContent='space-between'
    {...props}
    pi={24}
  >
    <Box fontScale='p2m' mb={16} flexShrink={1} style={style}>
      {text}
    </Box>
    {children && (
      <Box mi='neg-x8' fontScale='p2m' flexShrink={0}>
        <Margins inline='x4'>{children}</Margins>
      </Box>
    )}
  </Box>
);
