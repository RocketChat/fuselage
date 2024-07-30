import React from 'react';

import type { IconButtonProps } from '../../Button';
import { IconButton } from '../../Button';

/** @public */
export type MessageMetricsFollowingProps = {
  name: 'bell' | 'bell-off';
} & Omit<IconButtonProps, 'icon'>;

/** @public */
const MessageMetricsFollowing = ({
  name,
  ...props
}: MessageMetricsFollowingProps) => <IconButton {...props} small icon={name} />;

export default MessageMetricsFollowing;
