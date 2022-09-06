import { Box, Margins } from '@rocket.chat/fuselage';
import { BackgroundLayer, LayoutLogo } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

type SomethingWentWrongPageProps = {
  requestId?: string | undefined;
};

const SomethingWentWrongPage = ({
  requestId = undefined,
}: SomethingWentWrongPageProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        width='100%'
        maxWidth={624}
        paddingBlock={32}
        paddingInline={16}
      >
        <Margins blockEnd={32}>
          <LayoutLogo.LayoutLogo />

          <Box fontScale='hero'>{t('page.somethingWentWrongPage.title')}</Box>

          <Box fontScale='p1'>{t('page.somethingWentWrongPage.subtitle')}</Box>
          {requestId && (
            <Box>
              {t('page.somethingWentWrongPage.requestId', { requestId })}
            </Box>
          )}
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default SomethingWentWrongPage;
