import React, { ComponentProps } from 'react';

import { Icon } from '../../Icon';
import OptionColumn from './OptionColumn';

const OptionIcon = ({
  name,
}: {
  name: ComponentProps<typeof Icon>['name'];
}) => (
  <OptionColumn>
    <Icon size='x20' name={name} />
  </OptionColumn>
);

export default OptionIcon;
