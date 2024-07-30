import React from 'react';

import { Icon, type IconProps } from '../../../Icon';

/** @public */
export type MessageMetricsItemIconProps = {
  name: 'thread' | 'user' | 'clock' | 'discussion';
} & Omit<IconProps, 'name'>;

/** @public */
const MessageMetricsItemIcon = (props: MessageMetricsItemIconProps) => (
  <Icon size='x20' {...props} />
);

export default MessageMetricsItemIcon;
