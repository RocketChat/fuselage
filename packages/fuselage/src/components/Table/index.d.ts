import {
  ComponentProps,
  ForwardRefExoticComponent,
  JSXElementConstructor,
} from 'react';

import { Box } from '../Box';

type TableProps = ComponentProps<typeof Box> & {
  striped?: boolean;
  sticky?: boolean;
  fixed?: boolean;
};
type TableHeadProps = ComponentProps<typeof Box>;
type TableBodyProps = ComponentProps<typeof Box>;
type TableFootProps = ComponentProps<typeof Box>;
type TableRowProps = Omit<ComponentProps<typeof Box>, 'action'> & {
  action?: boolean;
  hasAction?: boolean;
};
type TableCellProps = ComponentProps<typeof Box> & {
  align?: 'start' | 'center' | 'end';
  clickable?: boolean;
};
type TableSelectionProps = ComponentProps<typeof Box> & {
  children?: JSXElementConstructor;
  text?: string;
};

type TableSelectionButtonProps = ComponentProps<typeof Box>;

export const Table: ForwardRefExoticComponent<TableProps>;
export const TableHead: ForwardRefExoticComponent<TableProps> &
  ForwardRefExoticComponent<TableHeadProps>;
export const TableBody: ForwardRefExoticComponent<TableProps> &
  ForwardRefExoticComponent<TableBodyProps>;
export const TableFoot: ForwardRefExoticComponent<TableProps> &
  ForwardRefExoticComponent<TableFootProps>;
export const TableSelection: ForwardRefExoticComponent<TableProps> &
  ForwardRefExoticComponent<TableSelectionProps>;
export const TableSelectionButton: ForwardRefExoticComponent<TableProps> &
  ForwardRefExoticComponent<TableSelectionButtonProps>;
export const TableRow: ForwardRefExoticComponent<TableProps> &
  ForwardRefExoticComponent<TableRowProps>;
export const TableCell: ForwardRefExoticComponent<TableProps> &
  ForwardRefExoticComponent<TableCellProps>;
