import type { HTMLAttributes } from 'react';

export type MessageNameProps = HTMLAttributes<HTMLSpanElement>;

export const MessageName = (props: MessageNameProps) => (
  <span className='rcx-box rcx-box--full rcx-message-header__name' {...props} />
);
