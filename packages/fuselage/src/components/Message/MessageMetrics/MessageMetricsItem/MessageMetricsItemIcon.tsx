import type { ComponentProps } from 'react';
import React from 'react';

import { Icon } from '../../../..';

type MessageMetricsItemIconProps = {
  name: 'thread' | 'user' | 'clock' | 'discussion';
} & Omit<ComponentProps<typeof Icon>, 'name'>;

export const MessageMetricsItemIcon = (props: MessageMetricsItemIconProps) => (
  <Icon size='x20' {...props} />
);
