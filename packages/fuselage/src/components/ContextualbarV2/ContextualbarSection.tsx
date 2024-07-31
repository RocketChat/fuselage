import type { ForwardedRef } from 'react';
import { forwardRef, memo } from 'react';

import { Box, type BoxProps } from '../Box';

type ContextualbarSectionProps = BoxProps;

const ContextualbarSection = forwardRef(function ContextualbarSection(
  props: ContextualbarSectionProps,
  ref: ForwardedRef<HTMLElement>
) {
  return (
    <Box
      ref={ref}
      rcx-vertical-bar__section
      p={16}
      display='flex'
      alignItems='center'
      flexGrow={1}
      borderBlockEndWidth='default'
      borderBlockColor='extra-light'
      {...props}
    />
  );
});

export default memo(ContextualbarSection);
