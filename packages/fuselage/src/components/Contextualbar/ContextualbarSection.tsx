import type { ForwardedRef } from 'react';
import React, { forwardRef, memo } from 'react';

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
      pi={24}
      pb={16}
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
