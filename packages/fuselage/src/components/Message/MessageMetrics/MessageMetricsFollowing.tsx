import type { ComponentProps } from 'react';

import { IconButton } from '../../Button';

type MessageMetricsFollowingProps = {
  name: 'bell' | 'bell-off';
} & Omit<ComponentProps<typeof IconButton>, 'icon'>;

export const MessageMetricsFollowing = ({
  name,
  ...props
}: MessageMetricsFollowingProps) => <IconButton {...props} small icon={name} />;
