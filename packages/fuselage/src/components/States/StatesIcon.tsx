import type { ComponentProps } from 'react';
import React from 'react';

import { Icon } from '../Icon';

type StatesIconProps = {
  name: ComponentProps<typeof Icon>['name'];
  variation?: 'danger' | 'success' | 'warning' | 'primary';
};

const StatesIcon = ({ name, variation }: StatesIconProps) => (
  <Icon
    rcx-states__icon
    className={variation && `rcx-states__icon--${variation}`}
    name={name}
    size='x32'
  />
);

export default StatesIcon;
