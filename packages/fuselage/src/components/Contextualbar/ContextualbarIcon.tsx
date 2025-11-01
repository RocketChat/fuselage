import type { ReactElement, ComponentProps } from 'react';
import { memo } from 'react';

import { Icon } from '../index.js';

const ContextualbarIcon = (
  props: ComponentProps<typeof Icon>,
): ReactElement => <Icon {...props} pi={2} size='x24' />;

export default memo(ContextualbarIcon);
