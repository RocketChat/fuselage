import type { ComponentProps } from 'react';
import React from 'react';

import type Box from '../Box';
import { ActionButton } from '../Button';

export type ModalCloseProps = ComponentProps<typeof Box>;

export const ModalClose = (props: ModalCloseProps) => (
  <ActionButton small ghost flexShrink={0} {...props} icon='cross' />
);
