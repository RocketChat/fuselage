import React, { ComponentProps, FC, ReactElement } from 'react';

import { Icon } from '../..';
import Message from '../Message';

export const ThreadMessage: FC<ComponentProps<typeof Message>> & {
  Row: typeof ThreadMessageRow;

  Container: typeof ThreadMessageContainer;
  LeftContainer: typeof ThreadMessageLeftContainer;

  Origin: typeof ThreadMessageOrigin;
  Message: typeof ThreadMessageBody;

  Follow: typeof ThreadMessageFollow;
  Unfollow: typeof ThreadMessageUnfollow;
  Icon: typeof ThreadMessageIconThread;
} = (props) => (
  <Message {...({ className: 'rcx-message--thread' } as any)} {...props} />
);

export const ThreadMessageBody: FC = (props) => (
  <div
    className='rcx-box rcx-box--full rcx-message-thread__message'
    {...props}
  />
);

export const ThreadMessageRow: FC = (props) => (
  <div className='rcx-box rcx-box--full rcx-message-thread__row' {...props} />
);

export const ThreadMessageOrigin: FC = (props) => (
  <div
    className='rcx-box rcx-box--full rcx-message-thread__origin'
    {...props}
  />
);

export const ThreadMessageIconThread = () => (
  <ThreadMessageIcon name='thread' />
);

export const ThreadMessageIcon = ({
  ...props
}: ComponentProps<typeof Icon>): ReactElement => (
  <Icon
    className='rcx-box rcx-box--full rcx-message-thread__icon'
    size='x16'
    {...props}
  />
);

export const ThreadMessageFollow = () => (
  <ThreadMessageIcon
    className='rcx-box rcx-box--full rcx-message-thread__icon rcx-message-thread__icon--follow'
    {...({ name: 'bell' } as any)}
  />
);

export const ThreadMessageUnfollow = () => (
  <ThreadMessageIcon
    className='rcx-box rcx-box--full rcx-message-thread__icon rcx-message-thread__icon--unfollow'
    {...({ name: 'bell-off' } as any)}
  />
);

export const ThreadMessageLeftContainer = Message.LeftContainer;

export const ThreadMessageContainer: FC = (props) => (
  <div
    className='rcx-box rcx-box--full rcx-message-thread__container'
    {...props}
  />
);

/* deprecated */
ThreadMessage.Message = ThreadMessageBody;
ThreadMessage.Row = ThreadMessageRow;
ThreadMessage.Origin = ThreadMessageOrigin;
ThreadMessage.Icon = ThreadMessageIconThread;
ThreadMessage.Container = ThreadMessageContainer;
ThreadMessage.LeftContainer = ThreadMessageLeftContainer;
ThreadMessage.Follow = ThreadMessageFollow;
ThreadMessage.Unfollow = ThreadMessageUnfollow;
