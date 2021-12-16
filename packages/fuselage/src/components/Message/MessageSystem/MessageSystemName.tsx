import React, { ComponentProps, FC } from 'react';

import { MessageName } from '../MessageName';

export const MessageSystemName: FC<ComponentProps<typeof MessageName>> = (
  props
) => (
  <span className='rcx-box rcx-box--full rcx-message-system__name' {...props} />
);
