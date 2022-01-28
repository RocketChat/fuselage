import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';

type TableRowProps = Omit<ComponentProps<typeof Box>, 'action'> & {
  action?: boolean;
  hasAction?: boolean;
};

export const TableRow: FC<TableRowProps> = ({ action, selected, ...props }) => (
  <Box
    is='tr'
    rcx-table__row
    rcx-table__row--selected={selected}
    rcx-table__row--action={action}
    {...props}
  />
);
