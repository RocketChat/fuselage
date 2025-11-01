import type { ComponentProps } from 'react';

import type Box from '../Box/index.js';
import { IconButton } from '../Button/index.js';

export type ModalCloseProps = ComponentProps<typeof Box>;

export const ModalClose = (props: ModalCloseProps) => (
  <IconButton aria-label='Close' {...props} small icon='cross' />
);
