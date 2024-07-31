import { createContext } from 'react';

import Box from '../Box';
import type { TableProps } from './Table';

/** @internal */
export const TableHeadContext = createContext(false);

/** @public */
export type TableHeadProps = TableProps;

/** @public */
const TableHead = (props: TableHeadProps) => (
  <TableHeadContext.Provider value={true}>
    <Box is='thead' rcx-table__head {...props} />
  </TableHeadContext.Provider>
);

export default TableHead;
