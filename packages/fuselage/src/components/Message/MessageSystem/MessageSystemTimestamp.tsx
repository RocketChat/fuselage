import type { ReactNode } from 'react';
import React from 'react';

type MessageSystemTimestampProps = { children: ReactNode; title?: string };

export const MessageSystemTimestamp = (props: MessageSystemTimestampProps) => (
  <span className='rcx-box rcx-box--full rcx-message-system__time' {...props} />
);
