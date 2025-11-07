import type { ComponentProps, ReactElement } from 'react';

import { IconButton } from '../../Button/index.js';

type MessageMetricsFollowingProps = {
  name: 'bell' | 'bell-off';
  badge?: ReactElement;
} & Omit<ComponentProps<typeof IconButton>, 'icon'>;

export const MessageMetricsFollowing = ({
  name,
  badge,
  ...props
}: MessageMetricsFollowingProps) => (
  <IconButton
    position='relative'
    overflow='visible'
    {...props}
    small
    icon={name}
  >
    {badge && (
      <div className='rcx-message-metrics__item__follow-badge'>{badge}</div>
    )}
  </IconButton>
);
