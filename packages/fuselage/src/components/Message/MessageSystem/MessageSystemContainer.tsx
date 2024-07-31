import type { ReactNode } from 'react';

/** @public */
export type MessageSystemContainerProps = {
  children?: ReactNode;
};

/** @public */
const MessageSystemContainer = (props: MessageSystemContainerProps) => (
  <div
    className='rcx-box rcx-box--full rcx-message-system__container'
    {...props}
  />
);

export default MessageSystemContainer;
