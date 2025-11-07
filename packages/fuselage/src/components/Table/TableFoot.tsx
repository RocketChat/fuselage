import Box from '../Box/index.js';

import type { TableProps } from './Table.js';

type TableFootProps = TableProps;

export const TableFoot = (props: TableFootProps) => (
  <Box is='tfoot' rcx-table__foot {...props} />
);
