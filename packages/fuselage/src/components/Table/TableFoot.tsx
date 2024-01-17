import React from 'react';

import type { TableProps } from './Table';
import Box from '../Box';

type TableFootProps = TableProps;

export const TableFoot = (props: TableFootProps) => (
  <Box is='tfoot' rcx-table__foot {...props} />
);
