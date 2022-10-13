import { Box, Button } from '@rocket.chat/fuselage';
import colors from '@rocket.chat/fuselage-tokens/colors.json';
import {
  VerticalWizardLayout,
  VerticalWizardLayoutTitle,
  VerticalWizardLayoutForm,
} from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import { Trans, useTranslation } from 'react-i18next';

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
    <VerticalWizardLayout>
      <VerticalWizardLayoutTitle>
        {t('page.oauthAuthorizationPage.title')}
      </VerticalWizardLayoutTitle>
      <VerticalWizardLayoutForm>
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
      </VerticalWizardLayoutForm>
    </VerticalWizardLayout>
  );
};

export default OauthAuthorizationPage;
