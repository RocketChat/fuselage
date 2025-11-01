import type { ComponentProps } from 'react';

import { Avatar } from '../Avatar/index.js';
import Box from '../Box/index.js';

export type ModalThumbProps = ComponentProps<typeof Avatar>;

export const ModalThumb = (props: ModalThumbProps) => (
  <Box>
    <Avatar size='x28' {...props} />
  </Box>
);
