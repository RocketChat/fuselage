import type { HTMLAttributes } from 'react';

import { prependClassName } from '../../../../helpers/prependClassName';

type MessageMetricsItemProps = HTMLAttributes<HTMLDivElement>;

export const MessageMetricsItemAvatarRowContent = ({
  className,
  ...props
}: MessageMetricsItemProps) => (
  <div
    className={prependClassName(
      className,
      'rcx-message-metrics__avatar-row__content'
    )}
    {...props}
  />
);
