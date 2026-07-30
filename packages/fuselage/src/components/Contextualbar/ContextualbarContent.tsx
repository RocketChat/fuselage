import type { RefAttributes } from 'react';
import { memo } from 'react';

import { Box, type BoxProps } from '../Box';

/**
 * @deprecated Use `ContextualbarV2ContentProps` instead.
 */
export type ContextualbarContentProps = Omit<BoxProps, 'ref'> &
  RefAttributes<HTMLElement>;

function ContextualbarContent(props: ContextualbarContentProps) {
  return (
    <Box
      rcx-vertical-bar__content
      paddingInline={24}
      display='flex'
      flexDirection='column'
      overflowY='hidden'
      height='full'
      {...props}
    />
  );
}

/**
 * @deprecated Use `ContextualbarV2Content` instead.
 */
export default memo(ContextualbarContent);
