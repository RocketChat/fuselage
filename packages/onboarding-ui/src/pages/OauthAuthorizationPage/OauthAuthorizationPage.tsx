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
  clientName?: string | undefined;
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

  return (
    <VerticalWizardLayout>
      <VerticalWizardLayoutTitle>
        {t('page.oauthAuthorizationPage.title')}
      </VerticalWizardLayoutTitle>
      <VerticalWizardLayoutForm>
        <Box fontScale='p1' p={40} textAlign='start' color={colors.n900}>
          {!clientName || error.message ? (
            <>
              <Box fontScale='h1' mbe={18}>
                Error
              </Box>
              {error.message}
              <Box mbs={24}>
                <Button onClick={error.onGoBack} primary>
                  {t('page.oauthAuthorizationPage.buttons.goBack')}
                </Button>
              </Box>
            </>
          ) : (
            <>
              <Trans
                i18nKey='page.oauthAuthorizationPage.allowLogin'
                name={clientName}
              >
                Do you wish to allow
                <strong>{{ clientName }}</strong>
                to login with your Rocket.Chat Cloud Account?
              </Trans>

              <Box mbs={24}>
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
