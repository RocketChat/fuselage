import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type PlaceholderProps = BoxProps;

export const Placeholder = forwardRef(function Placeholder(
  props: PlaceholderProps,
  ref: Ref<HTMLOptionElement>
) {
  return <Box is='option' rcx-input-box__placeholder ref={ref} {...props} />;
});
