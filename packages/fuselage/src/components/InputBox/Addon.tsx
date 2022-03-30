import type { ComponentProps, Ref } from 'react';
import React, { forwardRef } from 'react';

import Box from '../Box';

type AddonProps = ComponentProps<typeof Box>;

export const Addon = forwardRef(function Addon(
  props: AddonProps,
  ref: Ref<HTMLSpanElement>
) {
  return <Box is='span' rcx-input-box__addon ref={ref} {...props} />;
});
