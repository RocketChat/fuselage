import type { ForwardedRef } from 'react';
import { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

type AddonProps = BoxProps;

export const Addon = forwardRef(function Addon(
  props: AddonProps,
  ref: ForwardedRef<HTMLSpanElement>
) {
  return <Box is='span' rcx-input-box__addon ref={ref} {...props} />;
});
