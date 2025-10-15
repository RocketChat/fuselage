import type { Ref } from 'react';
import { forwardRef } from 'react';

import Box, { type BoxProps } from '../Box';

export type InputBoxAddonProps = BoxProps;

const InputBoxAddon = forwardRef(function InputBoxAddon(
  props: InputBoxAddonProps,
  ref: Ref<HTMLSpanElement>,
) {
  return <Box is='span' rcx-input-box__addon ref={ref} {...props} />;
});

export default InputBoxAddon;
