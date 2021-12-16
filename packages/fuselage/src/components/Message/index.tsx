import { Message } from './Message';
import { MessageBlock } from './MessageBlock';
import { MessageBody } from './MessageBody';
import { MessageContainer } from './MessageContainer';
import { MessageContainerFixed } from './MessageContainerFixed';
import { MessageDivider } from './MessageDivider';
import { MessageHeader } from './MessageHeader';
import { MessageLeftContainer } from './MessageLeftContainer';
import MessageMetrics from './MessageMetrics';
import { MessageName } from './MessageName';
import { MessageRole } from './MessageRole';
import { MessageRoles } from './MessageRoles';
import { MessageTimestamp } from './MessageTimestamp';
import MessageToolbox from './MessageToolbox';
import { MessageUsername } from './MessageUsername';

export * from './MessageDivider';
export * from './MessageGenericPreview';
export * from './MessageStatusIndicator';
export * from './MessageSystem';
export { default as MessageMetrics } from './MessageMetrics';
export { default as MessageReactions } from './MessageReactions';
export { default as MessageToolbox } from './MessageToolbox';
export { default as ThreadMessage } from './ThreadMessage';

export default Object.assign(Message, {
  Metrics: MessageMetrics,
  Toolbox: MessageToolbox,
  Container: MessageContainer,
  ContainerFixed: MessageContainerFixed,
  LeftContainer: MessageLeftContainer,
  Header: MessageHeader,
  Body: MessageBody,
  Block: MessageBlock,
  Timestamp: MessageTimestamp,
  Name: MessageName,
  Username: MessageUsername,
  Roles: MessageRoles,
  Role: MessageRole,
  Divider: MessageDivider,
});
