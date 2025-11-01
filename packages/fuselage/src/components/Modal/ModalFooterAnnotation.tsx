import type { ComponentProps } from 'react';

import Box from '../Box/index.js';

export type ModalFooterAnnotationProps = ComponentProps<typeof Box>;

export const ModalFooterAnnotation = ({
  children,
}: ModalFooterAnnotationProps) => (
  <Box rcx-modal__footer-annotation>{children}</Box>
);
