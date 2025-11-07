import {
  BackgroundLayer,
  FormPageLayout as FormLayout,
} from '@rocket.chat/layout';
import type { ComponentProps, ReactElement } from 'react';
import { useTranslation, Trans } from 'react-i18next';

import FormPageLayout from '../../common/FormPageLayout.js';
import RequestTrialForm from '../../forms/RequestTrialForm/index.js';

import Description from './Description.js';

type RequestTrialPageProps = ComponentProps<typeof RequestTrialForm>;

const RequestTrialPage = (props: RequestTrialPageProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <FormPageLayout
        description={<Description />}
        title={
          <Trans i18nKey='page.requestTrial.title'>
            Request a
            <FormLayout.TitleHighlight>30-day Trial</FormLayout.TitleHighlight>
          </Trans>
        }
        subtitle={t('page.requestTrial.subtitle')}
      >
        <RequestTrialForm {...props} />
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default RequestTrialPage;
