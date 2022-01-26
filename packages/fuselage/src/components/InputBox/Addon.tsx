import React, { ComponentProps, forwardRef } from 'react';

import { Box } from '../Box';

export const Addon = forwardRef<HTMLInputElement, ComponentProps<typeof Box>>(
  (props, ref) => <Box is='span' rcx-input-box__addon ref={ref} {...props} />
);
