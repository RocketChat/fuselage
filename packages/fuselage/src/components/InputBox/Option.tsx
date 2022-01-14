import React, { ComponentProps, forwardRef, Ref } from 'react';

import { Box } from '../Box';

type OptionProps = ComponentProps<typeof Box>;

export const Option = forwardRef<HTMLInputElement, OptionProps>(function Option(
  props: OptionProps,
  ref: Ref<HTMLInputElement>
) {
  return <Box is='option' rcx-input-box__option ref={ref} {...props} />;
});
