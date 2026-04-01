import type { ReactElement } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../../primitives';
import { IconButton, type IconButtonProps } from '../../Button';

export type MessageMetricsFollowingProps = {
  name: 'bell' | 'bell-off';
  badge?: ReactElement;
} & Omit<IconButtonProps, 'icon'>;

const FollowBadge = styled(RcxView, {
  name: 'MessageMetricsFollowBadge',
  position: 'absolute' as any,
  top: 0,
  right: 0,
  // @ts-ignore
  transform: 'translate(40%, -40%)',
});

const MessageMetricsFollowing = ({
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
    {badge && <FollowBadge>{badge}</FollowBadge>}
  </IconButton>
);

export default MessageMetricsFollowing;
