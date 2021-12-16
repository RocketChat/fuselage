import React, { FC } from 'react';

import { ActionButton } from '../..';

type FollowingProps = { name: 'bell' | 'bell-off' };

export const MessageMetricsFollowing: FC<FollowingProps> = ({ name }) => (
  <ActionButton
    {...({ color: 'info', small: true, ghost: true, icon: name } as any)}
  />
);
