import React, { useContext } from 'react';

import { Box } from '../Box';
import { TableProps } from './Table';
import { TableHeadContext } from './TableHead';

type TableCellProps = TableProps & {
  align?: 'start' | 'center' | 'end' | 'justify' | object;
  clickable?: boolean;
};

export const TableCell = ({ align, clickable, ...props }: TableCellProps) => {
  const isInsideHead = useContext(TableHeadContext);
  return (
    <Box
      is={isInsideHead ? 'th' : 'td'}
      rcx-table__cell
      rcx-table__cell--align={align}
      rcx-table__cell--header={isInsideHead}
      rcx-table__cell--clickable={clickable}
      {...props}
    />
  );
};
