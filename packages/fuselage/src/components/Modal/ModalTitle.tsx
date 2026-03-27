import { Box, type BoxProps } from '../Box';

export type ModalTitleProps = BoxProps;

const ModalTitle = ({ children, ...props }: ModalTitleProps) => (
  <Box is='h2' rcx-modal__title flexGrow={1} flexShrink={1} color='font-default' fontScale='h2' {...props}>
    {children}
  </Box>
);

export default ModalTitle;
