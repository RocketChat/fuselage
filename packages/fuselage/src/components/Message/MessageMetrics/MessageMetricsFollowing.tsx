import React from 'react';

import { ActionButton } from '../..';

type MessageMetricsFollowingProps = { name: 'bell' | 'bell-off' };

export const MessageMetricsFollowing = ({
  name,
}: MessageMetricsFollowingProps) => (
  <ActionButton
    {...({ color: 'info', small: true, ghost: true, icon: name } as any)}
  />
);
