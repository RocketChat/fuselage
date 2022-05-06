import { Box, Margins, Throbber } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import { OnboardingLogo } from '../../common/OnboardingLogo';

const ConfirmationProcessPage = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        textAlign='center'
        width='100%'
        maxWidth={660}
        paddingBlock={32}
        paddingInline={16}
      >
        <Margins blockEnd={32}>
          <OnboardingLogo />

          <Box fontScale='hero'>{t('page.confirmationProcess.title')}</Box>

          <Throbber size='x16' inheritColor={true} />
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default ConfirmationProcessPage;
