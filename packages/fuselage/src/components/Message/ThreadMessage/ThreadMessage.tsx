import Message, { type MessageProps } from '../Message';
import MessageLeftContainer from '../MessageLeftContainer';

import ThreadMessageBody from './ThreadMessageBody';
import ThreadMessageContainer from './ThreadMessageContainer';
import ThreadMessageFollow from './ThreadMessageFollow';
import ThreadMessageIconThread from './ThreadMessageIconThread';
import ThreadMessageOrigin from './ThreadMessageOrigin';
import ThreadMessageRow from './ThreadMessageRow';
import ThreadMessageUnfollow from './ThreadMessageUnfollow';

export type ThreadMessageProps = MessageProps;

const ThreadMessage = Object.assign(
  (props: ThreadMessageProps) => (
    <Message {...({ className: 'rcx-message-thread' } as any)} {...props} />
  ),
  {
    Row: ThreadMessageRow,
    Container: ThreadMessageContainer,
    LeftContainer: MessageLeftContainer,
    Origin: ThreadMessageOrigin,
    Message: ThreadMessageBody,
    Follow: ThreadMessageFollow,
    Unfollow: ThreadMessageUnfollow,
    Icon: ThreadMessageIconThread,
  },
);

export default ThreadMessage;
