import { BackgroundLayer } from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';

import type { FormPageLayoutStyleProps } from '../../Types';
import FormPageLayout from '../../common/FormPageLayout';
import RegisterServerForm from '../../forms/RegisterServerForm';
import type { RegisterServerPayload } from '../../forms/RegisterServerForm/RegisterServerForm';

type RegisterServerPageProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<RegisterServerPayload>;
  onSubmit: SubmitHandler<RegisterServerPayload>;
  onClickRegisterOffline: () => void;
  offline?: boolean;
  validateEmail?: Validate<string>;
  termsHref?: string;
  policyHref?: string;
};

const pageLayoutStyleProps: FormPageLayoutStyleProps = {
  justifyContent: 'center',
};

const RegisterServerPage = (props: RegisterServerPageProps): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout styleProps={pageLayoutStyleProps}>
      <RegisterServerForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default RegisterServerPage;
