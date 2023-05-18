import type { ComponentProps } from 'react';
import React from 'react';

import { Icon } from '../Icon';

type StatesIconProps = {
  variation?: 'danger' | 'success' | 'warning' | 'primary';
} & ComponentProps<typeof Icon>;

const StatesIcon = ({ variation, ...props }: StatesIconProps) => (
  <Icon
    {...props}
    rcx-states__icon
    className={variation && `rcx-states__icon--${variation}`}
    size='x32'
  />
);

export default StatesIcon;
