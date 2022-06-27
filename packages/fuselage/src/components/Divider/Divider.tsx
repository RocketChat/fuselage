import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

type DividerProps = ComponentProps<typeof Box> & {
  danger?: boolean;
};

const Divider = ({ danger, ...props }: DividerProps) => (
  <Box is='hr' rcx-divider rcx-divider--danger={danger} {...props} />
);
export { Divider };
