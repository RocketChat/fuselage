import { Box } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import RequestTrialForm from '../../forms/RequestTrialForm';
import type { RequestTrialFormProps } from '../../forms/RequestTrialForm/RequestTrialForm';
import Description from './Description';

const RequestTrialPage = (props: RequestTrialFormProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <FormPageLayout
        description={<Description />}
        title={t('page.requestTrial.title')}
        subtitle={t('page.requestTrial.subtitle')}
      >
        <RequestTrialForm {...props} />
        <Box mbs='x28' color='alternative' display='inline' textAlign='center'>
          <Trans i18nKey='page.alreadyHaveAccount'>
            Already have an account?
            <Box
              is='a'
              color='primary-400'
              textDecorationLine='none'
              href='https://cloud.rocket.chat/login'
              target='_blank'
              rel='noopener noreferrer'
            >
              Manage your workspaces.
            </Box>
          </Trans>
        </Box>
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default RequestTrialPage;
