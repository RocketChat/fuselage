import type { AllHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { styled } from 'tamagui';

import { RcxView } from '../../../primitives';
import MessageLeftContainer from '../MessageLeftContainer';

import ThreadMessageBody from './ThreadMessageBody';
import ThreadMessageContainer from './ThreadMessageContainer';
import ThreadMessageFollow from './ThreadMessageFollow';
import ThreadMessageIconThread from './ThreadMessageIconThread';
import ThreadMessageOrigin from './ThreadMessageOrigin';
import ThreadMessageRow from './ThreadMessageRow';
import ThreadMessageUnfollow from './ThreadMessageUnfollow';

export type ThreadMessageProps = AllHTMLAttributes<HTMLDivElement> & {
  clickable?: boolean;
  sequential?: boolean;
  className?: string;
  isSelected?: boolean;
  isEditing?: boolean;
  isPending?: boolean;
  highlight?: boolean;
};

const ThreadMessageFrame = styled(RcxView, {
  name: 'ThreadMessage',
  display: 'flex',
  flexDirection: 'column',
  paddingBlock: 0,
  color: '$fontInfo',
  overflow: 'hidden',
  // @ts-ignore
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  marginInline: 2,
  paddingInline: 20,
  hoverStyle: {
    backgroundColor: '$surfaceHover',
  },
});

const ThreadMessage = Object.assign(
  forwardRef<HTMLDivElement, ThreadMessageProps>(function ThreadMessage(
    { className: _className, ...props },
    ref,
  ) {
    return <ThreadMessageFrame ref={ref} group='message' {...(props as any)} />;
  }),
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
