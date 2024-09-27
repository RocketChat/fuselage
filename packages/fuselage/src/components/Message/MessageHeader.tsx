import type { HTMLAttributes } from 'react';

export const MessageHeader = ({
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className='rcx-box rcx-box--full rcx-message-header' {...props}>
    <div className='rcx-box rcx-box--full rcx-message-header__wrapper'>
      {children}
    </div>
  </div>
);
