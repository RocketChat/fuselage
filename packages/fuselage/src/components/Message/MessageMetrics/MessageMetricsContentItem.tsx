import React, { ReactNode } from 'react';

type MessageMetricsContentItemProps = {
  children?: ReactNode;
};

export const MessageMetricsContentItem = (
  props: MessageMetricsContentItemProps
) => <div className='rcx-message-metrics__content-item' {...props} />;
