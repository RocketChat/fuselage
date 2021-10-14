import { Box, Margins } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { RocketChatLogo } from '@rocket.chat/logo';
import type { ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import { useDarkMode } from '../../common/DarkModeProvider';
import EmailCodeFallback from '../../common/EmailCodeFallback';

type CheckYourEmailPageProps = {
  onResendEmailRequest: () => void;
  onChangeEmailRequest: () => void;
};

const CheckYourEmailPage = ({
  onResendEmailRequest,
  onChangeEmailRequest,
}: CheckYourEmailPageProps): ReactElement => {
  const darkMode = useDarkMode();
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
        color={darkMode ? colors.white : colors.n900}
      >
        <Margins blockEnd={32}>
          <Box width='100%' maxWidth={180}>
            <RocketChatLogo />
          </Box>

          <Box
            fontWeight={800}
            fontSize='x52'
            lineHeight='x62'
            fontFamily='sans'
            color={colors.n900}
          >
            {t('page.checkYourEmail.title')}
          </Box>

          <Box fontScale='s1' color={colors.n900}>
            <Trans i18nKey='page.checkYourEmail.subtitle'>
              Your request has been sent successfully.
              <br />
              Check your email inbox to launch your Enterprise trial.
            </Trans>
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

export default CheckYourEmailPage;
