import type { ComponentProps } from 'react';

import Message from '../index.js';

type ThreadMessageProps = ComponentProps<typeof Message>;

export const ThreadMessage = (props: ThreadMessageProps) => (
  <Message {...({ className: 'rcx-message-thread' } as any)} {...props} />
);
