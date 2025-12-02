import type { ReactElement } from 'react';
import { memo } from 'react';

import type { IconProps } from '..';
import { Icon } from '..';

const ContextualbarIcon = (props: IconProps): ReactElement => (
  <Icon {...props} pi={2} size='x24' />
);

export default memo(ContextualbarIcon);
