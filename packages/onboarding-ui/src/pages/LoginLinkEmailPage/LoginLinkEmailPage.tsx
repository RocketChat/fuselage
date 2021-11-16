import { Box, Margins } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import EmailCodeFallback from '../../common/EmailCodeFallback';
import { OnboardingLogo } from '../../common/OnboardingLogo';

type LoginLinkEmailProps = {
  onResendEmailRequest: () => void;
  onChangeEmailRequest: () => void;
};

const LoginLinkEmailPage = ({
  onResendEmailRequest,
  onChangeEmailRequest,
}: LoginLinkEmailProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        width='100%'
        maxWidth={800}
        paddingBlock={32}
        paddingInline={16}
      >
        <Margins blockEnd={32}>
          <OnboardingLogo />

          <Box
            fontWeight={800}
            width='100%'
            fontSize='x52'
            lineHeight='x62'
            fontFamily='sans'
          >
            {t('page.magicLinkEmail.title')}
          </Box>

          <Box fontScale='s1' maxWidth={570}>
            <Trans i18nKey='page.magicLinkEmail.subtitle'></Trans>
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

export default LoginLinkEmailPage;
