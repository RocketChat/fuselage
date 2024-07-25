import type { Ref } from 'react';
import React, { forwardRef } from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';

export type OptionProps = BoxProps;

export const Option = forwardRef(function Option(
  props: OptionProps,
  ref: Ref<HTMLInputElement>
) {
  return <Box is='option' rcx-input-box__option ref={ref} {...props} />;
});
