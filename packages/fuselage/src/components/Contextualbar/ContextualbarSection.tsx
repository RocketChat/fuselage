import React, { forwardRef, memo } from 'react';

import { Box, type BoxProps } from '../Box';

type ContextualbarSectionProps = BoxProps;

const ContextualbarSection = forwardRef<HTMLElement, ContextualbarSectionProps>(
  function ContextualbarSection(props, ref) {
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
  }
);

export default memo(ContextualbarSection);
