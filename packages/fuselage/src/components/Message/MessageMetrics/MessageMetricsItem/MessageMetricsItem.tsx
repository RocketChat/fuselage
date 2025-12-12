import type { HTMLAttributes } from 'react';

import { prependClassName } from '../../../../helpers/prependClassName';

import MessageMetricsItemIcon from './MessageMetricsItemIcon';
import MessageMetricsItemLabel from './MessageMetricsItemLabel';

export type MessageMetricsItemProps = HTMLAttributes<HTMLDivElement>;

const MessageMetricsItem = Object.assign(
  ({ className, ...props }: MessageMetricsItemProps) => (
    <div
      className={prependClassName(className, 'rcx-message-metrics__item')}
      {...props}
    />
  ),
  {
    /** @deprecated prefer using named imports */
    Icon: MessageMetricsItemIcon,
    /** @deprecated prefer using named imports */
    Label: MessageMetricsItemLabel,
  },
);

export default MessageMetricsItem;
