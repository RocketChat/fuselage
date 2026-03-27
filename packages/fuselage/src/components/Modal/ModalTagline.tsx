import { Box, type BoxProps } from '../Box';

export type ModalTaglineProps = BoxProps;

const ModalTagline = ({ children, ...props }: ModalTaglineProps) => (
  <Box rcx-modal__tagline color='font-default' fontScale='c2' {...props}>
    {children}
  </Box>
);

export default ModalTagline;
