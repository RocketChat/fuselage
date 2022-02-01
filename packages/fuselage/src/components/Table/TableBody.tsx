import React, { FC } from 'react';

import { Box } from '../Box';
import type { TableProps } from './Table';

export const TableBody: FC<TableProps> = (props) => (
  <Box is='tbody' rcx-table__body {...props} />
);
