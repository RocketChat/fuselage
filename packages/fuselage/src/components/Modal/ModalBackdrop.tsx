import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';

export type ModalBackdropProps = ComponentProps<typeof Box>;

export const ModalBackdrop: FC<ModalBackdropProps> = (
  props: ModalBackdropProps
) => <Box rcx-modal__backdrop {...props} />;
