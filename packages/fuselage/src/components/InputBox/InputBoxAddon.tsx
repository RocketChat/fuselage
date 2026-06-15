import { forwardRef } from 'react';

import { Box, type BoxProps } from '../Box';

export type InputBoxAddonProps = BoxProps;

const InputBoxAddon = forwardRef<HTMLSpanElement, InputBoxAddonProps>(
  function InputBoxAddon(props, ref) {
    return <Box is='span' rcx-input-box__addon ref={ref} {...props} />;
  },
);

export default InputBoxAddon;
