import React from 'react';

import { Icon } from '../../../..';

type MessageMetricsItemIconProps = {
  name: 'thread' | 'user' | 'clock' | 'discussion';
};

export const MessageMetricsItemIcon = (props: MessageMetricsItemIconProps) => (
  <Icon {...{ size: 'x24' }} {...(props as any)} />
);
