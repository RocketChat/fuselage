import React from 'react';

import { Icon, type IconProps } from '../../../Icon';

type MessageMetricsItemIconProps = {
  name: 'thread' | 'user' | 'clock' | 'discussion';
} & Omit<IconProps, 'name'>;

export const MessageMetricsItemIcon = (props: MessageMetricsItemIconProps) => (
  <Icon size='x20' {...props} />
);
