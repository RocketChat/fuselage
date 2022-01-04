import React from 'react';

import { ThreadMessageIcon } from './ThreadMessageIcon';

export const ThreadMessageUnfollow = () => (
  <ThreadMessageIcon
    className='rcx-box rcx-box--full rcx-message-thread__icon rcx-message-thread__icon--unfollow'
    {...({ name: 'bell-off' } as any)}
  />
);
