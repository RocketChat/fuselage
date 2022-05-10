import React from 'react';

import { IconButton } from '../../Button';

type MessageMetricsFollowingProps = { name: 'bell' | 'bell-off' };

export const MessageMetricsFollowing = ({
  name,
}: MessageMetricsFollowingProps) => (
  <IconButton {...{ color: 'info', small: true, icon: name }} />
);
