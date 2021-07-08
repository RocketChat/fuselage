import { Box } from '@rocket.chat/fuselage';
import React, { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';
import RegisterOptionCard from './RegisterOptionCard';
import StandaloneOptionCard from './StandaloneOptionCard';

const RegisterServerForm = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <Form onSubmit={() => undefined}>
      <Form.Steps>{t('form.serverRegistrationForm.steps')}</Form.Steps>
      <Form.Title>{t('form.serverRegistrationForm.title')}</Form.Title>
      <Box mbe='x24' mbs='x16'>
        <RegisterOptionCard />
      </Box>
      <StandaloneOptionCard />
    </Form>
  );
};

export default RegisterServerForm;
