import { ButtonGroup, Button, TextInput, Field } from '@rocket.chat/fuselage';
import React, { ReactElement } from 'react';
import { useForm, SubmitHandler, UseFormProps } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Form from '../../common/Form';

type AccountEmailFormInputs = {
  email: string;
};

type AccountEmailFormProps = {
  onReturn: () => void;
  onSubmit: SubmitHandler<AccountEmailFormInputs>;
};

const options: UseFormProps<AccountEmailFormInputs> = {
  defaultValues: {
    email: '',
  },
};

const AccountEmailForm = ({
  onReturn,
  onSubmit,
}: AccountEmailFormProps): ReactElement => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountEmailFormInputs>(options);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Steps>{t('form.serverRegistrationForm.steps')}</Form.Steps>
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
          <Button onClick={onReturn}>{t('form.back')}</Button>
          <Button type='submit' primary>
            {t('form.next')}
          </Button>
        </ButtonGroup>
      </Form.Footer>
    </Form>
  );
};

export default AccountEmailForm;
