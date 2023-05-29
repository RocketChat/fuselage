import { Box } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import {
  HeroLayout,
  HeroLayoutTitle,
  HeroLayoutSubtitle,
} from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import EmailCodeFallback from '../../common/EmailCodeFallback';

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
    <HeroLayout>
      <HeroLayoutTitle>{t('page.awaitingConfirmation.title')}</HeroLayoutTitle>
      <HeroLayoutSubtitle>
        {t('page.awaitingConfirmation.subtitle', { emailAddress })}
      </HeroLayoutSubtitle>

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
    </HeroLayout>
  );
};

export default AwaitingConfirmationPage;
