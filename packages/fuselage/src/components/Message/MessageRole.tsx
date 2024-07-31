import type { TagProps } from '../Tag';
import { Tag } from '../Tag';

export const MessageRole = (props: TagProps) => (
  <Tag className='rcx-box rcx-box--full rcx-message-header__role' {...props} />
);
