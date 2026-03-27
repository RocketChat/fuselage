import { Icon, type IconProps } from '../Icon';

import OptionColumn from './OptionColumn';

export type OptionIconProps = IconProps;

// .rcx-option__icon — color: inherit
const OptionIcon = (props: OptionIconProps) => (
  <OptionColumn>
    <Icon size='x20' {...props} color='inherit' />
  </OptionColumn>
);

export default OptionIcon;
