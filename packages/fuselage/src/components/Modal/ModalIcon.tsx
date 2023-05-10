import type { ComponentProps } from 'react';
import React from 'react';

import Box from '../Box';
import { Icon } from '../Icon';

export type ModalIconProps = ComponentProps<typeof Box> & {
  name: ComponentProps<typeof Icon>['name'];
};

export const ModalIcon = ({
  size = 'x20',
  name,
  alignItems = 'center',
  ...props
}: ModalIconProps) => (
  <Box {...props} display='flex' alignItems={alignItems}>
    <Icon mb='x4' name={name} size={size} />
  </Box>
);
