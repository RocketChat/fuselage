import type { ComponentProps } from 'react';

import Box from '../Box/index.js';

export type ModalHeaderTextProps = ComponentProps<typeof Box>;

export const ModalHeaderText = ({
  children,
  ...props
}: ModalHeaderTextProps) => (
  <Box rcx-modal__header-text {...props}>
    {children}
  </Box>
);
