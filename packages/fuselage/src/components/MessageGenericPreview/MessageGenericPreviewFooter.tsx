// import { css } from '@rocket.chat/css-in-js';
import { Box } from '@rocket.chat/fuselage';
// import { ContextBlock } from '@rocket.chat/ui-kit';
import React, { FC } from 'react';

type MessageGenericPreviewFooterProps = {
  // footer: ContextBlock;
  // footer: ContextBlock;
};

export const MessageGenericPreviewFooter: FC<MessageGenericPreviewFooterProps> = (
  props
) => (
  <Box
    color='neutral-700'
    fontScale='c1'
    width='full'
    withTruncatedText
    {...props}
  >
    {/* {(footer.elements as any[]).map(({ text }) => text).join(', ')} */}
  </Box>
);
