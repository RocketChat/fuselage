import { Box, Margins } from '@rocket.chat/fuselage';
import type { ReactElement, ReactNode } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import EmailCodeFallback from '../../common/EmailCodeFallback';
import { OnboardingLogo } from '../../common/OnboardingLogo';

type CheckYourEmailPageProps = {
  title?: string;
  children?: ReactNode;
  onResendEmailRequest: () => void;
  onChangeEmailRequest: () => void;
};

const CheckYourEmailPage = ({
  title,
  children,
  onResendEmailRequest,
  onChangeEmailRequest,
}: CheckYourEmailPageProps): ReactElement => {
  const { t } = useTranslation();

  const defaultSubtitleComponent = (
    <Trans i18nKey='page.checkYourEmail.subtitle'>
      Your request has been sent successfully.
      <br />
      Check your email inbox to launch your Enterprise trial.
    </Trans>
  );

  title = title || t('page.checkYourEmail.title');
  children = children || defaultSubtitleComponent;

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
            {title}
          </Box>

          <Box fontScale='p1'>{children}</Box>

          <EmailCodeFallback
            onResendEmailRequest={onResendEmailRequest}
            onChangeEmailRequest={onChangeEmailRequest}
          />
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default CheckYourEmailPage;
