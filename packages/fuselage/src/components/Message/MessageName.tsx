import type { HTMLAttributes } from 'react';

export const MessageName = (props: HTMLAttributes<HTMLSpanElement>) => (
  <span className='rcx-box rcx-box--full rcx-message-header__name' {...props} />
);
