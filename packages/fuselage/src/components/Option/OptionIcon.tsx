import type { ComponentProps } from 'react';
import React from 'react';

import OptionColumn from './OptionColumn';
import { Icon } from '../Icon';

type OptionIconProps = {
  name: ComponentProps<typeof Icon>['name'];
};

const OptionIcon = ({ name }: OptionIconProps) => (
  <OptionColumn>
    <Icon size='x20' rcx-option__icon name={name} />
  </OptionColumn>
);

export default OptionIcon;
