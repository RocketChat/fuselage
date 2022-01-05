import React, { FC, ComponentProps } from 'react';

import { Icon } from '../Icon';

const StatesIcon: FC<{
  name: ComponentProps<typeof Icon>['name'];
  variation?: 'danger' | 'success' | 'warning' | 'primary';
}> = ({ name, variation }) => (
  <Icon
    rcx-states__icon
    className={variation && `rcx-states__icon--${variation}`}
    name={name}
    size='x32'
  />
);

export default StatesIcon;
