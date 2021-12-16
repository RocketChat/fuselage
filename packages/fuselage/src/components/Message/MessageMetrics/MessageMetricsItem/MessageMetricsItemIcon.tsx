import React, { FC } from 'react';

import { Icon } from '../../../..';

type IconProps = { name: 'thread' | 'user' | 'clock' | 'discussion' };

export const MessageMetricsItemIcon: FC<IconProps> = (props) => (
  <Icon {...{ size: 'x24' }} {...(props as any)} />
);
