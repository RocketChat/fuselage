import React, { ComponentProps, FC } from 'react';

import { Button } from '../..';
import MessageMetricsItem from './MessageMetricsItem';

export const MessageMetricsReply: FC<ComponentProps<typeof Button>> = (
  props
) => (
  <MessageMetricsItem>
    <Button {...props} {...{ small: true, primary: true }} />
  </MessageMetricsItem>
);
