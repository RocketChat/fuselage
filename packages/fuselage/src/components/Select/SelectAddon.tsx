import type { Ref } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type AddonProps = BoxProps;

const SelectAddon = forwardRef(function SelectAddon(
  props: AddonProps,
  ref: Ref<HTMLDivElement>,
) {
  return <Box is='div' rcx-select__addon ref={ref} {...props} />;
});

export default SelectAddon;
