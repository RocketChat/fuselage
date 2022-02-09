import React from 'react';

import { Box } from '../Box';
import { TableProps } from './Table';

type TableFootProps = TableProps;

export const TableFoot = (props: TableFootProps) => (
  <Box is='tfoot' rcx-table__foot {...props} />
);
