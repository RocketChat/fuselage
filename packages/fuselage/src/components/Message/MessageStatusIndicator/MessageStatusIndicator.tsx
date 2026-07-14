import type { AllHTMLAttributes, RefAttributes } from 'react';

import './MessageStatusIndicator.styles.scss';

export type MessageStatusIndicatorProps = AllHTMLAttributes<HTMLDivElement> &
  RefAttributes<HTMLDivElement>;

function MessageStatusIndicator(props: MessageStatusIndicatorProps) {
  return <div className='rcx-message-status-indicator' {...props} />;
}

export default MessageStatusIndicator;
