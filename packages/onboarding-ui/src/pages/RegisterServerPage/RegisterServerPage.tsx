import {
  BackgroundLayer,
  FormPageLayout as FormLayout,
} from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { Trans } from 'react-i18next';

import type { FormPageLayoutStyleProps } from '../../Types';
import FormPageLayout from '../../common/FormPageLayout';
import RegisterServerForm from '../../forms/RegisterServerForm';
import type { RegisterServerPayload } from '../../forms/RegisterServerForm/RegisterServerForm';

type RegisterServerPageProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<RegisterServerPayload>;
  onSubmit: SubmitHandler<RegisterServerPayload>;
  onBackButtonClick: () => void;
  onClickRegisterLater: () => void;
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
    <FormPageLayout
      title={
        <Trans i18nKey='page.form.title'>
          Let's
          <FormLayout.TitleHighlight>Launch</FormLayout.TitleHighlight>
          Your Workspace
        </Trans>
      }
      styleProps={pageLayoutStyleProps}
    >
      <RegisterServerForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default RegisterServerPage;
