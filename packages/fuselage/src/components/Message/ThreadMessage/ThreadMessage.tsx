import Message, { type MessageProps } from '../Message';

type ThreadMessageProps = MessageProps;

export const ThreadMessage = (props: ThreadMessageProps) => (
  <Message {...({ className: 'rcx-message-thread' } as any)} {...props} />
);
