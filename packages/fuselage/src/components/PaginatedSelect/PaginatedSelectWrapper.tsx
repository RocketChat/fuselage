import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type PaginatedSelectWrapperProps = ComponentProps<typeof Box>;

const PaginatedSelectWrapper = forwardRef(function PaginatedSelectWrapper(
  props: PaginatedSelectWrapperProps,
  ref: Ref<HTMLDivElement>
) {
  return <Box is='div' rcx-select__wrapper ref={ref} {...props} />;
});

export default PaginatedSelectWrapper;
