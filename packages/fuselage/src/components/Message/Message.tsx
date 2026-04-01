import type { AllHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { styled } from '@tamagui/core';

import { RcxView } from '../../primitives';

import MessageBlock from './MessageBlock';
import MessageBody from './MessageBody';
import MessageContainer from './MessageContainer';
import MessageContainerFixed from './MessageContainerFixed';
import { MessageDivider } from './MessageDivider';
import MessageHeader from './MessageHeader';
import MessageHighlight from './MessageHighlight';
import MessageLeftContainer from './MessageLeftContainer';
import { MessageMetrics } from './MessageMetrics';
import MessageName from './MessageName';
import MessageNameContainer from './MessageNameContainer';
import MessageRole from './MessageRole';
import MessageRoles from './MessageRoles';
import MessageTimestamp from './MessageTimestamp';
import { MessageToolbar } from './MessageToolbar';
import MessageUsername from './MessageUsername';

export type MessageProps = AllHTMLAttributes<HTMLDivElement> & {
  clickable?: boolean;
  sequential?: boolean;
  className?: string;
  isSelected?: boolean;
  isEditing?: boolean;
  isPending?: boolean;
  highlight?: boolean;
};

const MessageFrame = styled(RcxView, {
  name: 'Message',
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  marginInline: '$x2',
  paddingBlockStart: '$x8',
  paddingBlockEnd: '$x4',
  paddingInline: '$x20',
  hoverStyle: {
    backgroundColor: '$surfaceHover',
  },
  focusVisibleStyle: {
    borderColor: '$strokeExtraDark',
    boxShadow: '0 0 0 2px var(--shadowHighlight)',
  },
  variants: {
    clickable: {
      true: {
        cursor: 'pointer',
      },
    },
    sequential: {
      true: {
        paddingBlock: '$x4',
      },
    },
    isSelected: {
      true: {
        backgroundColor: '$surfaceSelected',
      },
    },
    isEditing: {
      true: {
        // status-background(warning-2) / status-font(on-warning-2)
        backgroundColor: '$statusBgWarning',
        color: '$statusFontOnWarning',
      },
    },
  } as const,
});

const Message = Object.assign(
  forwardRef<HTMLDivElement, MessageProps>(function Message(
    {
      className,
      clickable,
      sequential,
      isSelected,
      isEditing,
      isPending,
      highlight,
      ...props
    },
    ref,
  ) {
    return (
      <MessageFrame
        ref={ref}
        group='message'
        clickable={(clickable || !!props.onClick) || undefined}
        sequential={sequential || undefined}
        isSelected={isSelected || undefined}
        isEditing={isEditing || undefined}
        opacity={isPending ? 0.4 : undefined}
        className={className}
        {...(props as any)}
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
  },
);

export default Message;
