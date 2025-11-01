import type { ComponentProps, ReactElement } from 'react';
import { memo } from 'react';

import { Button } from '../index.js';

const ContextualbarButton = (
  props: ComponentProps<typeof Button>,
): ReactElement => <Button {...props} />;

export default memo(ContextualbarButton);
