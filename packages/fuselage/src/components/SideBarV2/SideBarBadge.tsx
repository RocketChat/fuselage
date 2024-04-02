import type { ComponentProps } from 'react';
import React from 'react';

import { Badge } from '../Badge';

export const SideBarBadge = (props: ComponentProps<typeof Badge>) => (
  <Badge {...props} />
);
