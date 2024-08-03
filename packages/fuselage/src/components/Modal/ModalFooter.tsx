import type { ComponentProps } from 'react';

import Box from '../Box';

export type ModalFooterProps = ComponentProps<typeof Box>;

export const ModalFooter = ({
  children,
  justifyContent = 'end',
}: ModalFooterProps) => (
  <Box justifyContent={justifyContent} rcx-modal__footer>
    {children}
  </Box>
);
