import type { ComponentProps } from 'react';
import React from 'react';

import { Box } from '../Box';
import { Label } from '../Label';

export const Wrapper = (props: ComponentProps<typeof Box>) => (
  <Box animated is={Label} rcx-input-box__wrapper {...props} />
);
