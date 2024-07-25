import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type TableRowProps = Omit<BoxProps, 'action'> & {
  action?: boolean;
  hasAction?: boolean;
};

export const TableRow = ({ action, selected, ...props }: TableRowProps) => (
  <Box
    is='tr'
    rcx-table__row
    rcx-table__row--selected={selected}
    rcx-table__row--action={action}
    {...props}
  />
);
