import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import AdminInfoForm from '../../forms/AdminInfoForm';

type AdminInfoPageProps = {
  currentStep: number;
  stepCount: number;
  validateUsername: Validate<string>;
  validateEmail: Validate<string>;
  passwordRulesHint: string;
  validatePassword: Validate<string>;
  onSubmit: SubmitHandler<{
    fullname: string;
    username: string;
    companyEmail: string;
    password: string;
  }>;
};

const AdminInfoPage = (props: AdminInfoPageProps): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout>
      <AdminInfoForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default AdminInfoPage;
