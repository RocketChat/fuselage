import { Box } from '@rocket.chat/fuselage';
import { ReactElement } from 'react';
import { SubmitHandler, Validate } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

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

const AdminInfoPage = (props: AdminInfoPageProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <BackgroundLayer>
      <FormPageLayout
        title={
          <Box
            fontFamily='sans'
            fontWeight={800}
            fontSize='inherit'
            lineHeight='inherit'
          >
            {t('page.form.title')}
          </Box>
        }
      >
        <AdminInfoForm {...props} />
      </FormPageLayout>
    </BackgroundLayer>
  );
};

export default AdminInfoPage;
