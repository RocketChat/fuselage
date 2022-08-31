import { Box, Margins } from '@rocket.chat/fuselage';
import { BackgroundLayer, LayoutLogo } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

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
          <LayoutLogo.LayoutLogo />

          <Box fontScale='hero'>{t('page.emailConfirmed.title')}</Box>

          <Box fontScale='p1'>{t('page.emailConfirmed.subtitle')}</Box>
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default EmailConfirmedPage;
