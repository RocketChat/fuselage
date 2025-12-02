import type { BoxProps } from '../Box';
import { IconButton } from '../Button';

export type ModalCloseProps = BoxProps;

export const ModalClose = (props: ModalCloseProps) => (
  <IconButton aria-label='Close' {...props} small icon='cross' />
);
