import { Box, type BoxProps } from '../Box';

export type ModalFooterProps = BoxProps;

const ModalFooter = ({
  children,
  justifyContent = 'end',
}: ModalFooterProps) => (
  <Box justifyContent={justifyContent} display='flex' alignItems='center' rcx-modal__footer>
    {children}
  </Box>
);

export default ModalFooter;
