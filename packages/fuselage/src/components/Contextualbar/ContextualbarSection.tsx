import type { RefAttributes } from 'react';
import { memo } from 'react';

import { Box, type BoxProps } from '../Box';

/**
 * @deprecated Use `ContextualbarV2SectionProps` instead.
 */
export type ContextualbarSectionProps = Omit<BoxProps, 'ref'> &
  RefAttributes<HTMLElement>;

function ContextualbarSection(props: ContextualbarSectionProps) {
  return (
    <Box
      rcx-vertical-bar__section
      paddingInline={24}
      paddingBlock={16}
      display='flex'
      alignItems='center'
      flexGrow={1}
      borderBlockEndWidth='default'
      borderBlockColor='extra-light'
      {...props}
    />
  );
}

/**
 * @deprecated Use `ContextualbarV2Section` instead.
 */
export default memo(ContextualbarSection);
