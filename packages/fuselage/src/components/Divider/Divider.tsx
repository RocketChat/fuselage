import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

type DividerProps = ComponentProps<typeof Box> & {
  danger?: boolean;
  vertical?: boolean;
};

const Divider = ({ danger, vertical, ...props }: DividerProps) => (
  <Box
    is='hr'
    rcx-divider
    rcx-divider--vertical={vertical}
    rcx-divider--danger={danger}
    {...props}
  />
);
export { Divider };
