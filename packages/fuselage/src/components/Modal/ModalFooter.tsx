import type { BoxProps } from '../Box';
import Box from '../Box';

export type ModalFooterProps = BoxProps;

export const ModalFooter = ({
  children,
  justifyContent = 'end',
}: ModalFooterProps) => (
  <Box justifyContent={justifyContent} rcx-modal__footer>
    {children}
  </Box>
);
