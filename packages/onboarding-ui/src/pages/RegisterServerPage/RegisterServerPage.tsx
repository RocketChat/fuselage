import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import RegisterServerForm from '../../forms/RegisterServerForm';

type RegisterServerPageProps = {
  currentStep: number;
  stepCount: number;
  onSubmit: SubmitHandler<{
    registerType: 'registered' | 'standalone';
    agreement: boolean;
    updates: boolean;
  }>;
  onBackButtonClick: () => void;
};

const OrganizationInfoPage = (props: RegisterServerPageProps): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout>
      <RegisterServerForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default OrganizationInfoPage;
