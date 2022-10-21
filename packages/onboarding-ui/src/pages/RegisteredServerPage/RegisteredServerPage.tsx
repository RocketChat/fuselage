import {
  BackgroundLayer,
  FormPageLayout as FormLayout,
} from '@rocket.chat/layout';
import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { Trans } from 'react-i18next';

import type { FormPageLayoutStyleProps } from '../../Types';
import FormPageLayout from '../../common/FormPageLayout';
import RegisteredServerForm from '../../forms/RegisteredServerForm';
import type { RegisteredServerPayload } from '../../forms/RegisteredServerForm/RegisteredServerForm';

type RegisteredServerPageProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<RegisteredServerPayload>;
  onSubmit: SubmitHandler<RegisteredServerPayload>;
  onBackButtonClick: () => void;
  onClickContinue: () => void;
  validateEmail?: Validate<string>;
  termsHref?: string;
  policyHref?: string;
};

const pageLayoutStyleProps: FormPageLayoutStyleProps = {
  justifyContent: 'center',
};

const RegisteredServerPage = (
  props: RegisteredServerPageProps
): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout
      title={
        <FormLayout.Title>
          <Trans i18nKey='page.form.title'>
            Let's
            <FormLayout.TitleHighlight>Launch</FormLayout.TitleHighlight>
            Your Workspace
          </Trans>
        </FormLayout.Title>
      }
      styleProps={pageLayoutStyleProps}
    >
      <RegisteredServerForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default RegisteredServerPage;
