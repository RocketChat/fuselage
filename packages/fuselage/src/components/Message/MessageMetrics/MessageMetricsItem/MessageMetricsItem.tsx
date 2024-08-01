import type { HTMLAttributes } from 'react';

type MessageMetricsItemProps = HTMLAttributes<HTMLDivElement>;

export const MessageMetricsItem = ({
  className,
  ...props
}: MessageMetricsItemProps) => (
  <div className={`rcx-message-metrics__item ${className}`} {...props} />
);
