import Box from '@rocket.chat/fuselage';
import { TaggedRocketChatLogo, RocketChatLogo } from '@rocket.chat/logo';
import type { ReactElement } from 'react';

export const OnboardingLogo = (): ReactElement => (
  <Box width='100%' maxWidth={224}>
    <RocketChatLogo />
  </Box>
);

export const OnboardingLogoCloud = (): ReactElement => (
  <Box width='100%' maxWidth={224}>
    <TaggedRocketChatLogo tagTitle='CLOUD' />
  </Box>
);
