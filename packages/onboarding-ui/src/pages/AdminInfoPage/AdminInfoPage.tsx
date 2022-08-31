import { BackgroundLayer } from '@rocket.chat/layout';
import type { ReactElement, ReactNode } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';

import type { FormPageLayoutStyleProps } from '../../Types';
import FormPageLayout from '../../common/FormPageLayout';
import AdminInfoForm from '../../forms/AdminInfoForm';
import type { AdminInfoPayload } from '../../forms/AdminInfoForm/AdminInfoForm';

type AdminInfoPageProps = {
  title?: ReactNode;
  description?: ReactNode;
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

const pageLayoutStyleProps: FormPageLayoutStyleProps = {
  justifyContent: 'center',
};

const AdminInfoPage = ({
  title,
  description,
  ...props
}: AdminInfoPageProps): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout
      title={title}
      styleProps={pageLayoutStyleProps}
      description={description}
    >
      <AdminInfoForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default AdminInfoPage;
