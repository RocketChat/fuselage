import type { BoxProps } from '../Box';
import Box from '../Box';
import Scrollable from '../Scrollable';

export type ModalContentProps = BoxProps & {
  onScrollContent?: ((touching: { top: boolean }) => void) | undefined;
};

export const ModalContent = ({
  children,
  onScrollContent,
  ...props
}: ModalContentProps) => (
  <Scrollable vertical onScrollContent={onScrollContent}>
    <Box rcx-modal__content>
      <Box rcx-modal__content-wrapper mi={24} {...props}>
        {children}
      </Box>
    </Box>
  </Scrollable>
);
