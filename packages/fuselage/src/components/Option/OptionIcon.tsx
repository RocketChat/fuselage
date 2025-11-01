import { Icon, type IconProps } from '../Icon/index.js';

import OptionColumn from './OptionColumn.js';

export type OptionIconProps = IconProps;

const OptionIcon = (props: OptionIconProps) => (
  <OptionColumn>
    <Icon size='x20' rcx-option__icon {...props} />
  </OptionColumn>
);

export default OptionIcon;
