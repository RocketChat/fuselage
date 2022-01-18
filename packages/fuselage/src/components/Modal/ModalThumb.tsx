import React, { ComponentProps, FC } from 'react';

import { Avatar } from '../Avatar';
import { Box } from '../Box';

export type ModalThumbProps = ComponentProps<typeof Avatar>;

export const ModalThumb: FC<ModalThumbProps> = (props: ModalThumbProps) => (
  <Box>
    <Avatar size='x32' {...props} />
  </Box>
);
