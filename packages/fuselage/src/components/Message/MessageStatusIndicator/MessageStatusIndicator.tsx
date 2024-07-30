import type { AllHTMLAttributes, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import './MessageStatusIndicator.styles.scss';

type MessageStatusIndicatorProps = AllHTMLAttributes<HTMLDivElement>;

export const MessageStatusIndicator = forwardRef(
  (props: MessageStatusIndicatorProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div ref={ref} className='rcx-message-status-indicator' {...props} />
  )
);
