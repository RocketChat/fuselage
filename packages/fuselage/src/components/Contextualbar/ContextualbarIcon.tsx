import { memo } from 'react';

import { Icon, type IconProps } from '../Icon';

export type ContextualbarIconProps = IconProps;

const ContextualbarIcon = (props: ContextualbarIconProps) => (
  <Icon {...props} pi={2} size='x24' />
);

export default memo(ContextualbarIcon);
