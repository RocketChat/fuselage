import React from 'react';

import { IconButton } from '../../Button';

type MessageMetricsFollowingProps = { name: 'bell' | 'bell-off' };

export const MessageMetricsFollowing = ({
  name,
}: MessageMetricsFollowingProps) => <IconButton small icon={name} />;
