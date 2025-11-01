import type { ComponentProps } from 'react';

import Box from '../Box/index.js';

export type ModalBackdropProps = ComponentProps<typeof Box>;

export const ModalBackdrop = (props: ModalBackdropProps) => (
  <Box rcx-modal__backdrop {...props} />
);
