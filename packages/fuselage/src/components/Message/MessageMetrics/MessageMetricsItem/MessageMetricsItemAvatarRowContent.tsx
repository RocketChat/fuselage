import type { HTMLAttributes } from 'react';
import React from 'react';

type MessageMetricsItemProps = HTMLAttributes<HTMLDivElement>;

export const MessageMetricsItemAvatarRowContent = ({
  className,
  ...props
}: MessageMetricsItemProps) => (
  <div
    className={`rcx-message-metrics__avatar-row__content ${className}`}
    {...props}
  />
);
