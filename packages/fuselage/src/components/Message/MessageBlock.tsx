import React, { ComponentProps, FC } from 'react';

import { Box } from '../Box';

export const MessageBlock: FC<ComponentProps<typeof Box>> =
  function MessageBlock({ className, ...props }) {
    return <Box rcx-message-block {...props} />;
  };
