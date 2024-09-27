import type { HTMLAttributes } from 'react';

import { Icon } from '../../Icon';

export const MessageReactionAction = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    role='button'
    tabIndex={0}
    className={[
      'rcx-message-reactions__reaction rcx-message-reactions__reaction--action',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    {...props}
  >
    <Icon name='emoji-plus' size='x16' />
  </div>
);
