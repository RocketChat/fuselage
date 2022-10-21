import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';

export type ModalFooterAnnotationProps = ComponentProps<typeof Box>;

export const ModalFooterAnnotation = ({
  children,
}: ModalFooterAnnotationProps) => (
  <Box rcx-modal__footer-annotation>{children}</Box>
);
