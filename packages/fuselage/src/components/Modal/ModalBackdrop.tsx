import type { BoxProps } from '../Box';
import Box from '../Box';

export type ModalBackdropProps = BoxProps;

export const ModalBackdrop = (props: ModalBackdropProps) => (
  <Box rcx-modal__backdrop {...props} />
);
