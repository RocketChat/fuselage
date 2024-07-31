import type { ReactElement } from 'react';
import { memo } from 'react';

import { Icon, type IconProps } from '../Icon';

type ContextualbarIconProps = IconProps;

const ContextualbarIcon = (props: ContextualbarIconProps): ReactElement => (
  <Icon {...props} pi={2} size='x24' />
);

export default memo(ContextualbarIcon);
