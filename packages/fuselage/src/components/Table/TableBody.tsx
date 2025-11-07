import Box from '../Box/index.js';

import type { TableProps } from './Table.js';

type TableBodyProps = TableProps;

export const TableBody = (props: TableBodyProps) => (
  <Box is='tbody' rcx-table__body {...props} />
);
