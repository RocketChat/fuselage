import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type AddonProps = BoxProps;

const SelectAddon = forwardRef<HTMLDivElement, AddonProps>(
  function SelectAddon(props, ref) {
    return <Box is='div' rcx-select__addon ref={ref} {...props} />;
  },
);

export default SelectAddon;
