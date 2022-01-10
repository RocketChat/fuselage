import { Box, Button } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';

import BackgroundLayer from '../../../common/BackgroundLayer';
import { OnboardingLogo } from '../../../common/OnboardingLogo';

type OauthAuthorizationPageProps = {
  clientName?: string;
  onClickAuthorizeOAuth: () => void;
  error: {
    message?: string;
    onGoBack?: () => void;
  };
};

const OauthAuthorizationPage = ({
  clientName,
  onClickAuthorizeOAuth,
  error,
}: OauthAuthorizationPageProps): ReactElement => {
  const { t } = useTranslation();

  const name = clientName || '...loading...';

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
        <OnboardingLogo />
        <Box
          fontWeight={500}
          width='100%'
          mbs='x24'
          mbe='x36'
          fontSize='x57'
          lineHeight='x62'
          fontFamily='sans'
        >
          {t('page.oauthAuthorizationPage.title')}
        </Box>
        <Box width='full' backgroundColor='white'>
          <Box fontScale='p1' p='x40' textAlign='start' color={colors.n900}>
            {error.message ? (
              <>
                <Box fontScale='h1' mbe='x18'>
                  Error
                </Box>
                {error.message}
                <Box mbs='x24'>
                  <Button onClick={error.onGoBack} primary>
                    {t('page.oauthAuthorizationPage.buttons.goBack')}
                  </Button>
                </Box>
              </>
            ) : (
              <>
                <Trans
                  i18nKey='page.oauthAuthorizationPage.allowLogin'
                  name={name}
                >
                  Do you wish to allow
                  <strong>{{ name }}</strong>
                  to login with your Rocket.Chat Cloud Account?
                </Trans>

                <Box mbs='x24'>
                  <Button onClick={onClickAuthorizeOAuth} primary>
                    {t('page.oauthAuthorizationPage.buttons.authorize')}
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>
    </BackgroundLayer>
  );
};

export default OauthAuthorizationPage;
