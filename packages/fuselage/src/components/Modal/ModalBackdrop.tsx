import type { ComponentProps } from 'react';
import React from 'react';

import { Box } from '../Box';

export type ModalBackdropProps = ComponentProps<typeof Box>;

export const ModalBackdrop = (props: ModalBackdropProps) => (
  <Box rcx-modal__backdrop {...props} />
);
