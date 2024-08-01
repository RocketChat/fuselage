import type { HTMLAttributes } from 'react';

export const MessageContainerFixed = (
  props: HTMLAttributes<HTMLDivElement>
) => (
  <div
    className='rcx-box rcx-box--full rcx-message-container rcx-message-container--fixed'
    {...props}
  />
);
