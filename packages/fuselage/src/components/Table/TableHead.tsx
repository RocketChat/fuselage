import React, { createContext } from 'react';

import { Box } from '../Box';
import { TableProps } from './Table';

export const TableHeadContext = createContext(false);

type TableHeadProps = TableProps;

export const TableHead = (props: TableHeadProps) => (
  <TableHeadContext.Provider value={true}>
    <Box is='thead' rcx-table__head {...props} />
  </TableHeadContext.Provider>
);
