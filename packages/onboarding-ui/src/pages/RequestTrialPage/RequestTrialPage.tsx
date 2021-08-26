import { css } from '@rocket.chat/css-in-js';
import { Box } from '@rocket.chat/fuselage';
import type { ComponentProps, ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import RequestTrialForm from '../../forms/RequestTrialForm';
import Description from './Description';

type RequestTrialPageProps = {
  onManageWorkspaces: () => void;
} & ComponentProps<typeof RequestTrialForm>;

const RequestTrialPage = (props: RequestTrialPageProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <FormPageLayout
        description={<Description />}
        title={t('page.requestTrial.title')}
        subtitle={t('page.requestTrial.subtitle')}
      >
        <RequestTrialForm {...props} />
        {props.onManageWorkspaces && (
          <Box
            mbs='x28'
            color='alternative'
            display='inline'
            textAlign='center'
          >
            <Trans i18nKey='page.alreadyHaveAccount'>
              Already have an account?
              <Box
                className={css`
                  cursor: pointer;
                `}
                onClick={props.onManageWorkspaces}
                is='span'
                cursor='pointer'
                color='primary-400'
                textDecorationLine='none'
              >
                Manage your workspaces.
              </Box>
            </Trans>
          </Box>
        )}
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default RequestTrialPage;
