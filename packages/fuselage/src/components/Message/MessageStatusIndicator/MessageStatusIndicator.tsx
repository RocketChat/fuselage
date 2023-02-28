import type { AllHTMLAttributes, Ref } from 'react';
import React, { forwardRef } from 'react';

import './MessageStatusIndicator.styles.scss';

type MessageStatusIndicatorProps = AllHTMLAttributes<HTMLDivElement>;

export const MessageStatusIndicator = forwardRef(
  function MessageStatusIndicator(
    props: MessageStatusIndicatorProps,
    ref: Ref<HTMLDivElement>
  ) {
    return (
      <div ref={ref} className='rcx-message-status-indicator' {...props} />
    );
  }
);
