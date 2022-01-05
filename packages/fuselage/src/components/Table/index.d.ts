import { ComponentProps, ForwardRefExoticComponent } from 'react';

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
};
type TableCellProps = ComponentProps<typeof Box> & {
  align?: 'start' | 'center' | 'end';
  clickable?: boolean;
};
export const Table: ForwardRefExoticComponent<TableProps> & {
  Head: ForwardRefExoticComponent<TableHeadProps>;
  Body: ForwardRefExoticComponent<TableBodyProps>;
  Foot: ForwardRefExoticComponent<TableFootProps>;
  Row: ForwardRefExoticComponent<TableRowProps>;
  Cell: ForwardRefExoticComponent<TableCellProps>;
};
