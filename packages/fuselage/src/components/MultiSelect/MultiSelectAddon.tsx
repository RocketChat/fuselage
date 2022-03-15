import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type MultiSelectAddonProps = ComponentProps<typeof Box>;

const MultiSelectAddon = forwardRef(function MultiSelectAddon(
  props: MultiSelectAddonProps,
  ref: Ref<HTMLDivElement>
) {
  return (
    <Box
      rcx-multi-select__addon
      flexGrow={0}
      flexShrink={0}
      marginInline={4}
      ref={ref}
      {...props}
    />
  );
});

export default MultiSelectAddon;
