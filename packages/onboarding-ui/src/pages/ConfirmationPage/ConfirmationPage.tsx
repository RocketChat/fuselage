import { Box, Margins } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';

import BackgroundLayer from '../../common/BackgroundLayer';
import { OnboardingLogo } from '../../common/OnboardingLogo';

type ConfirmationPageProps = {
  title: string;
  subTitle: string;
};

const ConfirmationPage = ({
  title,
  subTitle,
}: ConfirmationPageProps): ReactElement => (
  <BackgroundLayer>
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      textAlign='center'
      width='100%'
      maxWidth={576}
      paddingBlock={32}
      paddingInline={16}
    >
      <Margins blockEnd={32}>
        <OnboardingLogo />

        <Box fontWeight={800} fontSize='x52' lineHeight='x62' fontFamily='sans'>
          {title}
        </Box>

        <Box fontScale='p1'>{subTitle}</Box>
      </Margins>
    </Box>
  </BackgroundLayer>
);

export default ConfirmationPage;
