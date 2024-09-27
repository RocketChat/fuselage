import type { HTMLAttributes, ReactElement } from 'react';

export const MessageLeftContainer = (
  props: HTMLAttributes<HTMLDivElement>
): ReactElement => (
  <div
    className='rcx-box rcx-box--full rcx-message-container rcx-message-container--left'
    {...props}
  />
);
