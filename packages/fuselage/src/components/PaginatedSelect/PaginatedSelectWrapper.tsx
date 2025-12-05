import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

type PaginatedSelectWrapperProps = BoxProps;

const PaginatedSelectWrapper = forwardRef<
  HTMLDivElement,
  PaginatedSelectWrapperProps
>(function PaginatedSelectWrapper(props, ref) {
  return <Box is='div' rcx-select__wrapper ref={ref} {...props} />;
});

export default PaginatedSelectWrapper;
