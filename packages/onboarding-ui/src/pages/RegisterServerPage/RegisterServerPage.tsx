import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import type { FormPageLayoutStyleProps } from '../../common/Types';
import RegisterServerForm from '../../forms/RegisterServerForm';
import type { RegisterServerPayload } from '../../forms/RegisterServerForm/RegisterServerForm';
import { Title } from './RegisterServer.styles';

type RegisterServerPageProps = {
  currentStep: number;
  stepCount: number;
  initialValues?: Partial<RegisterServerPayload>;
  onSubmit: SubmitHandler<RegisterServerPayload>;
  onBackButtonClick: () => void;
};

const titleRegisterServer = () => (
  <Title>
    <Trans i18nKey='page.form.title'>
      Let's
      <Title fontColor={colors.b500}>Launch</Title>
      Your Workspace
    </Trans>
  </Title>
);

const pageLayoutStyleProps: FormPageLayoutStyleProps = {
  justifyContent: 'center',
  paddingEnd: '135',
};

const RegisterServerPage = (props: RegisterServerPageProps): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout
      title={titleRegisterServer()}
      styleProps={pageLayoutStyleProps}
    >
      <RegisterServerForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default RegisterServerPage;
