import type { IconProps } from '../../../..';
import { Icon } from '../../../..';

type MessageMetricsItemIconProps = {
  name: 'thread' | 'user' | 'clock' | 'discussion';
} & Omit<IconProps, 'name'>;

export const MessageMetricsItemIcon = (props: MessageMetricsItemIconProps) => (
  <Icon size='x20' {...props} />
);
