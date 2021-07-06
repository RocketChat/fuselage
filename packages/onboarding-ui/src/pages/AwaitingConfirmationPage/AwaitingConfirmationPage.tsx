import { Box, Margins } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import { ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import { useDarkMode } from '../../common/DarkModeProvider';
import RocketChatLogo from '../../common/RocketChatLogo';
import Link from './Link';

const AwaitingConfirmationPage = (): ReactElement => {
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
          >
            {t('page.awaitingConfirmation.title')}
          </Box>

          <Box fontScale='s1'>{t('page.awaitingConfirmation.subtitle')}</Box>

          <Box
            maxWidth={498}
            padding='x18'
            width='full'
            fontSize='x22'
            lineHeight='x32'
            backgroundColor={colors.n700}
            borderRadius='x3'
          >
            {t('page.awaitingConfirmation.code')}
          </Box>

          <Box fontScale='c1'>
            <Trans i18nKey='page.awaitingConfirmation.codeFallback'>
              <Link href='#' />
              <Link href='#' />
            </Trans>
          </Box>
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default AwaitingConfirmationPage;
