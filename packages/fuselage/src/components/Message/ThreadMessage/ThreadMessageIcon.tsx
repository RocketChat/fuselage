import React, { ComponentProps, ReactElement } from 'react';

import { Icon } from '../..';

export const ThreadMessageIcon = ({
  ...props
}: ComponentProps<typeof Icon>): ReactElement => (
  <Icon
    className='rcx-box rcx-box--full rcx-message-thread__icon'
    size='x16'
    {...props}
  />
);
