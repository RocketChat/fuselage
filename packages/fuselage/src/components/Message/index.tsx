import { Message } from './Message.js';
import { MessageBlock } from './MessageBlock.js';
import { MessageBody } from './MessageBody.js';
import { MessageContainer } from './MessageContainer.js';
import { MessageContainerFixed } from './MessageContainerFixed.js';
import { MessageDivider } from './MessageDivider/index.js';
import { MessageHeader } from './MessageHeader.js';
import { MessageHighlight } from './MessageHighlight.js';
import { MessageLeftContainer } from './MessageLeftContainer.js';
import MessageMetrics from './MessageMetrics/index.js';
import { MessageName } from './MessageName.js';
import { MessageNameContainer } from './MessageNameContainer.js';
import { MessageRole } from './MessageRole.js';
import { MessageRoles } from './MessageRoles.js';
import { MessageTimestamp } from './MessageTimestamp.js';
import MessageToolbar from './MessageToolbar/index.js';
import { MessageUsername } from './MessageUsername.js';

export * from './MessageDivider/index.js';
export * from './MessageGenericPreview/index.js';
export * from './MessageStatusIndicator/index.js';
export * from './MessageSystem/index.js';
export * from './MessageMetrics/index.js';
export * from './MessageReactions/index.js';
export * from './MessageToolbar/index.js';
export * from './ThreadMessage/index.js';
export * from './MessageBlock.js';
export * from './MessageBody.js';
export * from './MessageContainer.js';
export * from './MessageContainerFixed.js';
export * from './MessageHeader.js';
export * from './MessageNameContainer.js';
export * from './MessageLeftContainer.js';
export * from './MessageName.js';
export * from './MessageRole.js';
export * from './MessageRoles.js';
export * from './MessageTimestamp.js';
export * from './MessageUsername.js';
export * from './MessageEmoji.js';
export * from './MessageHighlight.js';

export default Object.assign(Message, {
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
});
