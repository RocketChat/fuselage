import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Trans } from 'react-i18next';

import BackgroundLayer from '../../../common/BackgroundLayer';
import FormPageLayout from '../../../common/FormPageLayout';
import { Title, TitleHighlight } from '../../../common/FormPageLayout.styles';
import type { FormPageLayoutStyleProps } from '../../../common/Types';
import RegisterServerForm from '../../forms/RegisterServerForm';
import type { RegisterServerPayload } from '../../forms/RegisterServerForm/RegisterServerForm';

type RegisterServerPageProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<RegisterServerPayload>;
  onSubmit: SubmitHandler<RegisterServerPayload>;
  onBackButtonClick: () => void;
};

const pageLayoutStyleProps: FormPageLayoutStyleProps = {
  justifyContent: 'center',
};

const RegisterServerPage = (props: RegisterServerPageProps): ReactElement => (
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
      <RegisterServerForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default RegisterServerPage;
