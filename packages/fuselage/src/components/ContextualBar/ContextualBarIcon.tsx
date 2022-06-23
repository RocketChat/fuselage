import type { ReactElement, ComponentProps } from 'react';
import React, { memo } from 'react';

import { Icon } from '../Icon';

const ContextualBarIcon = (
  props: ComponentProps<typeof Icon>
): ReactElement => <Icon {...props} pi='x2' size='x24' />;

export default memo(ContextualBarIcon);
