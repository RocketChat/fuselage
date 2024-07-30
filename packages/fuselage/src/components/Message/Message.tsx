import type { AllHTMLAttributes, ForwardedRef } from 'react';
import React, { forwardRef } from 'react';

import { prependClassName } from '../../helpers/prependClassName';
import { MessageBlock } from './MessageBlock';
import { MessageBody } from './MessageBody';
import { MessageContainer } from './MessageContainer';
import { MessageContainerFixed } from './MessageContainerFixed';
import { MessageDivider } from './MessageDivider';
import { MessageHeader } from './MessageHeader';
import { MessageHighlight } from './MessageHighlight';
import MessageLeftContainer from './MessageLeftContainer';
import MessageMetrics from './MessageMetrics';
import { MessageName } from './MessageName';
import { MessageNameContainer } from './MessageNameContainer';
import { MessageRole } from './MessageRole';
import { MessageRoles } from './MessageRoles';
import { MessageTimestamp } from './MessageTimestamp';
import MessageToolbar from './MessageToolbar';
import { MessageUsername } from './MessageUsername';

export type MessageProps = AllHTMLAttributes<HTMLDivElement> & {
  clickable?: boolean;
  sequential?: boolean;
  className?: string;
  isSelected?: boolean;
  isEditing?: boolean;
  isPending?: boolean;
  highlight?: boolean;
};

const Message = Object.assign(
  forwardRef(function Message(
    {
      className,
      clickable,
      sequential,
      isSelected,
      isEditing,
      isPending,
      highlight,
      ...props
    }: MessageProps,
    ref: ForwardedRef<HTMLDivElement>
  ) {
    return (
      <div
        ref={ref}
        className={prependClassName(
          className,
          [
            'rcx-message',
            (clickable || props.onClick) && 'rcx-message--clickable',
            sequential && 'rcx-message--sequential',
            isSelected && 'rcx-message--selected',
            isEditing && 'rcx-message--editing',
            isPending && 'rcx-message--pending',
            highlight && 'rcx-message--highlight',
          ]
            .filter(Boolean)
            .join(' ')
        )}
        {...props}
      />
    );
  }),
  {
    Metrics: MessageMetrics,
    Toolbar: MessageToolbar,
    Container: MessageContainer,
    ContainerFixed: MessageContainerFixed,
    LeftContainer: MessageLeftContainer,
    Header: MessageHeader,
    Body: MessageBody,
    Block: MessageBlock,
    Timestamp: MessageTimestamp,
    NameContainer: MessageNameContainer,
    Name: MessageName,
    Username: MessageUsername,
    Roles: MessageRoles,
    Role: MessageRole,
    Divider: MessageDivider,
    Highlight: MessageHighlight,
  }
);

export default Message;
