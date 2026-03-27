import type { TagProps } from '../Tag';
import { Tag } from '../Tag';

export type MessageRoleProps = TagProps;

const MessageRole = (props: MessageRoleProps) => (
  <Tag {...props} />
);

export default MessageRole;
