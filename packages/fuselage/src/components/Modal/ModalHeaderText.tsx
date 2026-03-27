import { Box, type BoxProps } from '../Box';

export type ModalHeaderTextProps = BoxProps;

const ModalHeaderText = ({ children, ...props }: ModalHeaderTextProps) => (
  <Box rcx-modal__header-text display='flex' flexDirection='column' flexGrow={1} flexShrink={1} {...props}>
    {children}
  </Box>
);

export default ModalHeaderText;
