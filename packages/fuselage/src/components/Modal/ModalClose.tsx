import React, { ComponentProps, FC } from 'react';

import { Box } from '..';
import { ActionButton } from '../Button';

export type ModalCloseProps = ComponentProps<typeof Box>;

export const ModalClose: FC<ModalCloseProps> = (props: ModalCloseProps) => (
  <ActionButton small ghost flexShrink={0} {...props} icon='cross' />
);
