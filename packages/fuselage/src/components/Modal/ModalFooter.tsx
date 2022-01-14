import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';

type ModalFooterProps = ComponentProps<typeof Box>;

export const ModalFooter: FC<ModalFooterProps> = ({
  children,
}: ModalFooterProps) => <Box rcx-modal__footer>{children}</Box>;
