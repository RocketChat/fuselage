import type { ComponentProps } from 'react';
import React from 'react';

import { Avatar } from '../Avatar';
import { Box } from '../Box';

export type ModalThumbProps = ComponentProps<typeof Avatar>;

export const ModalThumb = (props: ModalThumbProps) => (
  <Box>
    <Avatar size='x32' {...props} />
  </Box>
);
