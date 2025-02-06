import type { ComponentProps } from 'react';

import { Icon } from '../Icon';

import OptionColumn from './OptionColumn';

type OptionIconProps = ComponentProps<typeof Icon>;

const OptionIcon = (props: OptionIconProps) => (
  <OptionColumn>
    <Icon size='x20' rcx-option__icon {...props} />
  </OptionColumn>
);

export default OptionIcon;
