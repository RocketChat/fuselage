import React, { useContext } from 'react';

import Box from '../Box';
import type { TableProps } from './Table';
import { TableHeadContext } from './TableHead';

type TableCellProps = TableProps & {
  align?: 'start' | 'center' | 'end' | 'justify' | object;
  clickable?: boolean;
};

export const TableCell = ({
  align,
  clickable,
  children,
  ...props
}: TableCellProps) => {
  const isInsideHead = useContext(TableHeadContext);

  const innerElement =
    children ??
    (!isInsideHead ? (
      <Box display='inline-block' is='hr' width='x14' borderWidth={1} />
    ) : undefined);

  return (
    <Box
      is={isInsideHead ? 'th' : 'td'}
      rcx-table__cell
      rcx-table__cell--align={align}
      rcx-table__cell--header={isInsideHead}
      rcx-table__cell--clickable={clickable}
      children={innerElement}
      {...props}
    />
  );
};
