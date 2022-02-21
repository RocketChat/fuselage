import type { ComponentProps } from 'react';
import React from 'react';

import { Box } from '../Box';

export type ModalFooterProps = ComponentProps<typeof Box>;

export const ModalFooter = ({ children }: ModalFooterProps) => (
  <Box rcx-modal__footer>{children}</Box>
);
