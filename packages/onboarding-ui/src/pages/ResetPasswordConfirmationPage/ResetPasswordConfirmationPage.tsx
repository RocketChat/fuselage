import { Box, Margins } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import { OnboardingLogo } from '../../common/OnboardingLogo';

const ResetPasswordConfirmationPage = (): ReactElement => {
  const { t } = useTranslation();
  return (
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

          <Box
            fontWeight={800}
            fontSize='x52'
            lineHeight='x62'
            fontFamily='sans'
          >
            {t('page.resetPasswordPage.emailSent.title')}
          </Box>

          <Box fontScale='p1'>
            {t('page.resetPasswordPage.emailSent.subtitle')}
          </Box>
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default ResetPasswordConfirmationPage;
