import React from 'react';

import type { BoxProps } from '../Box';
import Box from '../Box';
import { Label } from '../Label';

/** @public */
export type WrapperProps = BoxProps;

/** @public */
const Wrapper = (props: WrapperProps) => (
  <Box animated is={Label} rcx-input-box__wrapper {...props} />
);

export default Wrapper;
