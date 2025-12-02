import { forwardRef, memo } from 'react';

import { Box, type BoxProps } from '../Box';

export type ContextualbarSectionProps = BoxProps;

const ContextualbarSection = forwardRef<HTMLElement, ContextualbarSectionProps>(
  function ContextualbarSection(props, ref) {
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
  },
);

export default memo(ContextualbarSection);
