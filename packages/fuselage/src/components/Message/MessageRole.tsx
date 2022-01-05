import React, { FC } from 'react';

import { Tag } from '../Tag';

export const MessageRole: FC = function MessageRole(props) {
  return (
    <Tag
      onClick={undefined}
      className='rcx-box rcx-box--full rcx-message-header__role'
      {...props}
      small
      disabled={undefined}
    />
  );
};
