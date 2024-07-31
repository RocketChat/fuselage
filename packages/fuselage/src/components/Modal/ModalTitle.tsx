import type { BoxProps } from '../Box';
import Box from '../Box';

export type ModalTitleProps = BoxProps;

export const ModalTitle = ({ children, ...props }: ModalTitleProps) => (
  <Box is='h2' rcx-modal__title {...props}>
    {children}
  </Box>
);
