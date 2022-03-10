import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type SelectWrapperProps = ComponentProps<typeof Box>;

const SelectWrapper = forwardRef(function SelectWrapper(
  props: SelectWrapperProps,
  ref: Ref<HTMLDivElement>
) {
  return <Box is='div' rcx-select__wrapper ref={ref} {...props} />;
});

export default SelectWrapper;
