import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import CloudAccountEmailForm from '../../forms/CloudAccountEmailForm';

type CloudAccountEmailPageProps = {
  currentStep: number;
  stepCount: number;
  onBackButtonClick: () => void;
  onSubmit: SubmitHandler<{
    email: string;
  }>;
};

const CloudAccountEmailPage = (
  props: CloudAccountEmailPageProps
): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout>
      <CloudAccountEmailForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default CloudAccountEmailPage;
