import React, { ComponentProps } from 'react';

import { MessageName } from '../MessageName';

type MessageSystemNameProps = ComponentProps<typeof MessageName>;

export const MessageSystemName = (props: MessageSystemNameProps) => (
  <span className='rcx-box rcx-box--full rcx-message-system__name' {...props} />
);
