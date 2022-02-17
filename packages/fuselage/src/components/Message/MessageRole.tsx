import type { ReactNode } from 'react';
import React from 'react';

import { Tag } from '../Tag';

type MessageRoleProps = {
  children?: ReactNode;
};

export const MessageRole = (props: MessageRoleProps) => (
  <Tag
    onClick={undefined}
    className='rcx-box rcx-box--full rcx-message-header__role'
    {...props}
    small
    disabled={undefined}
  />
);
