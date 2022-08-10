import { Box } from '@rocket.chat/fuselage';
import { RocketChatLogo } from '@rocket.chat/logo';
import type { ReactElement } from 'react';

export const LayoutLogo = (): ReactElement => (
  <Box width='100%' maxWidth={224}>
    <RocketChatLogo />
  </Box>
);
