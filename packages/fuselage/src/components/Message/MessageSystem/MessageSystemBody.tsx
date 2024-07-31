import type { HTMLAttributes } from 'react';

/** @public */
export type MessageSystemBodyProps = HTMLAttributes<HTMLDivElement>;

/** @public */
const MessageSystemBody = (props: MessageSystemBodyProps) => (
  <div className='rcx-message-system__body' {...props} />
);

export default MessageSystemBody;
