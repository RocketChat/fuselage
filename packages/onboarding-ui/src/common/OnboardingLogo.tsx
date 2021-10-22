import { Box } from '@rocket.chat/fuselage';
import { RocketChatLogo } from '@rocket.chat/logo';
import type { ReactElement } from 'react';

export const OnboardingLogo = ({ tag }: { tag?: string }): ReactElement => (
  <Box width='100%' maxWidth={224} color='alternative'>
    <RocketChatLogo tagTitle={tag} />
  </Box>
);

export const OnboardingLogoCloud = (): ReactElement => (
  <OnboardingLogo tag='CLOUD' />
);
