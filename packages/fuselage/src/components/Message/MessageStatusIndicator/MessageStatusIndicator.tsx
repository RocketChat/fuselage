import type { AllHTMLAttributes, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import './MessageStatusIndicator.styles.scss';

/** @public */
export type MessageStatusIndicatorProps = AllHTMLAttributes<HTMLDivElement>;

/** @public */
const MessageStatusIndicator = forwardRef(function MessageStatusIndicator(
  props: MessageStatusIndicatorProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return <div ref={ref} className='rcx-message-status-indicator' {...props} />;
});

export default MessageStatusIndicator;
