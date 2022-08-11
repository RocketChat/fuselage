import { Box, Margins } from '@rocket.chat/fuselage';
import { BackgroundLayer, LayoutLogo } from '@rocket.chat/layout';
import type { ReactElement, ReactNode } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import EmailCodeFallback from '../../common/EmailCodeFallback';

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
          <LayoutLogo.LayoutLogo />

          <Box fontScale='hero'>{title}</Box>

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
