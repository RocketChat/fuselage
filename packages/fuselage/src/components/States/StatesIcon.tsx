import React, { FC, ComponentProps } from 'react';

import { Icon } from '../Icon';

const StatesIcon: FC<{
  name: ComponentProps<typeof Icon>['name'];
  variation?: string;
}> = ({ name, variation = '' }) => {
  const variations: { [key: string]: string } = {
    danger: 'danger-600',
  };

  return (
    <div className='rcx-states__icon'>
      <Icon name={name} size='x32' color={variations[`${variation}`]} />
    </div>
  );
};

export default StatesIcon;
