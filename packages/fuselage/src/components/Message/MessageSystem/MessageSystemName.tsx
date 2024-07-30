import React from 'react';

import type { MessageNameProps } from '../MessageName';

/** @public */
export type MessageSystemNameProps = MessageNameProps;

/** @public */
const MessageSystemName = (props: MessageSystemNameProps) => (
  <span className='rcx-box rcx-box--full rcx-message-system__name' {...props} />
);

export default MessageSystemName;
