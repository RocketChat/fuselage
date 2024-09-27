import type { ComponentProps } from 'react';

import Box from '../Box';

export type TableProps = ComponentProps<typeof Box> & {
  striped?: boolean;
  sticky?: boolean;
  fixed?: boolean;
};

export const Table = ({
  striped,
  sticky,
  fixed = false,
  ...props
}: TableProps) => (
  <Box rcx-table__wrapper>
    <Box
      is='table'
      rcx-table
      rcx-table--fixed={fixed}
      rcx-table--sticky={sticky}
      rcx-table--striped={striped}
      {...props}
    />
  </Box>
);
