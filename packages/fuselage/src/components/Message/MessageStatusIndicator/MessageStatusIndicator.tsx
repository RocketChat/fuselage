import React, { AllHTMLAttributes, forwardRef } from 'react';

import './MessageStatusIndicator.styles.scss';

export const MessageStatusIndicator = forwardRef<
  HTMLDivElement,
  AllHTMLAttributes<HTMLDivElement>
>((props, ref) => (
  <div ref={ref} className='rcx-message-status-indicator' {...props} />
));
