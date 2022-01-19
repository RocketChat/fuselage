import React, { ComponentProps, FC } from 'react';

import { Icon } from '../Icon';

export type ModalIconProps = ComponentProps<typeof Icon>;

export const ModalIcon: FC<ModalIconProps> = ({
  size = 'x24',
  ...props
}: ModalIconProps) => <Icon {...props} size={size} />;
