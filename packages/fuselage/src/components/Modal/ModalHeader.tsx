import { Box, type BoxProps } from '../Box';
import { Margins } from '../Margins';

export type ModalHeaderProps = BoxProps;

const ModalHeader = ({ children, ...props }: ModalHeaderProps) => (
  <Box rcx-modal__header is='header' {...props}>
    <Box rcx-modal__header-inner display='flex' flexWrap='nowrap'>
      <Margins all='x4'>{children}</Margins>
    </Box>
  </Box>
);

export default ModalHeader;
