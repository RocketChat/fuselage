import type { ComponentProps } from 'react';

import type Box from '../Box';
import { IconButton } from '../Button';

export type ModalCloseProps = ComponentProps<typeof Box>;

export const ModalClose = (props: ModalCloseProps) => (
  <IconButton aria-label='Close' {...props} small icon='cross' />
);
