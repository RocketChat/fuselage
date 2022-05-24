import type { ComponentProps } from 'react';
import React from 'react';

import Message from '..';

type ThreadMessageProps = ComponentProps<typeof Message>;

export const ThreadMessage = (props: ThreadMessageProps) => (
  <Message {...({ className: 'rcx-message-thread' } as any)} {...props} />
);
