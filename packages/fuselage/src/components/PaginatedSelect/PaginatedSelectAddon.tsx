import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';

type PaginatedSelectAddonProps = ComponentProps<typeof Box>;

const PaginatedSelectAddon = forwardRef(function PaginatedSelectAddon(
  props: PaginatedSelectAddonProps,
  ref: Ref<HTMLDivElement>
) {
  return <Box is='div' rcx-select__addon ref={ref} {...props} />;
});

export default PaginatedSelectAddon;
