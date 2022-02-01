import React, { createContext, FC } from 'react';

import { Box } from '../Box';
import { TableProps } from './Table';

export const TableHeadContext = createContext(false);

export const TableHead: FC<TableProps> = (props) => (
  <TableHeadContext.Provider value={true}>
    <Box is='thead' rcx-table__head {...props}></Box>
  </TableHeadContext.Provider>
);
