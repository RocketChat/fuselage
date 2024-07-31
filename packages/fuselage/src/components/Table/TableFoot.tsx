import Box from '../Box';
import type { TableProps } from './Table';

/** @public */
export type TableFootProps = TableProps;

/** @public */
const TableFoot = (props: TableFootProps) => (
  <Box is='tfoot' rcx-table__foot {...props} />
);

export default TableFoot;
