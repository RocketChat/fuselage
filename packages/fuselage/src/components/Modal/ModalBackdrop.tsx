import { Box, type BoxProps } from '../Box';

export type ModalBackdropProps = BoxProps;

const ModalBackdrop = (props: ModalBackdropProps) => (
  <Box
    rcx-modal__backdrop
    position='fixed'
    inset='x0'
    display='flex'
    flexDirection='column'
    backgroundColor='surface-overlay'
    {...props}
  />
);

export default ModalBackdrop;
