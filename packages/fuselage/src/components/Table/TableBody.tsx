import Box from '../Box';
import type { TableProps } from './Table';

/** @public */
export type TableBodyProps = TableProps;

/** @public */
const TableBody = (props: TableBodyProps) => (
  <Box is='tbody' rcx-table__body {...props} />
);

export default TableBody;
