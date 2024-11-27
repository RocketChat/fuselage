import type { ComponentProps, Ref } from 'react';
import { forwardRef } from 'react';

import Box from '../Box';

type AddonProps = ComponentProps<typeof Box>;

const SelectAddon = forwardRef(function SelectAddon(
  props: AddonProps,
  ref: Ref<HTMLDivElement>,
) {
  return <Box is='div' rcx-select__addon ref={ref} {...props} />;
});

export default SelectAddon;
