import type { BoxProps } from '../Box';
import Box from '../Box';

/** @public */
export type TableRowProps = Omit<BoxProps, 'action'> & {
  action?: boolean;
  hasAction?: boolean;
};

/** @public */
const TableRow = ({ action, selected, ...props }: TableRowProps) => (
  <Box
    is='tr'
    rcx-table__row
    rcx-table__row--selected={selected}
    rcx-table__row--action={action}
    {...props}
  />
);

export default TableRow;
