import React from 'react';

import type { MessageNameProps } from '../MessageName';

type MessageSystemNameProps = MessageNameProps;

export const MessageSystemName = (props: MessageSystemNameProps) => (
  <span className='rcx-box rcx-box--full rcx-message-system__name' {...props} />
);
