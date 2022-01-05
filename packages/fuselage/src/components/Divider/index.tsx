import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';

type DividerProps = ComponentProps<typeof Box>;

const Divider: FC<DividerProps> = (props) => (
  <Box is='hr' rcx-divider {...props} />
);
export { Divider };
