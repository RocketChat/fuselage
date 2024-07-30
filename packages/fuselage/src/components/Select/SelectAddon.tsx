import type { ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type AddonProps = BoxProps;

const SelectAddon = forwardRef(function SelectAddon(
  props: AddonProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return <Box is='div' rcx-select__addon ref={ref} {...props} />;
});

export default SelectAddon;
