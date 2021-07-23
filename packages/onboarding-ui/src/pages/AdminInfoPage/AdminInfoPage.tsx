import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import AdminInfoForm from '../../forms/AdminInfoForm';
import type { AdminInfoPayload } from '../../forms/AdminInfoForm/AdminInfoForm';

type AdminInfoPageProps = {
  title?: string;
  description?: string;
  currentStep: number;
  stepCount: number;
  passwordRulesHint: string;
  keepPosted?: boolean;
  initialValues?: Omit<AdminInfoPayload, 'password'>;
  validateUsername: Validate<string>;
  validateEmail: Validate<string>;
  validatePassword: Validate<string>;
  onSubmit: SubmitHandler<AdminInfoPayload>;
};

const AdminInfoPage = (props: AdminInfoPageProps): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout title={props.title} description={props.description}>
      <AdminInfoForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default AdminInfoPage;
