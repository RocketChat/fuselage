import type { ReactNode } from 'react';
import React from 'react';

type MessageTimestampProps = { children: ReactNode };

export const MessageTimestamp = (props: MessageTimestampProps) => (
  <span className='rcx-box rcx-box--full rcx-message-header__time' {...props} />
);
