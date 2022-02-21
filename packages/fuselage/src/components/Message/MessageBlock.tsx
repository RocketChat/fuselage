import type { ComponentProps } from 'react';
import React from 'react';

import { Box } from '../Box';

type MessageBlockProps = ComponentProps<typeof Box>;

export const MessageBlock = ({ className, ...props }: MessageBlockProps) => (
  <Box rcx-message-block {...props} />
);
