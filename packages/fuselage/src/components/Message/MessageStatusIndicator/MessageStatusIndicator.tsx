import type { AllHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import './MessageStatusIndicator.styles.scss';

export type MessageStatusIndicatorProps = AllHTMLAttributes<HTMLDivElement>;

const MessageStatusIndicator = forwardRef<
  HTMLDivElement,
  MessageStatusIndicatorProps
>(function MessageStatusIndicator(props, ref) {
  return <div ref={ref} className='rcx-message-status-indicator' {...props} />;
});

export default MessageStatusIndicator;
