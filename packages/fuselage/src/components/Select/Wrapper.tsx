import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';

export type SelectOption = readonly [
  value: string,
  label: string,
  selected?: boolean
];

type WrapperProps = ComponentProps<typeof Box>;

const Wrapper = forwardRef(function Wrapper(
  props: WrapperProps,
  ref: Ref<HTMLDivElement>
) {
  return <Box is='div' rcx-select__wrapper ref={ref} {...props} />;
});

export default Wrapper;
