import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import { Label } from '../Label';

type WrapperProps = BoxProps;

export const Wrapper = (props: WrapperProps) => (
  <Box animated is={Label} rcx-input-box__wrapper {...props} />
);
