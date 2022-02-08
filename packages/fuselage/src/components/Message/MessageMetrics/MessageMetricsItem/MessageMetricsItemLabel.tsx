import React, { ReactNode } from 'react';

type MessageMetricsItemLabelProps = {
  children?: ReactNode;
};

export const MessageMetricsItemLabel = (
  props: MessageMetricsItemLabelProps
) => <div className='rcx-message-metrics__item-label' {...props} />;
