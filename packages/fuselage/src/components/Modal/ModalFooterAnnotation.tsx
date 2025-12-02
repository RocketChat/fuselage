import type { BoxProps } from '../Box';
import Box from '../Box';

export type ModalFooterAnnotationProps = BoxProps;

export const ModalFooterAnnotation = ({
  children,
}: ModalFooterAnnotationProps) => (
  <Box rcx-modal__footer-annotation>{children}</Box>
);
