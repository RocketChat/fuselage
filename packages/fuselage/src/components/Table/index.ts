import { Table } from './Table';
import { TableBody } from './TableBody';
import { TableCell } from './TableCell';
import { TableFoot } from './TableFoot';
import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

export * from './Table';
export * from './TableBody';
export * from './TableCell';
export * from './TableFoot';
export * from './TableHead';
export * from './TableRow';
export * from './TableRow';
export * from './TableSelection';
export * from './TableSelectionButton';

export default Object.assign(Table, {
  Head: TableHead,
  Body: TableBody,
  Foot: TableFoot,
  Row: TableRow,
  Cell: TableCell,
});
