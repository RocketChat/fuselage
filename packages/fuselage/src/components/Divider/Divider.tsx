import React, { ComponentProps } from 'react';

import { Box } from '../Box';

type DividerProps = ComponentProps<typeof Box>;

const Divider = (props: DividerProps) => <Box is='hr' rcx-divider {...props} />;
export { Divider };
