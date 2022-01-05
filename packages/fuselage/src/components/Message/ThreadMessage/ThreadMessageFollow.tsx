import React from 'react';

import { ThreadMessageIcon } from './ThreadMessageIcon';

export const ThreadMessageFollow = () => (
  <ThreadMessageIcon
    className='rcx-box rcx-box--full rcx-message-thread__icon rcx-message-thread__icon--follow'
    {...({ name: 'bell' } as any)}
  />
);
