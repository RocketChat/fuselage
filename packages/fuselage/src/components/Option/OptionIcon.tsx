import type { IconName } from '@rocket.chat/icons';
import React from 'react';

import { Icon } from '../Icon';
import OptionColumn from './OptionColumn';

type OptionIconProps = {
  name: IconName;
};

const OptionIcon = ({ name }: OptionIconProps) => (
  <OptionColumn>
    <Icon size='x20' rcx-option__icon name={name} />
  </OptionColumn>
);

export default OptionIcon;
