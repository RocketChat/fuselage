import React, { ComponentProps, FC } from 'react';

import './MessageSystem.styles.scss';

import { MessageLeftContainer, MessageName, MessageTimestamp } from '..';

export const MessageSystem: FC = (props) => (
  <div className='rcx-box rcx-box--full rcx-message-system'>
    {props.children}
  </div>
);

export const MessageSystemLeftContainer = MessageLeftContainer;

export const MessageSystemContainer: FC = (props) => (
  <div
    className='rcx-box rcx-box--full rcx-message-system__container'
    {...props}
  />
);

export const MessageSystemTimestamp = MessageTimestamp;

export const MessageSystemName: FC<ComponentProps<typeof MessageName>> = (
  props
) => (
  <span className='rcx-box rcx-box--full rcx-message-system__name' {...props} />
);

export const MessageSystemBody: FC = (props) => (
  <div className='rcx-message-system__body' {...props} />
);

export const MessageSystemBlock: FC = (props) => (
  <div className='rcx-message-system__block' {...props} />
);
