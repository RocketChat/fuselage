import type { ComponentProps, ReactElement } from 'react';
import React, { memo } from 'react';

import Button from '../Button';

const ContextualBarButton = (
  props: ComponentProps<typeof Button>
): ReactElement => <Button small square flexShrink={0} {...props} />;

export default memo(ContextualBarButton);
