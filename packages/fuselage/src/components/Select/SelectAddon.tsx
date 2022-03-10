import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import { Box } from '../Box';

type SelectAddonProps = ComponentProps<typeof Box>;

const SelectAddon = forwardRef(function SelectAddon(
  props: SelectAddonProps,
  ref: Ref<HTMLDivElement>
) {
  return <Box is='div' rcx-select__addon ref={ref} {...props} />;
});

export default SelectAddon;
