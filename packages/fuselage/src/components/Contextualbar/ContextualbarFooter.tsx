import type { RefAttributes } from 'react';
import { memo } from 'react';

import { Box } from '..';
import type { BoxProps } from '../Box';

export type ContextualbarFooterProps = Omit<BoxProps, 'ref'> &
  RefAttributes<HTMLElement>;

function ContextualbarFooter(props: ContextualbarFooterProps) {
  return <Box p={24} {...props} />;
}

export default memo(ContextualbarFooter);
