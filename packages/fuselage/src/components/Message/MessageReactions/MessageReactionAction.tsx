import type { HTMLAttributes } from 'react';
import React from 'react';

import { Icon } from '../../Icon';

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
    <Icon name='emoji-plus' size={16} />
  </div>
);
