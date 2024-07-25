import React from 'react';

import type { IconButtonProps } from '../../Button';
import { IconButton } from '../../Button';

type MessageMetricsFollowingProps = {
  name: 'bell' | 'bell-off';
} & Omit<IconButtonProps, 'icon'>;

export const MessageMetricsFollowing = ({
  name,
  ...props
}: MessageMetricsFollowingProps) => <IconButton {...props} small icon={name} />;
