import React, { HTMLAttributes } from 'react';

import { Icon } from '../..';

export const MessageReactionAction = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={[
      'rcx-message-reactions__reaction rcx-message-reactions__reaction--action',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <Icon {...({ name: 'emoji-plus', size: 'x16' } as any)}></Icon>
  </div>
);
