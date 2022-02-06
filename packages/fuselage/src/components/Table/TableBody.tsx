import React from 'react';

import { Box } from '../Box';
import type { TableProps } from './Table';

type TableBodyProps = TableProps;

export const TableBody = (props: TableBodyProps) => (
  <Box is='tbody' rcx-table__body {...props} />
);
