import { Box, Margins } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { RocketChatLogo } from '@rocket.chat/logo';
import type { ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import { useDarkMode } from '../../common/DarkModeProvider';
import EmailCodeFallback from '../../common/EmailCodeFallback';

type MagicLinkEmailProps = {
  onResendEmailRequest: () => void;
  onChangeEmailRequest: () => void;
};

const MagicLinkEmailPage = ({
  onResendEmailRequest,
  onChangeEmailRequest,
}: MagicLinkEmailProps): ReactElement => {
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
        maxWidth={800}
        paddingBlock={32}
        paddingInline={16}
        color={darkMode ? colors.white : colors.n900}
      >
        <Margins blockEnd={32}>
          <Box width='100%' maxWidth={180}>
            <RocketChatLogo />
          </Box>

          <Box
            color={colors.n900}
            fontWeight={800}
            width='100%'
            fontSize='x52'
            lineHeight='x62'
            fontFamily='sans'
          >
            {t('page.magicLinkEmail.title')}
          </Box>

          <Box fontScale='s1' color={colors.n900} maxWidth={570}>
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

export default MagicLinkEmailPage;
