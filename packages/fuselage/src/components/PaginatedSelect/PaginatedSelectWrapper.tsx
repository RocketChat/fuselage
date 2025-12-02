import type { Ref } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type PaginatedSelectWrapperProps = BoxProps;

const PaginatedSelectWrapper = forwardRef(function PaginatedSelectWrapper(
  props: PaginatedSelectWrapperProps,
  ref: Ref<HTMLDivElement>,
) {
  return <Box is='div' rcx-select__wrapper ref={ref} {...props} />;
});

export default PaginatedSelectWrapper;
