import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';

type ModalTitleProps = ComponentProps<typeof Box>;

export const ModalTitle: FC<ModalTitleProps> = ({
  children,
  ...props
}: ModalTitleProps) => (
  <Box rcx-modal__title {...props}>
    {children}
  </Box>
);
