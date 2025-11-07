import type { Ref } from 'react';
import { forwardRef } from 'react';

import Box, { type BoxProps } from '../Box/index.js';

export type SelectInputPlaceholderProps = BoxProps;

const SelectInputPlaceholder = forwardRef(function Placeholder(
  props: SelectInputPlaceholderProps,
  ref: Ref<HTMLOptionElement>,
) {
  return <Box is='option' rcx-input-box__placeholder ref={ref} {...props} />;
});

export default SelectInputPlaceholder;
