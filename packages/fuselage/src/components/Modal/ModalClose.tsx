import type { ComponentProps } from 'react';
import React from 'react';

import type Box from '../Box';
import { IconButton } from '../Button';

export type ModalCloseProps = ComponentProps<typeof Box>;

export const ModalClose = (props: ModalCloseProps) => (
  <IconButton small {...props} icon='cross' />
);
