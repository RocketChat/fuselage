import React, { ComponentProps, FC } from 'react';

import { Icon } from '../..';
import Message from '../Message';

export const ThreadMessage: FC<ComponentProps<typeof Message>> & {
  Row: FC;

  Container: FC;
  LeftContainer: FC;

  Origin: FC;
  Message: FC;

  Follow: FC;
  Unfollow: FC;
  Icon: FC;
} = (props) => (
  <Message {...({ className: 'rcx-message--thread' } as any)} {...props} />
);

ThreadMessage.Message = (props) => (
  <div
    className='rcx-box rcx-box--full rcx-message-thread__message'
    {...props}
  />
);

ThreadMessage.Row = (props) => (
  <div className='rcx-box rcx-box--full rcx-message-thread__row' {...props} />
);

ThreadMessage.Origin = (props) => (
  <div
    className='rcx-box rcx-box--full rcx-message-thread__origin'
    {...props}
  />
);

ThreadMessage.Icon = (props) => (
  <Icon
    className='rcx-box rcx-box--full rcx-message-thread__icon'
    {...({ name: 'thread', size: 'x16', ...props } as any)}
  />
);

ThreadMessage.Follow = () => (
  <ThreadMessage.Icon
    className='rcx-box rcx-box--full rcx-message-thread__icon rcx-message-thread__icon--follow'
    {...({ name: 'bell' } as any)}
  />
);
ThreadMessage.Unfollow = () => (
  <ThreadMessage.Icon
    className='rcx-box rcx-box--full rcx-message-thread__icon rcx-message-thread__icon--unfollow'
    {...({ name: 'bell-off' } as any)}
  />
);

ThreadMessage.LeftContainer = Message.LeftContainer;

ThreadMessage.Container = (props) => (
  <div
    className='rcx-box rcx-box--full rcx-message-thread__container'
    {...props}
  />
);
