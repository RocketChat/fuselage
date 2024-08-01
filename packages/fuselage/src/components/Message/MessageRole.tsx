import type { ComponentProps } from 'react';

import { Tag } from '../Tag';

export const MessageRole = (props: ComponentProps<typeof Tag>) => (
  <Tag className='rcx-box rcx-box--full rcx-message-header__role' {...props} />
);
