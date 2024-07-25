import type { ComponentProps, ReactElement } from 'react';
import React from 'react';

import { Button } from '../..';
import MessageMetricsItem from './MessageMetricsItem';

type MessageMetricsReplyProps = ComponentProps<typeof Button> & {
  badge?: ReactElement;
};

export const MessageMetricsReply = ({
  badge,
  children,
  ...props
}: MessageMetricsReplyProps) => (
  <MessageMetricsItem>
    <Button primary overflow='visible' position='relative' {...props} small>
      {children}
      {badge && (
        <div role='status' className={'rcx-message-metrics__item__reply-badge'}>
          {badge}
        </div>
      )}
    </Button>
  </MessageMetricsItem>
);
