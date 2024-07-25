import React from 'react';

import type { AvatarProps } from '../Avatar';
import { Avatar } from '../Avatar';
import Box from '../Box';

export type ModalThumbProps = AvatarProps;

export const ModalThumb = (props: ModalThumbProps) => (
  <Box>
    <Avatar size='x28' {...props} />
  </Box>
);
