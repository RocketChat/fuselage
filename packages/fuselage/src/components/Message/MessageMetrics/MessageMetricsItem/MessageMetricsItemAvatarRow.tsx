import type { HTMLAttributes } from 'react';

type MessageMetricsItemProps = HTMLAttributes<HTMLDivElement>;

export const MessageMetricsItemAvatarRow = ({
  className,
  ...props
}: MessageMetricsItemProps) => (
  <div className={`rcx-message-metrics__avatar-row ${className}`} {...props} />
);
