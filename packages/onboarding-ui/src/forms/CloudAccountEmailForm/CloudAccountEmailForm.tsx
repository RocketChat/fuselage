import { ButtonGroup, Button, TextInput, Field } from '@rocket.chat/fuselage';
import type { ReactElement } from 'react';
import { useForm, SubmitHandler, UseFormProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

type CloudAccountEmailFormInputs = {
  email: string;
};

type CloudAccountEmailFormProps = {
  currentStep: number;
  stepCount: number;
  onBackButtonClick: () => void;
  onSubmit: SubmitHandler<CloudAccountEmailFormInputs>;
};

const options: UseFormProps<CloudAccountEmailFormInputs> = {
  defaultValues: {
    email: '',
  },
};

const CloudAccountEmailForm = ({
  currentStep,
  stepCount,
  onBackButtonClick,
  onSubmit,
}: CloudAccountEmailFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CloudAccountEmailFormInputs>(options);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Steps currentStep={currentStep} stepCount={stepCount} />
      <Form.Title>{t('form.serverRegistrationForm.title')}</Form.Title>
      <Form.Subtitle>{t('form.accountEmailForm.description')}</Form.Subtitle>
      <Form.Container>
        <Field>
          <Field.Label htmlFor='email'>
            {t('form.accountEmailForm.inputLabel')}
          </Field.Label>
          <Field.Row>
            <TextInput
              {...register('email', { required: true })}
              placeholder={t('form.accountEmailForm.inputPlaceholder')}
            />
          </Field.Row>
          {errors.email && (
            <Field.Error>{t('global.fieldRequired')}</Field.Error>
          )}
        </Field>
      </Form.Container>
      <Form.Footer>
        <ButtonGroup>
          <Button onClick={onBackButtonClick}>
            {t('component.form.action.back')}
          </Button>
          <Button type='submit' primary>
            {t('component.form.action.next')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default CloudAccountEmailForm;
