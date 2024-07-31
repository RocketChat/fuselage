import type { ReactNode } from 'react';

/** @public */
export type MessageSystemBlockProps = {
  children?: ReactNode;
};

/** @public */
const MessageSystemBlock = (props: MessageSystemBlockProps) => (
  <div className='rcx-message-system__block' {...props} />
);

export default MessageSystemBlock;
