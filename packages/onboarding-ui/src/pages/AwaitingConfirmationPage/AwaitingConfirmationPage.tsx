import { Box, Margins } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import EmailCodeFallback from '../../common/EmailCodeFallback';
import { OnboardingLogo } from '../../common/OnboardingLogo';

type AwaitingConfirmationPageProps = {
  emailAddress: string;
  securityCode: string;
  onResendEmailRequest: () => void;
  onChangeEmailRequest: () => void;
};

const AwaitingConfirmationPage = ({
  securityCode,
  emailAddress,
  onResendEmailRequest,
  onChangeEmailRequest,
}: AwaitingConfirmationPageProps): ReactElement => {
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

          <Box fontScale='hero'>{t('page.awaitingConfirmation.title')}</Box>

          <Box fontScale='p1'>
            {t('page.awaitingConfirmation.subtitle', { emailAddress })}
          </Box>

          <Box
            maxWidth={498}
            padding='x18'
            width='full'
            fontSize='x22'
            lineHeight='x32'
            backgroundColor={colors.n700}
            borderRadius='x3'
          >
            {securityCode}
          </Box>

          <EmailCodeFallback
            onResendEmailRequest={onResendEmailRequest}
            onChangeEmailRequest={onChangeEmailRequest}
          />
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default AwaitingConfirmationPage;
