import type { HTMLAttributes } from 'react';

import { prependClassName } from '../../../../helpers/prependClassName';

type MessageMetricsItemProps = HTMLAttributes<HTMLDivElement>;

export const MessageMetricsItem = ({
  className,
  ...props
}: MessageMetricsItemProps) => (
  <div
    className={prependClassName(className, 'rcx-message-metrics__item')}
    {...props}
  />
);
