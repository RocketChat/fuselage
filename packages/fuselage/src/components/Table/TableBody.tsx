import React from 'react';

import type { TableProps } from './Table';
import Box from '../Box';

type TableBodyProps = TableProps;

export const TableBody = (props: TableBodyProps) => (
  <Box is='tbody' rcx-table__body {...props} />
);
