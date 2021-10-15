import colors from '@rocket.chat/fuselage-tokens/colors.json';
import type { ReactElement, ReactNode } from 'react';
import type { SubmitHandler, Validate } from 'react-hook-form';
import { Trans } from 'react-i18next';

import BackgroundLayer from '../../common/BackgroundLayer';
import FormPageLayout from '../../common/FormPageLayout';
import AdminInfoForm from '../../forms/AdminInfoForm';
import type { AdminInfoPayload } from '../../forms/AdminInfoForm/AdminInfoForm';
import { Title } from './AdminInfoPage.styles';

const titleAdminInfo = () => (
  <Title fontColor={colors.n900}>
    <Trans i18nKey='page.form.title'>
      Let's
      <Title fontColor={colors.b500}>Launch</Title>
      Your Workspace
    </Trans>
  </Title>
);

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

const AdminInfoPage = (props: AdminInfoPageProps): ReactElement => (
  <BackgroundLayer>
    <FormPageLayout
      title={titleAdminInfo()}
      justifyContent='center'
      paddingEnd='135'
      description={props.description}
    >
      <AdminInfoForm {...props} />
    </FormPageLayout>
  </BackgroundLayer>
);

export default AdminInfoPage;
