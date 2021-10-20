import { Box, Margins } from '@rocket.chat/fuselage';
import { RocketChatLogo } from '@rocket.chat/logo';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';

const EmailConfirmedPage = (): ReactElement => {
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
          <Box width='100%' maxWidth={180}>
            <RocketChatLogo />
          </Box>

          <Box
            fontWeight={800}
            fontSize='x52'
            lineHeight='x62'
            fontFamily='sans'
          >
            {t('page.emailConfirmed.title')}
          </Box>

          <Box fontScale='s1'>{t('page.emailConfirmed.subtitle')}</Box>
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default EmailConfirmedPage;
