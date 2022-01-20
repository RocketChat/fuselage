import type { ReactElement } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import { Title, TitleHighlight } from '../../common/FormPageLayout.styles';
import type { FormPageLayoutStyleProps } from '../../common/Types';
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
        <Title>
          <Trans i18nKey='page.form.title'>
            Let's
            <TitleHighlight>Launch</TitleHighlight>
            Your Workspace
          </Trans>
        </Title>
      }
      styleProps={pageLayoutStyleProps}
    >
      <RegisteredServerForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default RegisteredServerPage;
