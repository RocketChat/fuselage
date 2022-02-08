import React, { AllHTMLAttributes, forwardRef, Ref } from 'react';

import './MessageStatusIndicator.styles.scss';

type MessageStatusIndicatorProps = AllHTMLAttributes<HTMLDivElement>;

export const MessageStatusIndicator = forwardRef(
  (props: MessageStatusIndicatorProps, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} className='rcx-message-status-indicator' {...props} />
  )
);
