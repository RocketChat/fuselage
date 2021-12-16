import { MessageLeftContainer } from '../MessageLeftContainer';
import { ThreadMessage } from './ThreadMessage';
import { ThreadMessageBody } from './ThreadMessageBody';
import { ThreadMessageContainer } from './ThreadMessageContainer';
import { ThreadMessageFollow } from './ThreadMessageFollow';
import { ThreadMessageIconThread } from './ThreadMessageIconThread';
import { ThreadMessageOrigin } from './ThreadMessageOrigin';
import { ThreadMessageRow } from './ThreadMessageRow';
import { ThreadMessageUnfollow } from './ThreadMessageUnfollow';

const ThreadMessageLeftContainer = MessageLeftContainer;

export default Object.assign(ThreadMessage, {
  Row: ThreadMessageRow,
  Container: ThreadMessageContainer,
  LeftContainer: ThreadMessageLeftContainer,
  Origin: ThreadMessageOrigin,
  Message: ThreadMessageBody,
  Follow: ThreadMessageFollow,
  Unfollow: ThreadMessageUnfollow,
  Icon: ThreadMessageIconThread,
});
