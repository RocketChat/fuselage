import { MessageLeftContainer } from '../MessageLeftContainer.js';

import { ThreadMessage } from './ThreadMessage.js';
import { ThreadMessageBody } from './ThreadMessageBody.js';
import { ThreadMessageContainer } from './ThreadMessageContainer.js';
import { ThreadMessageEmoji } from './ThreadMessageEmoji.js';
import { ThreadMessageFollow } from './ThreadMessageFollow.js';
import { ThreadMessageIconThread } from './ThreadMessageIconThread.js';
import { ThreadMessageOrigin } from './ThreadMessageOrigin.js';
import { ThreadMessageRow } from './ThreadMessageRow.js';
import { ThreadMessageUnfollow } from './ThreadMessageUnfollow.js';

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

export {
  ThreadMessage,
  ThreadMessageBody,
  ThreadMessageContainer,
  ThreadMessageFollow,
  ThreadMessageIconThread,
  ThreadMessageOrigin,
  ThreadMessageRow,
  ThreadMessageEmoji,
  ThreadMessageUnfollow,
  ThreadMessageLeftContainer,
};
