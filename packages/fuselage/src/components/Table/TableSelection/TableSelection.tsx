import type { ComponentProps } from 'react';

import Box from '../../Box';
import Margins from '../../Margins';

type TableSelectionProps = ComponentProps<typeof Box> & {
  text?: string;
};

export const TableSelection = ({
  children,
  text,
  ...props
}: TableSelectionProps) => (
  <Box
    rcx-table__selection
    display='flex'
    alignItems='center'
    justifyContent='space-between'
    pi={24}
    elevation='2'
    {...props}
  >
    <Box fontScale='p2b' mb={16} flexShrink={1} withTruncatedText>
      {text}
    </Box>
    {children && (
      <Box mi='neg-x8' fontScale='p2m' flexShrink={0}>
        <Margins inline='x4'>{children}</Margins>
      </Box>
    )}
  </Box>
);
