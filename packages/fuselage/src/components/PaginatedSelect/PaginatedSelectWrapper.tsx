import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type PaginatedSelectWrapperProps = BoxProps;

const PaginatedSelectWrapper = forwardRef(function PaginatedSelectWrapper(
  props: PaginatedSelectWrapperProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return <Box is='div' rcx-select__wrapper ref={ref} {...props} />;
});

export default PaginatedSelectWrapper;
