import type { ReactElement, ComponentProps } from 'react';
import React, { memo } from 'react';

import { Icon } from '..';

const ContextualbarIcon = (
  props: ComponentProps<typeof Icon>
): ReactElement => <Icon {...props} pi={2} size='x24' />;

export default memo(ContextualbarIcon);
