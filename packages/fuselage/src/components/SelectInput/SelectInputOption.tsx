import type { Ref } from 'react';
import { forwardRef } from 'react';

import Box, { type BoxProps } from '../Box/index.js';

export type SelectInputOptionProps = BoxProps;

const SelectInputOption = forwardRef(function SelectInputOption(
  props: SelectInputOptionProps,
  ref: Ref<HTMLInputElement>,
) {
  return <Box is='option' rcx-input-box__option ref={ref} {...props} />;
});

export default SelectInputOption;
