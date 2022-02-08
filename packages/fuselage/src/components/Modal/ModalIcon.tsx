import React, { ComponentProps } from 'react';

import { Icon } from '../Icon';

export type ModalIconProps = ComponentProps<typeof Icon>;

export const ModalIcon = ({ size = 'x24', ...props }: ModalIconProps) => (
  <Icon {...props} size={size} />
);
