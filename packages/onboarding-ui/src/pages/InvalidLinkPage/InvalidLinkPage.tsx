import { Box, Margins, Button } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import { OnboardingLogo } from '../../common/OnboardingLogo';

type InvalidLinkPageProps = {
  onRequestNewLink: () => void;
};

const InvalidLinkPage = ({
  onRequestNewLink,
}: InvalidLinkPageProps): ReactElement => {
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
          <OnboardingLogo />

          <Box
            fontWeight={800}
            fontSize='x52'
            lineHeight='x62'
            fontFamily='sans'
          >
            {t('page.invalidLink.title')}
          </Box>

          <Box fontScale='h4'>{t('page.invalidLink.content')}</Box>

          <Button onClick={onRequestNewLink} primary>
            {t('page.invalidLink.button.text')}
          </Button>
        </Margins>
      </Box>
    </BackgroundLayer>
  );
};

export default InvalidLinkPage;
