import React, { ComponentProps } from 'react';

import { Box } from '..';
import { ActionButton } from '../Button';

export type ModalCloseProps = ComponentProps<typeof Box>;

export const ModalClose = (props: ModalCloseProps) => (
  <ActionButton small ghost flexShrink={0} {...props} icon='cross' />
);
