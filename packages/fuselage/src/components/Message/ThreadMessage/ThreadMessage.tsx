import React, { ComponentProps, FC } from 'react';

import Message from '..';

export const ThreadMessage: FC<ComponentProps<typeof Message>> = (props) => (
  <Message {...({ className: 'rcx-message--thread' } as any)} {...props} />
);
