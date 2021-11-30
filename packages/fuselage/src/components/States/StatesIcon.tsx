import React, { FC, ComponentProps } from 'react';

import { Icon } from '../Icon';

const StatesIcon: FC<{
  name: ComponentProps<typeof Icon>['name'];
  // variation?: 'danger';
}> = ({ name }) => (
  <div className='rcx-states__icon'>
    <Icon name={name} size='x32' />
  </div>
);

export default StatesIcon;
