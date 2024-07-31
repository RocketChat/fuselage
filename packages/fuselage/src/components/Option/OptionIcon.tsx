import type { IconName } from '@rocket.chat/icons';

import { Icon } from '../Icon';
import OptionColumn from './OptionColumn';

/** @public */
export type OptionIconProps = {
  name: IconName;
};

/** @public */
const OptionIcon = ({ name }: OptionIconProps) => (
  <OptionColumn>
    <Icon size='x20' rcx-option__icon name={name} />
  </OptionColumn>
);

export default OptionIcon;
