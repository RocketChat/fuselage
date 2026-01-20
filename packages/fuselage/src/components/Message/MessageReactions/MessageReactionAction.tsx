import type { HTMLAttributes } from 'react';

import { Icon } from '../../Icon';

export const MessageReactionAction = ({
  className,
  onClick,
  onKeyDown,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.(event as any);
    }
    onKeyDown?.(event);
  };

  return (
    <div
      role='button'
      tabIndex={0}
      aria-label='Add reaction'
      className={[
        'rcx-message-reactions__reaction rcx-message-reactions__reaction--action',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <Icon name='emoji-plus' size='x16' />
    </div>
  );
};
