import React, { forwardRef, ComponentProps, Ref } from 'react';

import { Box } from '../Box';

export type SelectOptions = readonly [value: string, label: string][];

type AddonProps = ComponentProps<typeof Box>;

const SelectAddon = forwardRef(function SelectAddon(
  props: AddonProps,
  ref: Ref<HTMLDivElement>
) {
  return <Box is='div' rcx-select__addon ref={ref} {...props} />;
});

export default SelectAddon;
