import React, { ComponentProps, forwardRef, Ref } from 'react';

import { Box } from '../Box';

type PlaceholderProps = ComponentProps<typeof Box>;

export const Placeholder = forwardRef(function Placeholder(
  props: PlaceholderProps,
  ref: Ref<HTMLOptionElement>
) {
  return <Box is='option' rcx-input-box__placeholder ref={ref} {...props} />;
});
