import { Box, ButtonGroup, Button } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import {
  useForm,
  SubmitHandler,
  FormProvider,
  UseFormProps,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';
import RegisterOptionCard from './RegisterOptionCard';
import StandaloneOptionCard from './StandaloneOptionCard';

type RegisterServerFormInputs = {
  registerType: 'registered' | 'standalone';
  agreement: boolean;
  updates: boolean;
};

type RegisterServerFormProps = {
  currnetStep: number;
  stepCount: number;
  onReturn: () => void;
  onSubmit: SubmitHandler<RegisterServerFormInputs>;
};

const options: UseFormProps<RegisterServerFormInputs> = {
  defaultValues: {
    registerType: 'registered',
    agreement: false,
    updates: false,
  },
};

export type ExternalLinks = { agreementHref: string; policyHref: string };

const RegisterServerForm = ({
  currnetStep,
  stepCount,
  onReturn,
  onSubmit,
  agreementHref,
  policyHref,
}: RegisterServerFormProps & ExternalLinks): ReactElement => {
  const { t } = useTranslation();

  const methods = useForm<RegisterServerFormInputs>(options);
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Steps currentStep={currnetStep} stepCount={stepCount} />
        <Form.Title>{t('form.serverRegistrationForm.title')}</Form.Title>
        <Box mbe='x24' mbs='x16'>
          <RegisterOptionCard
            agreementHref={agreementHref}
            policyHref={policyHref}
          />
        </Box>
        <StandaloneOptionCard />
        <Form.Footer>
          <ButtonGroup>
            <Button onClick={onReturn}>{t('form.back')}</Button>
            <Button type='submit' primary>
              {t('form.next')}
            </Button>
          </ButtonGroup>
        </Form.Footer>
      </Form>
    </FormProvider>
  );
};

export default RegisterServerForm;
