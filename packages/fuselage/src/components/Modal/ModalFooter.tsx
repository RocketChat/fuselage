import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';

export type ModalFooterProps = ComponentProps<typeof Box>;

export const ModalFooter: FC<ModalFooterProps> = ({
  children,
}: ModalFooterProps) => <Box rcx-modal__footer>{children}</Box>;
